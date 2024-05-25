import { Icons } from "@/components/icons";
import { type SidebarNavItem } from "@/types";


export interface DashboardConfig {
    sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Icons.dashboard,
      items: [],
    },
    {
      title: "Productos",
      href: "/dashboard/products",
      icon: Icons.product,
      items: [],
    },
    {
      title: "Categorias",
      href: "/dashboard/categories",
      icon: Icons.category,
      items: [],
    },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: Icons.order,
      items: [],
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: Icons.analytics,
      items: [],
    },
  ],
};
