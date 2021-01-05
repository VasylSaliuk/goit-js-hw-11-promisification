
// Перепиши функцию toggleUserState() так, чтобы она
// не использовала callback-функцию callback, а принимала
// всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

// Сначала было так
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };

// Переписана с помощью Promise
const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );
  return Promise.resolve(updatedUsers);
};

const logger = (updatedUsers) => {
  console.log("Task 2. Function toggleUserState");
  console.table(updatedUsers);
};

// Раньше работало так
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

// Сейчас работает так

toggleUserState(users, "Mango").then(logger);
toggleUserState(users, "Lux").then(logger);
