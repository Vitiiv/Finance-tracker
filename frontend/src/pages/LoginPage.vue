<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-4">
    <div class="w-full max-w-md">
      <!-- Logo e cabeçalho -->
      <div class="text-center mb-8">
        <div
          class="flex items-center justify-center gap-2 mb-2 cursor-pointer"
          @click="router.push('/')"
        >
          <BarChartIcon class="h-8 w-8 text-emerald-600" />
          <h1 class="text-2xl font-bold text-emerald-600">FinTrack</h1>
        </div>
        <h2 class="text-xl font-medium text-gray-700">Bem-vindo de volta</h2>
        <p class="text-gray-500 text-sm">Entre para gerenciar suas finanças</p>
      </div>
      
      <!-- Formulário de login -->
      <Card>
        <CardContent class="pt-6">
          <form @submit.prevent="authStore.login()" class="space-y-4">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="seu@email.com" 
                v-model="authStore.email"
              />
            </div>

            <!-- Senha e Esqueceu a Senha -->
            <div class="space-y-2">
              <div class="flex items-center justify-between">
                <Label for="password">Senha</Label>
                <a href="#" class="text-xs text-emerald-600 hover:text-emerald-700">
                  Esqueceu a senha?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                v-model="authStore.password"
              />
            </div>
            
            <!-- Lembrar de mim -->
            <div class="flex items-center space-x-2">
              <Checkbox id="remember"/>
              <label 
                for="remember" 
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lembrar de mim
              </label>
            </div>
            
            <!-- Botão de login -->
            <Button
              type="submit"
              class="w-full bg-emerald-600 hover:bg-emerald-700"
              :disabled="mainStore.loading"
            >
              <Loader2Icon v-if="mainStore.loading" class="mr-2 h-4 w-4 animate-spin" />
              {{ mainStore.loading ? 'Entrando...' : 'Entrar' }}
            </Button>
          </form>
        </CardContent>
        <!-- Rodapé (Criar Conta) -->
        <CardFooter>
          <p class="text-sm text-center w-full text-gray-500">
            Não tem uma conta?
            <a href="#" class="text-emerald-600 hover:text-emerald-700 font-medium">
              Criar conta
            </a>
          </p>
        </CardFooter>

      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/useAuthStore';
import { useMainStore } from '@/stores/useMainStore';

import { 
  BarChartIcon, 
  Loader2Icon
} from 'lucide-vue-next';

// Importando componentes do Shadcn UI para Vue
import { 
  Button,
  Card, 
  CardContent, 
  CardFooter, 
  Input,
  Label,
  Checkbox
} from '@/components/ui';

const mainStore = useMainStore();
const authStore = useAuthStore();
const router = useRouter();

</script>