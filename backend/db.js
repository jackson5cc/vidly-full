const mongoose = require("mongoose");
const config = require("config");

const connect = () =>
  mongoose.connect(config.get("DB_URL"), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

const close = () => mongoose.connection.close();

module.exports = { connect, close };
