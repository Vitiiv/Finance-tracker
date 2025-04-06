// Importa o módulo 'express', que é um framework para criar servidores web em Node.js.
// Ele facilita a criação de rotas, tratamento de requisições e respostas HTTP.
import express from 'express';

// Importa o módulo 'dotenv', que permite carregar variáveis de ambiente de um arquivo chamado '.env'.
// Isso é útil para manter informações sensíveis (como portas ou chaves secretas) fora do código.
import dotenv from 'dotenv';

// Importa o arquivo de rotas definido em outro lugar (provavelmente em './routes').
// Esse arquivo contém as configurações de endpoints (como '/login', '/usuarios', etc.).
import router from './routes';

// Importa o módulo 'cors', que é usado para permitir que o servidor aceite requisições de diferentes origens (endereços IP ou domínios).
// Isso é importante para evitar problemas de segurança ou bloqueios em aplicações web modernas.
import cors from 'cors';

// Carrega as variáveis de ambiente do arquivo '.env' para o processo atual.
// Depois disso, elas podem ser acessadas usando 'process.env.NOME_DA_VARIAVEL'.
dotenv.config();

// Cria uma instância do servidor Express.
// Todas as configurações e rotas serão definidas a partir dessa variável 'app'.
const app = express();

// Define a porta em que o servidor vai rodar.
// A porta é obtida do arquivo '.env' através da variável de ambiente 'PORT'.
// Se não houver uma porta definida no '.env', você poderia definir um valor padrão, como 3000, mas aqui está apenas usando o valor do ambiente.
const port = process.env.PORT; // Por padrão, muitos desenvolvedores usam a porta 3000 para desenvolvimento.

// Configura o servidor para usar o 'cors'.
// Isso permite que requisições de outros domínios ou IPs sejam aceitas pelo servidor.
// Sem isso, uma aplicação frontend rodando em outro endereço (como localhost:5173) não conseguiria se comunicar com o servidor.
app.use(cors());

// Configura o servidor para usar as rotas definidas no arquivo 'router'.
// Todas as requisições que chegarem ao servidor na raiz ('/') serão encaminhadas para o 'router', que decide o que fazer com elas.
app.use('/', router);

// Inicia o servidor e faz ele "escutar" na porta definida em 'port'.
// Quando o servidor estiver ativo, a função de callback será executada, mostrando mensagens no console.
app.listen(port, () => {
    // Exibe no console uma mensagem simples para confirmar que o servidor está funcionando.
    console.log('[SERER] Server is running...');
});