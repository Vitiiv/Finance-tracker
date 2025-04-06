import express from 'express'; //servidor
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors'; //identifica o endereço IP

dotenv.config();

const app = express();

// TODO o SERVIDOR precisa de uma PORTA
const port = process.env.PORT; //todo servidor precisa de uma, padrão = porta 3000

app.use(cors())
app.use('/', router);

app.listen(port, () => {
    // Port é uma variável de ambiente, que vai ser pega no .ENV
    // .ENV é o local onde vamos colocar as variáveis sensiveis

    console.log('funciona');
    console.log(port);
});


