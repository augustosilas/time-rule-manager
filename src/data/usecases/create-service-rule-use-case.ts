import { CreateServiceRule } from "../../domain/usecases/create-service-rule";
import { CreateServiceRuleRepository } from "../protocols/create-service-rule-repository";
import { UuidGenerate } from "../protocols/uuid-generate";

export class CreateServiceRuleUseCase implements CreateServiceRule {
  constructor(
    private readonly createServiceRuleRepository: CreateServiceRuleRepository,
    private readonly uuidGenerate: UuidGenerate
  ) {}
  async create(params: CreateServiceRule.Param): Promise<void> {
    const newRule = {
      id: this.uuidGenerate.generate(),
      ...params,
    };
    await this.createServiceRuleRepository.create(newRule);
  }
}
