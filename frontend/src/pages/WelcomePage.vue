<template>
    <div class="min-h-screen flex flex-col">
      <!-- Header -->
      <header class="border-b">
        <div class="container mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <LayoutIcon class="h-6 w-6" />
              <span class="font-semibold text-lg">Minha Aplicação</span>
            </div>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Início</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid gap-3 p-4 w-[400px]">
                      <li class="row-span-3">
                        <NavigationMenuLink as-child>
                          <a
                            class="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div class="mb-2 mt-4 text-lg font-medium">
                              Bem-vindo
                            </div>
                            <p class="text-sm leading-tight text-muted-foreground">
                              Conheça nossa plataforma e descubra todas as possibilidades.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink as-child>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div class="text-sm font-medium leading-none">Análises</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Visualize dados e métricas importantes.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink as-child>
                          <a
                            class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div class="text-sm font-medium leading-none">Automação</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Automatize tarefas e processos repetitivos.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#">Sobre</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div class="flex items-center gap-4">
              <Button
								variant="outline"
								size="sm"
								class="cursor-pointer"
								@click="router.push('/login')"
							>
								Entrar
							</Button>
              <Button
								size="sm"
								class="cursor-pointer"
							>
								Registrar
							</Button>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="py-20 px-4">
        <div class="container mx-auto max-w-5xl text-center">
          <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Bem-vindo à Nossa Plataforma
          </h1>
          <p class="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Transforme suas ideias em realidade com nossa solução completa. 
            Simples, poderosa e projetada para você.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Começar Agora
              <ArrowRightIcon class="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-20 bg-muted/50">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Recursos Principais</h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Nossa plataforma oferece tudo o que você precisa para ter sucesso
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <ZapIcon class="h-10 w-10 text-rose-500" />
                <CardTitle class="mt-4">Rápido e Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nossa plataforma é otimizada para oferecer o melhor desempenho possível, 
                  garantindo uma experiência fluida.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <ShieldIcon class="h-10 w-10 text-emerald-500" />
                <CardTitle class="mt-4">Seguro e Confiável</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Segurança de nível empresarial para proteger seus dados e 
                  garantir a privacidade dos seus usuários.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <BarChartIcon class="h-10 w-10 text-amber-500" />
                <CardTitle class="mt-4">Análises Detalhadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Obtenha insights valiosos com nossas ferramentas de análise 
                  avançadas e relatórios personalizados.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="py-20">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
            <p class="text-muted-foreground max-w-2xl mx-auto">
              Veja o que nossos clientes estão falando sobre nossa plataforma
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="mb-2 italic text-muted-foreground">
                      "Esta plataforma revolucionou a maneira como gerenciamos nossos projetos. 
                      A interface é intuitiva e os recursos são exatamente o que precisávamos."
                    </p>
                    <p class="font-semibold">João Silva</p>
                    <p class="text-sm text-muted-foreground">Diretor de Tecnologia, Empresa ABC</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent class="pt-6">
                <div class="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Avatar" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p class="mb-2 italic text-muted-foreground">
                      "Desde que começamos a usar esta solução, nossa produtividade aumentou em 40%. 
                      O suporte ao cliente é excepcional e sempre responde rapidamente."
                    </p>
                    <p class="font-semibold">Maria Oliveira</p>
                    <p class="text-sm text-muted-foreground">Gerente de Projetos, Empresa XYZ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-20 bg-muted/50">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-4">Pronto para começar sua jornada?</h2>
          <p class="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de usuários satisfeitos e transforme seu negócio hoje mesmo.
          </p>
          <div class="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Crie sua conta gratuita</CardTitle>
                <CardDescription>
                  Comece a usar nossa plataforma em menos de 2 minutos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form class="space-y-4">
                  <div class="space-y-2">
                    <Label for="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div class="space-y-2">
                    <Label for="password">Senha</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button class="w-full">Registrar</Button>
                </form>
              </CardContent>
              <CardFooter>
                <p class="text-xs text-center w-full text-muted-foreground">
                  Ao se registrar, você concorda com nossos 
                  <a href="#" class="underline">Termos de Serviço</a> e 
                  <a href="#" class="underline">Política de Privacidade</a>.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="border-t py-12 mt-auto">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-semibold mb-4">Empresa</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Sobre Nós</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Carreiras</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Imprensa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Produto</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Recursos</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Preços</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Roadmap</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Integrações</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Recursos</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Documentação</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Guias</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">API</a></li>
                <li><a href="#" class="text-muted-foreground hover:text-foreground">Comunidade</a></li>
              </ul>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4">Contato</h3>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-muted-foreground">
                  <MailIcon class="h-4 w-4" />
                  contato@exemplo.com
                </li>
                <li class="flex items-center gap-2 text-muted-foreground">
                  <PhoneIcon class="h-4 w-4" />
                  (11) 1234-5678
                </li>
                <li class="flex items-center gap-2 text-muted-foreground">
                  <MapPinIcon class="h-4 w-4" />
                  São Paulo, Brasil
                </li>
              </ul>
              
              <div class="mt-4">
                <h4 class="text-sm font-semibold mb-2">Siga-nos</h4>
                <div class="flex space-x-4">
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <FacebookIcon class="h-5 w-5" />
                  </a>
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <TwitterIcon class="h-5 w-5" />
                  </a>
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <InstagramIcon class="h-5 w-5" />
                  </a>
                  <a href="#" class="text-muted-foreground hover:text-foreground">
                    <LinkedinIcon class="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>© {{ new Date().getFullYear() }} Sua Empresa. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
<script setup lang="ts">
import { useRouter } from 'vue-router';

import {
	LayoutIcon,
	ArrowRightIcon,
	ZapIcon,
	ShieldIcon,
	BarChartIcon,
	MailIcon,
	PhoneIcon,
	MapPinIcon,
	FacebookIcon,
	TwitterIcon,
	InstagramIcon,
	LinkedinIcon
} from 'lucide-vue-next';

// Importando componentes do Shadcn UI para Vue
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	Avatar,
	AvatarFallback,
	AvatarImage,
	Input,
	Label
} from '@/components/ui';

// Variáveis 
const router = useRouter();

</script>