console.log(45+18);
console.log("45"+"18");

let userName;
userName = "japan";

let userNumber = 55;

console.log(userName);
console.log(userNumber);

userName = "america";
userNumber = 33;

console.log(userName);
console.log(userNumber);

const shippingFee =500;

console.log(shippingFee);

const num1 =50;
if (num1 > 10) {
  console.log("ok");
}
console.log(18+45);
console.log(54>10);

let num2 =Math.floor(Math.random()*5);
console.log(num2);
if (num2===4) {
  console.log('hit');
}
else if(num2===1) {
  console.log('big hit');
}
else {
  console.log("lose");
}

let num3 = Math.floor(Math.random()*3);
switch (num3) {
  case 0:
    console.log("small hit")
    break;
  case 1:
    console.log('hit')
    break;
  case 2:
    console.log('big hit')
    break;
}