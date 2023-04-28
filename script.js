let number = 100;

if (number < 50) {
  console.log("naklebia 50ze");
} else if (number > 20) {
  console.log("metia 20ze");
} else {
  console.log("error");
}

let userName = "mariam";

if ((userName = "mariam")) {
  console.log(true);
} else {
  console.log(false);
}

let nameUser = "mariam";

switch (nameUser) {
  case "mariam":
    console.log(true);
    break;
  default:
    console.log(false);
}
