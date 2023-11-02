function createEmployeeList(names) {
  const employeeList = {};

  names.forEach((name) => {
    const personalNum = name.length;
    employeeList[name] = personalNum;
  });

  return employeeList;
}

const names = [
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
];

const employees = createEmployeeList(names);

for (const name in employees) {
  console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
}
