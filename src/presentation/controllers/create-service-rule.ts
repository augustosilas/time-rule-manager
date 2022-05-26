import { CreateServiceRule } from "../../domain/usecases/create-service-rule";
import { noContent, serverError } from "../helper/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class CreateServiceRuleController implements Controller {
  constructor(private readonly createServiceRuleUseCase: CreateServiceRule) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      await this.createServiceRuleUseCase.create(request);
      return noContent();
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
