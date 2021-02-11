module.exports = {
  DB_URL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.oyurd.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
};
