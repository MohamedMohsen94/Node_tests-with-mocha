module.exports.add = (a, b) => a + b;
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};
module.exports.square = (a) => a * a;

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
};
module.exports.setName = (user, fullName) => {
  let names = fullName.split(" ");
  user.firstName = names[0];
  user.secondName = names[1];
  return user;
};
