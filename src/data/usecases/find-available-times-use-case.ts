import { FindAvailableTimes } from "../../domain/usecases/find-available-times";
import { ServiceRuleRepository } from "../../infra/service-rule-repository";
import { FindAllServiceRulesRepository } from "../protocols/find-all-service-rules-repository";

export class FindAvailableTimesUseCase implements FindAvailableTimes {
  constructor(
    private readonly findAllServiceRulesRepository: FindAllServiceRulesRepository
  ) {}
  async find(
    param: FindAvailableTimes.Param
  ): Promise<FindAvailableTimes.Result> {
    const rules = await this.findAllServiceRulesRepository.findAll();
    let availableTimes: any[] = [];

    const startInterval = this.formatDateToCompare(param.start);
    const endInterval = this.formatDateToCompare(param.end);
    for (const rule of rules) {
      if (rule.type === "specific_day") {
        const dateRule = this.formatDateToCompare(rule.day as string);
        if (dateRule > startInterval && dateRule < endInterval) {
          availableTimes.push({
            day: rule.day,
            intervals: rule.intervals,
          });
        }
      } else if (rule.type === "daily") {
        const startInter = new Date(startInterval);
        const endInter = new Date(endInterval);
        while (startInter <= endInter) {
          availableTimes.push({
            day: this.formatDate(startInter),
            intervals: rule.intervals,
          });
          startInter.setDate(startInter.getDate() + 1);
        }
      } else {
        const daysOfWeek = {
          sunday: 0,
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6,
        };

        const startInter = new Date(startInterval);
        const endInter = new Date(endInterval);
        while (startInter <= endInter) {
          const selectedDays = rule.day as [any];
          if (!selectedDays.length)
            throw new Error("Não possui dias da semana");
          const days = selectedDays.map((day) => Reflect.get(daysOfWeek, day));

          if (days.includes(startInter.getDay())) {
            availableTimes.push({
              day: this.formatDate(startInter),
              intervals: rule.intervals,
            });
          }
          startInter.setDate(startInter.getDate() + 1);
        }
      }
    }
    return availableTimes;
  }

  private formatDateToCompare(date: string) {
    const [day, month, year] = date.split("/").map((value) => Number(value));
    return new Date(year, month - 1, day);
  }

  private formatDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
}

