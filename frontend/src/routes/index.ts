import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/pages/WelcomePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import Dashboard from '@/pages/Dashboard.vue';
import { AuthService } from '@/services/AuthService';

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomePage,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard, //Dentro do programa
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
  // Valida se a rota requer autenticação
  if (to.meta.requiresAuth == false) {
    next();
    return;
  }

  // Os restante desse bloco serão executados as validações de autenticação
  // Verifica se existe um token de acesso no sessionStorage
  if (sessionStorage.getItem('access_token') == null) {
    router.push('/login');
    next();
    return
  };

  // Verifica se o token de acesso é válido
  await AuthService.validateToken()
    .then((response) => {
      sessionStorage.setItem('access_token', response.data.token);
    })
    .catch((error) => {
      sessionStorage.removeItem('access_token');
      router.push('/login');
      return;
    })
  
  next();   // Libera o acesso
});

export default router
