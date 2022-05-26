import { FindAvailableTimesUseCase } from "../../../data/usecases/find-available-times-use-case";
import { FindAvailableTimes } from "../../../domain/usecases/find-available-times";
import { ServiceRuleRepository } from "../../../infra/service-rule-repository";

export const makeFindAvailableTimesUseCase = (): FindAvailableTimes => {
  const serviceRuleRepository = new ServiceRuleRepository();
  return new FindAvailableTimesUseCase(serviceRuleRepository);
};
