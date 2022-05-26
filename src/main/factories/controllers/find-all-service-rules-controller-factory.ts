import { FindAllServiceRulesController } from "../../../presentation/controllers/find-all-service-rules";
import { Controller } from "../../../presentation/protocols/controller";
import { makeFindAllServiceRulesUseCase } from "../usecases/find-all-service-rules-factory";

export const makeFindAllServiceRulesController = (): Controller => {
  return new FindAllServiceRulesController(makeFindAllServiceRulesUseCase());
};
