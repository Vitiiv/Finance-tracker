<template>

  <p>Resposta do servidor {{ loginStores.dataAPI }}</p>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useLoginStores } from './stores/loginStores';
const loginStores = useLoginStores();

onMounted(async () => {
  await loginStores.getData();
});

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
