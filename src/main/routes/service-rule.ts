import { Router } from "express";
import { adaptRoute } from "../adapters/express-route-adapter";
import { makeCreateServiceRuleController } from "../factories/controllers/create-service-rule-controller-factory";
import { makeDeleteServiceRuleController } from "../factories/controllers/delete-service-rule-controller-factory";
import { makeFindAllServiceRulesController } from "../factories/controllers/find-all-service-rules-controller-factory";
import { makeFindAvailableTimesController } from "../factories/controllers/find-available-times-controller-factory";

export default (router: Router): void => {
  router.post("/service-rule", adaptRoute(makeCreateServiceRuleController()));
  router.delete(
    "/service-rule/:id",
    adaptRoute(makeDeleteServiceRuleController())
  );
  router.get("/service-rules", adaptRoute(makeFindAllServiceRulesController()));
  router.get(
    "/available-times",
    adaptRoute(makeFindAvailableTimesController())
  );
};
