# Back-End

Este é o back-end do projeto **Finance Tracker**, desenvolvido com **Node.js**, **Express** e **TypeScript**. Ele fornece APIs para autenticação e outras funcionalidades relacionadas ao gerenciamento financeiro.

## Estrutura de Pastas

Abaixo está a estrutura de pastas do projeto, com uma breve descrição de cada pasta:

### Descrição das Pastas

- **`src/controllers/`**: Contém os controladores que lidam com as requisições HTTP e chamam os serviços apropriados. Exemplo: `loginController.ts`.
- **`src/routes/`**: Define as rotas da aplicação e conecta-as aos controladores. Exemplo: `loginRouter.ts`.
- **`src/services/`**: Contém a lógica de negócios e integrações externas, como chamadas a APIs ou bancos de dados.
- **`src/index.ts`**: Arquivo principal que configura o servidor Express, middlewares e rotas.

## Dependências

### Dependências de Produção

- **[@supabase/supabase-js](https://github.com/supabase/supabase-js)**: Biblioteca para integração com o Supabase.
- **[cors](https://github.com/expressjs/cors)**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **[dotenv](https://github.com/motdotla/dotenv)**: Carrega variáveis de ambiente de um arquivo `.env`.
- **[express](https://expressjs.com/)**: Framework web para Node.js.

### Dependências de Desenvolvimento

- **[@types/cors](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/cors)**: Tipos TypeScript para o pacote `cors`.
- **[@types/express](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/express)**: Tipos TypeScript para o pacote `express`.
- **[@types/node](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node)**: Tipos TypeScript para o Node.js.
- **[ts-node-dev](https://github.com/wclr/ts-node-dev)**: Ferramenta para executar e reiniciar automaticamente o servidor durante o desenvolvimento.
- **[typescript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.