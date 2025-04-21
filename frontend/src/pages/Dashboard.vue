<template>
    <div class="w-dvw h-dvh flex flex-row items-center">
        <SideBar />
        <div class="flex-1 overflow-auto">
            <router-view />
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
</script>