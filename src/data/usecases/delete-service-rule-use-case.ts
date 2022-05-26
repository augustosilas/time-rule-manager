import { DeleteServiceRule } from "../../domain/usecases/delete-service-rule";
import { DeleteServiceRuleRepository } from "../protocols/delete-service-rule-repository";

export class DeleteServiceRuleUseCase implements DeleteServiceRule {
  constructor(
    private readonly deleteServiceRuleRepository: DeleteServiceRuleRepository
  ) {}

  async delete(id: string): Promise<void> {
    await this.deleteServiceRuleRepository.delete(id);
  }
}
