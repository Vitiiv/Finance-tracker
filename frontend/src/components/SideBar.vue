<template>
    <div class="w-[66px] h-[90%] bg-[#121212] rounded-full ml-[32px] flex flex-col items-center py-6">
        <!-- Logo -->
        <RiBarChartLine class="h-10 w-10 text-gray-100 mb-12 cursor-pointer" />
        <!-- Buttons -->
        <div class="flex flex-col items-center justify-start grow gap-4 text-gray-100">
            <Button
                variant="primary"
                class="custom-button-padding"
                @click="router.push('/dashboard/overview')"
            >
                <RiFunctionFill class="custom-icon-size" />
            </Button>

            <Button
                variant="primary"
                class="custom-button-padding"
                @click="router.push('/dashboard/wallet')"
            >
                <RiWallet2Fill class="custom-icon-size fill-current" />
            </Button>

            <Button
                variant="primary"
                class="custom-button-padding"
                @click="router.push('/dashboard/charts')"
            >
                <RiBarChart2Fill class="custom-icon-size"/>
            </Button>

            <Button
                variant="primary"
                class="custom-button-padding"
                @click="router.push('/dashboardcards')"
            >
                <RiBankCardFill class="custom-icon-size" />
            </Button>
        </div>
        <!-- Toggle Theme -->
        <Button
            variant="primary"
            class="custom-button-padding mb-4 text-gray-100"
            @click="mainStore.toggleTheme()"
        >
            <RiSunFill v-if="mainStore.theme === 'light' " class="custom-icon-size" />
            <RiMoonFill v-else class="custom-icon-size" />
        </Button>
        <!-- Logout -->
        <Button
            variant="primary"
            class="custom-button-padding text-gray-100"
        >
            <RiLogoutBoxFill class="custom-icon-size" />
        </Button>
    </div>
</template>

<script setup lang="ts">

import {
    RiSunFill,
    RiMoonFill,
    RiBankCardFill,
    RiFunctionFill,
    RiWallet2Fill,
    RiBarChart2Fill,
    RiBarChartLine,
    RiLogoutBoxFill
} from '@remixicon/vue';

import {
    Button
} from '@/components/ui'

import { useMainStore } from '@/stores/useMainStore';
import { useRouter } from 'vue-router';

const router = useRouter();

const mainStore = useMainStore();

</script>

<style scoped>
.custom-button-padding {
    padding: 4px !important;
}

.custom-icon-size {
    width: 100% !important;
    height: 100% !important;
}
</style>
