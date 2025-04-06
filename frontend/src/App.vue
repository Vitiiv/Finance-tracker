<template>
  <!-- Div Pai -->
  <div style="background-color: #EEF2F5;" 
  class="h-screen w-screen flex justify-center flex items-center">
    <!-- Div Filho -->
    <div style="background-color: #FFFFFF;"
      class="w-xl h-[32rem] rounded-sm flex flex-col justify-between p-16">
      <!-- Header a subtitle -->
      <section class="flex-col">
        <p class="text-3xl font-bold mb-4">
          Back to your digital life
        </p>
        <p class="text-lg text-[#545454]">
          Choose one of the option to go
        </p>
        
      </section>

      <!-- Inputs -->
      <section class="my-10 flex-col flex gap-y-4">
        <Input
          type="email"
          placeholder="Email"
          class="h-[69px]" 
          @update:model-value="(value) => authStore.email = value"
        />
        
        <Input
          type="password"
          placeholder="Password"
          class="h-[69px]"
          @update:model-value="(value) => authStore.password = value"
        />
      </section>
   
      <!-- Button -->
      <Button
        class="w-2xs h-[62px] self-center cursor-pointer"
        @click="authStore.login()"
      >
        Login
      </Button>

    </div>
  </div>
</template>


<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {useAuthStore} from '@/stores/useAuthStore';

const authStore = useAuthStore();
</script>


<style></style>
