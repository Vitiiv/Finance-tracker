import { createRouter, createWebHistory } from 'vue-router'
import { AuthService } from '@/services/AuthService';
import { useNavigationStore } from '@/stores/useNavigationStore';
import LoginPage from '@/pages/LoginPage.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Overview from '@/pages/OverviewPage.vue';
import WalletPage from '@/pages/WalletPage.vue';
import ChartsPage from '@/pages/ChartsPage.vue';
import CardsPage from '@/pages/CardsPage.vue';

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginPage,
		meta: { requiresAuth: false }
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: Dashboard, //Dentro do programa
		meta: { requiresAuth: true }, // Requer autenticação
		children: [
			{
				path: '',
				name: 'dashboard-home',
				component: Overview, //Dentro do programa
				meta: { requiresAuth: true }, // Requer autenticação
			},
			{
				path: 'wallet',
				name: 'dashboard-wallet',
				component: WalletPage,
				meta: { requiresAuth: true },
			},
			{
				path: 'charts',
				name: 'dashboard-charts',
				component: ChartsPage,
				meta: { requiresAuth: true },
			},
			{
				path: 'cards',
				name: 'dashboard-cards',
				component: CardsPage,
				meta: { requiresAuth: true },
			}
		]
	},
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

	const navigationStore = useNavigationStore();
	navigationStore.setDashboardTitle(to.path); // Atualiza o título do dashboard com base na rota atual

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
