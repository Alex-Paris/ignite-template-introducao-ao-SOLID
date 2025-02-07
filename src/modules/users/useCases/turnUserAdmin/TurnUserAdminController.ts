import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

/* eslint @typescript-eslint/no-explicit-any: ["off"] */

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id }: any = request.params;

    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });

      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
