export interface CreateServiceRule {
  create: (params: CreateServiceRule.Param) => Promise<void>;
}

export namespace CreateServiceRule {
  export type Param = {
    day: string | [string];
    type: "specific_day" | "daily" | "weekly";
    intervals: [
      {
        start: string;
        end: string;
      }
    ];
  };
}
