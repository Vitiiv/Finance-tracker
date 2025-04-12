import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/pages/WelcomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import Dashboard from '@/pages/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Requer autenticação
  }
  // {
  //   path: '/:pathMatch(.*)*', // Captura qualquer rota inválida
  //   name: 'not-found',
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(), // Usa histórico do navegador
  routes,
});

// Verificação de autenticação antes de cada rota
router.beforeEach(async (to, from, next) => {
  // Função para verificar autenticação (exemplo com Supabase ou token)
  const isAuthenticated = async () => {
    // Simples: verifica se há um token no localStorage
    const token = localStorage.getItem('userToken');
    if (!token) return false;

    // Opcional: Valida o token com o backend (ex.: Supabase)
    try {
      // Integre com sua SupabaseService, se necessário
      const response = await fetch('sua-api/verificar-token', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.ok;
    } catch {
      return false;
    }
  };

  // Se a rota exige autenticação e o usuário não está autenticado
  if (to.meta.requiresAuth && !(await isAuthenticated())) {
    // Redireciona para login, mantendo a rota desejada para redirecionar após login
    return next({ name: 'login', query: { redirect: to.fullPath } });
  }

  // Se o usuário está autenticado e tenta acessar login/register, redireciona para dashboard
  if ((to.name === 'login' || to.name === 'register') && (await isAuthenticated())) {
    return next({ name: 'dashboard' });
  }

  // Libera o acesso
  next();
});

export default router
