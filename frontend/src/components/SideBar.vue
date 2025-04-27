<template>
    <div class="w-[66px] h-full bg-[#121212] rounded-full flex flex-col items-center py-6">
        <!-- Logo -->
        <RiBarChartLine class="h-10 w-10 text-gray-100 mb-12 cursor-pointer" />
        <!-- Buttons -->
        <div class="flex flex-col items-center justify-start grow gap-4 text-gray-100">

            <Button
                variant="primary"
                class="custom-button-padding"
                v-for="button in navigationStore.getSideBarButtons"
                :key="button.title"
                :class="button.path === route.path ? 'bg-[#00FF6B]' : ''"
                @click="router.push(button.path)"
            >
                <component :is="button.icon" class="custom-icon-size" />
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
    RiBarChartLine,
    RiLogoutBoxFill
} from '@remixicon/vue';

import {
    Button
} from '@/components/ui'

import { useMainStore } from '@/stores/useMainStore';
import { useRouter, useRoute } from 'vue-router';
import { useNavigationStore } from '@/stores/useNavigationStore';

const router = useRouter();
const route = useRoute();
const mainStore = useMainStore();
const navigationStore = useNavigationStore();

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
