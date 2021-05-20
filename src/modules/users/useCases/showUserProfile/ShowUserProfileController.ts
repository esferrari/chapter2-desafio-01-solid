import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const {id} = request.body;
    const user = this.showUserProfileUseCase.execute(id);

    return response.status(201).json(user);
  }
}

export { ShowUserProfileController };
