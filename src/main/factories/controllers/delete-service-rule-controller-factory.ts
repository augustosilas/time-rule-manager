import { DeleteServiceRuleController } from "../../../presentation/controllers/delete-service-rule";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDeleteServiceRuleUseCase } from "../usecases/delete-service-rule-factory";

export const makeDeleteServiceRuleController = (): Controller => {
  return new DeleteServiceRuleController(makeDeleteServiceRuleUseCase());
};
