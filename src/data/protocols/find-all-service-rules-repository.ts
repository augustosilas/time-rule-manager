export interface FindAllServiceRulesRepository {
  findAll(): Promise<FindAllServiceRulesRepository.Result>;
}

export namespace FindAllServiceRulesRepository {
  export type Result = {
    id: string;
    day: string | "all" | [DaysOfTheWeek];
    type: "specific_day" | "daily" | "weekly";
    intervals: [
      {
        start: Date;
        end: Date;
      }
    ];
  }[];

  type DaysOfTheWeek =
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday";
}
