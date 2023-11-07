function schoolRegister(input) {
    const register = input.reduce((acc, line) => {
        const match = line.match(/Grade: (\d+)/);
        if (match) {
            const grade = Number(match[1]);
            if (acc[grade] === undefined) {
                acc[grade] = { students: [], totalScore: 0, count: 0 };
            }
        } else {
            const studentData = line.split(", ");
            const name = studentData[0].split(": ")[1];
            const score = parseFloat(studentData[2].split(": ")[1]);
            const lastGrade = Object.keys(acc).pop();
            
            if (score >= 3) {
                acc[lastGrade].students.push(name);
                acc[lastGrade].totalScore += score;
                acc[lastGrade].count++;
            }
        }
        
        return acc;
    }, {});

    for (const grade in register) {
        const students = register[grade].students.join(', ');
        const averageScore = (register[grade].totalScore / register[grade].count).toFixed(2);
        
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
