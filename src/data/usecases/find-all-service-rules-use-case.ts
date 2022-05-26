import { FindAllServiceRules } from "../../domain/usecases/find-all-service-rules";
import { FindAllServiceRulesRepository } from "../protocols/find-all-service-rules-repository";

export class FindAllServiceRulesUseCase implements FindAllServiceRules {
  constructor(
    private readonly findAllServiceRulesRepository: FindAllServiceRulesRepository
  ) {}

  async findAll(): Promise<FindAllServiceRules.Result> {
    return await this.findAllServiceRulesRepository.findAll();
  }
}
