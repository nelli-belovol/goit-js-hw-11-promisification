// Перепиши функцию toggleUserState() так,
// чтобы она не использовала callback - функцию callback,
//  а принимала всего два параметра allUsers и userName
// и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  return new Promise((resolve, reject) => {
    if (updatedUsers) {
      resolve(updatedUsers);
    } else {
      reject('error');
    }
  });
};
const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango')
  .then(logger)
  .catch(error => console.log(error));
toggleUserState(users, 'Lux')
  .then(logger)
  .catch(error => console.log(error));
