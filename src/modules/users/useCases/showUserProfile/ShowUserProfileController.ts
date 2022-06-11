import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

/* eslint @typescript-eslint/no-explicit-any: ["off"] */

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id }: any = request.params;

    try {
      const all = this.showUserProfileUseCase.execute({ user_id });

      return response.json(all);
    } catch (err) {
      return response.status(404).json({ error: err });
    }
  }
}

export { ShowUserProfileController };
