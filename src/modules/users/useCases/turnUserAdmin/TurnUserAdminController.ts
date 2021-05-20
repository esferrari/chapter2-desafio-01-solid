import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { id } = request.body;
    const user = this.turnUserAdminUseCase.execute(id);

    return response.status(201).json(user);
  }
}

export { TurnUserAdminController };
