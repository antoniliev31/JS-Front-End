function roadRadar(speed, type) {
  const speedLimit = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };

  let speedOverLimit = speed - speedLimit[type];

  if (speedOverLimit <= 0) {
    console.log(`Driving ${speed} km/h in a ${speedLimit[type]} zone`);
    return;
  }

  const speedingMessage =
    speedOverLimit <= 20 ? "speeding" :
    speedOverLimit <= 40 ? "excessive speeding" : "reckless driving";

  console.log(`The speed is ${speedOverLimit} km/h faster than the allowed speed of ${speedLimit[type]} - ${speedingMessage}`);
}

roadRadar(120, "interstate");
