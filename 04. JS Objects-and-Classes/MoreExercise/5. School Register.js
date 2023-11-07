function schoolRegister(input) {
    const studentsByGrade = {};
    const grades = new Set();

    for (const line of input) {
        const match = line.match(/Grade: (\d+)/);
        if (match) {
            const grade = Number(match[1]);
            grades.add(grade);
            studentsByGrade[grade] = studentsByGrade[grade] || { students: [], totalScore: 0, count: 0 };
        } else {
            const studentData = line.split(", ");
            const name = studentData[0].split(": ")[1];
            const score = parseFloat(studentData[2].split(": ")[1]);

            if (score >= 3) {
                studentsByGrade[grade].students.push(name);
                studentsByGrade[grade].totalScore += score;
                studentsByGrade[grade].count++;
            }
        }
    }

    const sortedGrades = Array.from(grades).sort((a, b) => a - b);

    for (const grade of sortedGrades) {
        const students = studentsByGrade[grade].students.join(', ');
        const averageScore = (studentsByGrade[grade].totalScore / studentsByGrade[grade].count).toFixed(2);
        
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students}`);
        console.log(`Average annual score from last year: ${averageScore}`);
        console.log();
    }
}

const input = [
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
];

schoolRegister(input);
