// // console.log("Hello world");

// var age: number = 20;

// let color = "red";
// let phone = 98778982982;
// // color =99

// const enum boxID {
//   box1 = 1,
//   box2 = 3,
//   box3 = 5,
// }

// let abc = boxID.box3;
// console.log(abc);

// function cal(num1 : number ) {
//   return num1;
// }

/////////////////////////////////////
/////////
////variable scopr //////////////////

// var num1: number = 1;
// var number1: number = 1;

// function call() {
//   // var num2: number = 2;
//   if (num1 + num2 == 3) {
//     var num3: number = 3;
//   }

//   console.log("num1 : ", num1);
//   console.log("num2 : ", num2);
//   // console.log("num3 :", num3);   //not Accessible outside its scope braces
// }

// call();

/////////////////////////////
///////Object///////////////
let Employee1 = { id: 1409, name: "Raman" };

console.log("OBJECTS \nId : ", Employee1.id, "Name : ", Employee1.name);

////
///
///
let Employee2: { id: number; name: string; retire: (date: Date) => void } = {
  id: 101,
  name: "Charles",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(
  "ID emp2 : ",
  Employee2.id,
  " Name : ",
  Employee2.name,
  "\n Retire Method : ",
  Employee2.retire
);

//
//
//
//
//
///////UNION TYPES////////
//Javascript does not support enums and unions
console.log("\nUNION\n");
function KGtoLBS(weight: number | string): number {
  if (typeof weight == "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}
KGtoLBS(10);
KGtoLBS("20KG");

//
//

//
//enums
//Enum give deafult numeric value from 0
enum colorcode {
  red,
  blue,
  green,
  black,
}
console.log("Enums : ", colorcode);

enum colorcode2 {
  red = 101,
  blue,
  green,
  black,
}
console.log("Enums : ", colorcode2);

enum EmployeeID {
  EmpID1 = "A0011",
  EmpID2 = "A0022",
  EmpID3 = "A0033",
  EmpID4 = "A0044",
}
console.log(EmployeeID);

console.log("Employee ID of employee 3 : " + EmployeeID.EmpID3);

//Hetrogeneous Enums with different types of data types inside it...

enum Student {
  rollNo = 101,
  name = "Harry",
  address = "xyz area",
  schoolname = "Abc School",
}
console.log("Student details : ", Student);
