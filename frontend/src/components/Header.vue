<template>
    <div class="h-[64px] w-full bg-white dark:bg-[#121212] rounded-3xl flex flex-row items-center px-4">
        <p class="text-xl font-semibold">{{ navigationStore.dashboardTitle }}</p>
    </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '@/stores/useNavigationStore';

const navigationStore = useNavigationStore();
</script>