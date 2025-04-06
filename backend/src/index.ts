import express from 'express'; //servidor
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors'; //identifica o endereço IP

dotenv.config();

const app = express();
const port = process.env.PORT; //todo servidor precisa de uma, padrão = porta 3000

app.use(cors())
app.use('/', router);

app.listen(port, () => { // app..listen(port, minhafuncaoparaligaroserver)
    console.log('funciona');
    console.log(port);
});


