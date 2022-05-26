import { CreateServiceRuleUseCase } from "../../../data/usecases/create-service-rule-use-case";
import { CreateServiceRule } from "../../../domain/usecases/create-service-rule";
import { ServiceRuleRepository } from "../../../infra/service-rule-repository";
import { UuidAdapter } from "../../../infra/uuid-adapter";

export const makeCreateServiceRuleUseCase = (): CreateServiceRule => {
  const serviceRuleRepository = new ServiceRuleRepository();
  const uuidAdapter = new UuidAdapter();
  return new CreateServiceRuleUseCase(serviceRuleRepository, uuidAdapter);
};
