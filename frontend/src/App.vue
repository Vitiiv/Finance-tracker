<template>
	<div class="w-dvw h-dvh">
		<router-view />
		<Toaster />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { Toaster } from './components/ui';
import { useMainStore } from './stores/useMainStore';

const mainStore = useMainStore();

// OnMounted é executado quando a página é montada, ele verifica se o tema atual é dark e adiciona a classe dark.
// Isso faz com que o tema seja aplicado ao carregar a página.
onMounted(() => {
  if (mainStore.theme === 'dark') document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');    
})
</script>

<style>
html, body, #app {
  height: 100%;
}
</style>
