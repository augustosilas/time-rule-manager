import { FindAvailableTimes } from "../../domain/usecases/find-available-times";
import { ok, serverError } from "../helper/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class FindAvailableTimesController implements Controller {
  constructor(private readonly findAvailableTimeUseCase: FindAvailableTimes) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      const availableTimes = await this.findAvailableTimeUseCase.find(request);
      return ok(availableTimes);
    } catch (error) {
      console.log(error)
      return serverError(error as Error);
    }
  }
}
