import { setupApp } from "./config/app";

setupApp().then((app) => {
  app.listen(3000, () => console.log("listening on port 3000"));
});
