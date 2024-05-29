import { Icons } from "@/components/icons";
import { type SidebarNavItem } from "@/types";


export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Usuarios",
      href: "/dashboard/users",
      icon: Icons.user,
    },
    {
      title: "Productos",
      href: "/dashboard/products",
      icon: Icons.product,
    },
    {
      title: "Categorias",
      href: "/dashboard/categories",
      icon: Icons.category,
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: Icons.order,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: Icons.analytics,
    },
  ],
};
