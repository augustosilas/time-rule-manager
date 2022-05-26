import { DeleteServiceRule } from "../../domain/usecases/delete-service-rule";
import { noContent, serverError } from "../helper/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class DeleteServiceRuleController implements Controller {
  constructor(private readonly deleteServiceRuleUseCase: DeleteServiceRule) {}

  async handle(request: any): Promise<HttpResponse> {
    try {
      await this.deleteServiceRuleUseCase.delete(request.id);
      return noContent();
    } catch (error) {
      return serverError(error as Error);
    }
  }
}
