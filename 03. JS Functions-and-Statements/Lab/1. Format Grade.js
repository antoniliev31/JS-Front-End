function printGrage(grade) {
  let gradeDecription;

  if (grade >= 5.5) {
    gradeDecription = "Excellent";
  } else if (grade >= 4.5) {
    gradeDecription = "Very good";
  } else if (grade >= 3.5) {
    gradeDecription = "Good";
  } else if (grade >= 3.0) {
    gradeDecription = "Poor";
  } else gradeDecription = "Fail";

  if (grade === 2) {
    console.log(`${gradeDecription} (${grade.toFixed(0)})`);
  } else {
    console.log(`${gradeDecription} (${grade.toFixed(2)})`);
  }
}

printGrage(2);
