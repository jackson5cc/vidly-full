module.exports = {
  db: {
    uri:
      "mongodb+srv://vidly:" +
      process.env.MONGODB_PASSWORD +
      "@cluster0.oyurd.mongodb.net/vidly?retryWrites=true&w=majority",
  },
};
