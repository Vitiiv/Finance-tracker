<template>
  <WelcomePage/>
</template>


<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {useAuthStore} from '@/stores/useAuthStore';
import WelcomePage from '@/pages/WelcomePage.vue';

const authStore = useAuthStore();
</script>


<style></style>
