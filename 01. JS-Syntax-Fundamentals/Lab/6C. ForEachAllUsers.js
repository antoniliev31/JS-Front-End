// -------forEach-------
const allUsers = ["Raya", "Maria", "Anton"];

allUsers.forEach(function(user) {
    console.log(`Hi, ${user}!`)
});

// -------Map-------
const activeUsersGretings = allUsers.map(function (user){
    return `Hi, ${user}!`;
});

console.log(activeUsersGretings);