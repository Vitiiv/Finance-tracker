import { defineStore } from "pinia";
import type { IButtonSideBar } from "@/interface/IButtonSideBar";
import { RiBankCardFill, RiBarChart2Fill, RiFunctionFill, RiWallet2Fill } from "@remixicon/vue";

export const useNavigationStore = defineStore("navigationStore", {
   state: () => ({
        dashboardTitle: '' as string,
   }),
   getters: {
        getSideBarButtons() : IButtonSideBar[] {
            return [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: RiFunctionFill,
                },
                {
                    title: "Wallets",
                    path: "/dashboard/wallet",
                    icon: RiWallet2Fill,
                },
                {
                    title: "Charts",
                    path: "/dashboard/charts",
                    icon: RiBarChart2Fill   ,
                },
                {
                    title: "Cards",
                    path: "/dashboard/cards",
                    icon: RiBankCardFill
                }
            ]
        }
    },
    actions: {
        setDashboardTitle(path: string) {
            this.dashboardTitle = this.getSideBarButtons.find((button) => button.path === path)?.title || '';
        }
    }
});