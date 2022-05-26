import { FindAllServiceRules } from "../../domain/usecases/find-all-service-rules";
import { ok, serverError } from "../helper/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class FindAllServiceRulesController implements Controller {
  constructor(
    private readonly findAllServiceRulesUseCase: FindAllServiceRules
  ) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      const serviceRules = await this.findAllServiceRulesUseCase.findAll();
      return ok(serviceRules);
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
