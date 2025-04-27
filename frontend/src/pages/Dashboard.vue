<template>
    <div class="w-dvw h-dvh flex flex-row items-start p-8">
        <SideBar />
        <div class="flex flex-1 flex-col ml-5 h-full">
            <Header />
            <div class="flex-1 w-full flex flex-col h-0">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
</script>