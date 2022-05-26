import { CreateServiceRuleController } from "../../../presentation/controllers/create-service-rule";
import { Controller } from "../../../presentation/protocols/controller";
import { makeCreateServiceRuleUseCase } from "../usecases/create-service-rule-factory";

export const makeCreateServiceRuleController = (): Controller => {
  const createServiceRuleUseCase = makeCreateServiceRuleUseCase();
  return new CreateServiceRuleController(createServiceRuleUseCase);
};
