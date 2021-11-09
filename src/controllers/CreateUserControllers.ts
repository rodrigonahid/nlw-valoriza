import { Request, Response } from "express";
import { CreateUserServices } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    console.log(req.body);
    const { name, email, admin } = req.body;

    const createUserService = new CreateUserServices();

    const user = await createUserService.execute({ name, email, admin });

    return res.json(user);
  }
}

export { CreateUserController };
