// Importa o 'Router' do Express para criar rotas.
import { Router } from "express";
// Importa as rotas de login definidas em outro arquivo.
import loginRouter from "./loginRouter";

// Cria um objeto de rotas.
const router = Router();

// Usa as rotas de login no caminho '/auth'.
router.use('/auth', loginRouter);

// Exporta as rotas para uso no servidor.
export default router;