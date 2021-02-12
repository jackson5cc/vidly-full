const config = require("config");
const app = require("./app");
const db = require("./db");

console.log(config);

db.connect().then(() => {
  console.log("Connected to MongoDB: " + config.get("DB_URL"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server started on port ${port}...`));
