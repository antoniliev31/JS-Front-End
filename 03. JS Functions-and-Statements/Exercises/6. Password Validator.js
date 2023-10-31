function validatePassword(password) {
  let isValid = true;
  let messages = [];

  if (password.length < 6 || password.length > 10) {
    messages.push("Password must be between 6 and 10 characters");
    isValid = false;
  }

  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    messages.push("Password must consist only of letters and digits");
    isValid = false;
  }

  if ((password.match(/\d/g) || []).length < 2) {
    messages.push("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  } else {
    messages.forEach((message) => {
      console.log(message);
    });
  }
}


validatePassword('logIn');
