const { writeFile } = require("fs/promises");

writeFile("dist/infra/database.json", JSON.stringify([])).then(console.log);
