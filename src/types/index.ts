import { CartItemSchema } from "@/lib/validations/cart";

export interface StoredFile {
  id: string
  name: string
  url: string
}

//D3m0soft_#34.
export interface CartItem {
  id: string; 
  paymentIntentId: string
  clientSecret: string
  items: CartItemSchema[]
  closed: boolean;
  createdAt: Date;
  updatedAt: Date;
}



