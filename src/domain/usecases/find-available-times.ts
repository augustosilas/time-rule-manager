export interface FindAvailableTimes {
  find: (param: FindAvailableTimes.Param) => Promise<FindAvailableTimes.Result>;
}

export namespace FindAvailableTimes {
  export type Param = {
    start: string;
    end: string;
  };

  export type Result = {
    day: string;
    intervals: [
      {
        start: string;
        end: string;
      }
    ];
  }[];
}
