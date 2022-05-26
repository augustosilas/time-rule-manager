import { DeleteServiceRuleUseCase } from "../../../data/usecases/delete-service-rule-use-case"
import { ServiceRuleRepository } from "../../../infra/service-rule-repository";

export const makeDeleteServiceRuleUseCase = () => {
  const serviceRuleRepository = new ServiceRuleRepository();
  return new DeleteServiceRuleUseCase(serviceRuleRepository)
}