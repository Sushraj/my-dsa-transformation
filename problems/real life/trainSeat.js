const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getSeatType(seatNumber) {
  const remainder = seatNumber % 3;

  if (remainder === 1) {
    return "Window Seat 😎";
  } else if (remainder === 2) {
    return "Middle 🥲";
  } else {
    return "Aisle 🫤";
  }
}

rl.question("Enter the Class number: ", (className) => {
  const allowed = ["B1", "B2", "B3", "B4"];
  if (!allowed.includes(className.toUpperCase())) {
    console.log("Invalid class number! Only B1 to B4 are allowed");
    rl.close();
    return;
  }
  rl.question("Enter the seat number: ", (seatInput) => {
    const seatNumber = Number(seatInput);
    if (seatNumber <= 0 || isNaN(seatNumber)) {
      console.log("Invalid seat number");
      rl.close();
      return;
    }
    const seatType = getSeatType(seatNumber);
    console.log("Class Name: ", className);
    console.log("Seat Number: ", seatNumber);
    console.log("Seat Type: ", seatType);
    rl.close();
  });
});
