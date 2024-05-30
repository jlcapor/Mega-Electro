import type { SidebarNavItem } from "@/types";

export interface ProfileConfig {
  sidebarNav: SidebarNavItem[];
}

export const profileConfig: ProfileConfig = {
    sidebarNav: [
    {
      title: "Descripción general",
      href: "/account",
    },
    {
      title: "Perfil",
      href: "/account/profile",
    },
    {
      title: "Direcciones",
      href: "/account/addresses",
    },
    {
      title: "Pedidos",
      href: "/account/orders",
    },
   
  ],
};
