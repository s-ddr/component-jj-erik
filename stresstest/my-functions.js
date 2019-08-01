const randomId = (userContext, events, done) => {
  userContext.vars.id = (Math.floor(Math.random() * 10000000)) + 1;
  return done();
}


module.exports = {randomId}