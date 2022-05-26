import { FindAvailableTimesController } from "../../../presentation/controllers/find-available-times-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeFindAvailableTimesUseCase } from "../usecases/find-available-time-factory";

export const makeFindAvailableTimesController = (): Controller => {
  return new FindAvailableTimesController(makeFindAvailableTimesUseCase());
};
