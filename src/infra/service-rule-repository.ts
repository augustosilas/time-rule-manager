import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { CreateServiceRuleRepository } from "../data/protocols/create-service-rule-repository";
import { DeleteServiceRuleRepository } from "../data/protocols/delete-service-rule-repository";
import { FindAllServiceRulesRepository } from "../data/protocols/find-all-service-rules-repository";

export class ServiceRuleRepository
  implements
    CreateServiceRuleRepository,
    FindAllServiceRulesRepository,
    DeleteServiceRuleRepository
{
  async delete(id: string): Promise<void> {
    const rules: any[] = await this.getRules();
    const updatedRules = rules.filter((rule) => rule.id !== id);
    await this.writeRules(updatedRules);
  }

  async findAll(): Promise<FindAllServiceRulesRepository.Result> {
    const rules = await this.getRules();
    return [...rules];
  }

  async create(param: CreateServiceRuleRepository.Param): Promise<void> {
    const rules = await this.getRules();
    const rulesWithNewRule = [...rules, param];
    await this.writeRules(rulesWithNewRule);
  }

  private async getRules() {
    const path = join(__dirname, "database.json");
    const database = await readFile(path);
    return JSON.parse(database.toString());
  }

  private async writeRules(rules: any) {
    const data = JSON.stringify(rules);
    const path = join(__dirname, "database.json");
    await writeFile(path, data);
  }
}
