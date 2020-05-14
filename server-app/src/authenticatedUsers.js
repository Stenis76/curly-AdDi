const users = {};

const addAuthenticated = (userId) => (users[userId] = userId);
const removeAuthenticated = (userId) => delete users[userId];
const isAuthenticated = (userId) => users[userId] !== undefined;

exports.users = users;
exports.addAuthenticated = addAuthenticated;
exports.removeAuthenticated = removeAuthenticated;
exports.isAuthenticated = isAuthenticated;
