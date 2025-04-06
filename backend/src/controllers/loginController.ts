import { Request, Response } from "express";

export class LoginController {

    // public async nomeFunção()  : retorno {}
    public async loginAuth(req: Request, res: Response): Promise<void> {
        res.send({ status: 200, msg: 'Login bem sucessido' })
    }
}



