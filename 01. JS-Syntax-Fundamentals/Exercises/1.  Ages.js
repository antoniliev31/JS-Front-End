function ages(age) {
    let typeOfPeople = "out of bounds";

    if (age >= 0 && age <= 2) {
        typeOfPeople = "baby";
    } else if (age >= 3 && age <= 13) {
        typeOfPeople = "child";
    } else if (age >= 14 && age <= 19) {
        typeOfPeople = "teenager";
    } else if (age >= 20 && age <= 65) {
        typeOfPeople = "adult";
    } else if (age >= 66) {
        typeOfPeople = "elder";
    }

    console.log(typeOfPeople);
}

ages(-100);
