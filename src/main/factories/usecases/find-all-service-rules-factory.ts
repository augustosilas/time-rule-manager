import { FindAllServiceRulesUseCase } from "../../../data/usecases/find-all-service-rules-use-case";
import { FindAllServiceRules } from "../../../domain/usecases/find-all-service-rules";
import { ServiceRuleRepository } from "../../../infra/service-rule-repository";

export const makeFindAllServiceRulesUseCase = (): FindAllServiceRules => {
  const serviceRuleRepository = new ServiceRuleRepository();
  return new FindAllServiceRulesUseCase(serviceRuleRepository);
};
