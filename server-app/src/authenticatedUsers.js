// const users = {};

// const addAuthenticated = (sessionId, userId) => (users[sessionId] = userId);
// const removeAuthenticated = (sessionId) => delete users[sessionId];
// const sessionExists = (sessionId) => users[sessionId] !== undefined;

const isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    return next();
  }
  res.redirect("/");
};

// exports.users = users;
// exports.addAuthenticated = addAuthenticated;
// exports.removeAuthenticated = removeAuthenticated;
exports.isAuthenticated = isAuthenticated;
