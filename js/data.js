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
let num4 = Math.floor(Math.random()*5);
console.log('first number is'+ num4);

while (num4 !== 0) {
  num4 = Math.floor(Math.random()*5);
  console.log('now number is'+num4);
}

for (let i =1; i <= 5; i++) {
  console.log(i);
}
const userNames =['侍太郎', '侍一郎', '侍二郎', '侍三郎', '侍四郎'];
console.log(userNames);
userNames[1] = 'none';
userNames[5] ='jon';
console.log(userNames);

const personalData ={ age:36,gender:"men"};
console.log(personalData);
personalData.age =37;
personalData.address = "tokyo";
console.log(personalData);

const sayGoodMorning =() => {
  console.log("hello");
  console.log("good morning");
}
const sayGoodEvening = () => {
  console.log("good evening");
  console.log("good night");
}
sayGoodEvening();