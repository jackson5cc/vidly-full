module.exports = {
  APP_URL:
    "http://vidly-Publi-1UFSGXZZXZSQ3-1756043912.us-west-2.elb.amazonaws.com/api",
  DB_URL: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.oyurd.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`,
};
