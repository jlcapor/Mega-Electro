"use server";

import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { db } from "@/server/db";
import { carts, categories, products, subcategories } from "@/server/db/schema";

import {
  cartItemSchema,
  deleteCartItemSchema,
  type CartLineItemSchema,
} from "@/lib/validations/cart";
import { and, desc, eq, inArray } from "drizzle-orm";
import { z } from "zod";

export async function getCart(): Promise<CartLineItemSchema[]> {
  noStore();
  const cartId = cookies().get("cartId")?.value;
  if (!cartId) return [];

  try {
    const cart = await db.query.carts.findFirst({
      columns: {
        items: true,
      },
      where: eq(carts.id, cartId),
    });

    const productIds = cart?.items?.map((item) => item.productId) ?? [];

    if (productIds.length === 0) return [];

    const uniqueProductIds = [...new Set(productIds)];

    const cartLineItems = await db
      .select({
        id: products.id,
        name: products.name,
        images: products.images,
        category: categories.name,
        subcategory: subcategories.name,
        price: products.price,
        inventory: products.inventory,
      })
      .from(products)
      .leftJoin(categories, eq(categories.id, products.categoryId))
      .leftJoin(subcategories, eq(subcategories.id, products.subcategoryId))
      .where(and(inArray(products.id, uniqueProductIds)))
      .groupBy(products.id)
      .orderBy(desc(products.createdAt))
      .execute()
      .then((items) => {
        return items.map((item) => {
          const quantity = cart?.items?.find(
            (cartItem) => cartItem.productId === item.id,
          )?.quantity;

          return {
            ...item,
            quantity: quantity ?? 0,
          };
        });
      });

    return cartLineItems;
  } catch (error) {
    return [];
  }
}

export async function updateCartItem(rawInput: z.infer<typeof cartItemSchema>) {
  noStore();

  try {
    const input = cartItemSchema.parse(rawInput);

    const cartId = cookies().get("cartId")?.value;

    if (!cartId) {
      throw new Error("cartId not found, please try again.");
    }

    const cart = await db.query.carts.findFirst({
      where: eq(carts.id, cartId),
    });

    if (!cart) {
      throw new Error("Cart not found, please try again.");
    }

    const cartItem = cart.items?.find(
      (item) => item.productId === input.productId,
    );

    if (!cartItem) {
      throw new Error("CartItem not found, please try again.");
    }

    if (input.quantity === 0) {
      cart.items =
        cart.items?.filter((item) => item.productId !== input.productId) ?? [];
    } else {
      cartItem.quantity = input.quantity;
    }

    await db
      .update(carts)
      .set({
        items: cart.items,
      })
      .where(eq(carts.id, cartId));

    revalidatePath("/");

    return {
      data: cart.items,
      error: null,
    };
  } catch (err: any) {
    return {
      data: null,
      error: err.message,
    };
  }
}

export async function deleteCartItem(
  input: z.infer<typeof deleteCartItemSchema>,
) {
  noStore();

  try {
    const cartId = cookies().get("cartId")?.value;

    if (!cartId) {
      throw new Error("cartId not found, please try again.");
    }

    const cart = await db.query.carts.findFirst({
      where: eq(carts.id, cartId),
    });

    if (!cart) return;

    cart.items =
      cart.items?.filter((item) => item.productId !== input.productId) ?? [];

    await db
      .update(carts)
      .set({
        items: cart.items,
      })
      .where(eq(carts.id, cartId));

    revalidatePath("/");
  } catch (err: any) {
    return {
      data: null,
      error: err.message,
    };
  }
}
