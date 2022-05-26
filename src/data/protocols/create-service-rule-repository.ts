export interface CreateServiceRuleRepository {
  create: (param: CreateServiceRuleRepository.Param) => Promise<void>;
}

export namespace CreateServiceRuleRepository {
  export type Param = {
    id: string;
    day: string | [string] | "all";
    type: "specific_day" | "daily" | "weekly";
    intervals: [
      {
        start: string;
        end: string;
      }
    ];
  };
}
