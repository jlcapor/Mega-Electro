import type { CartItemSchema } from "@/lib/validations/cart";

export interface NavItem {
  title: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface StoredFile {
  id: string;
  name: string;
  url: string;
}

export type SessionUser = {
  id: string;
} & {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

//D3m0soft_#34.
export interface CartItem {
  id: string;
  paymentIntentId: string;
  clientSecret: string;
  items: CartItemSchema[];
  closed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
