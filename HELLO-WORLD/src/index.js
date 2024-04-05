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
var Employee1 = { id: 1409, name: "Raman" };
console.log("OBJECTS \nId : ", Employee1.id, "Name : ", Employee1.name);
////
///
///
var Employee2 = {
    id: 101,
    name: "Charles",
    retire: function (date) {
        console.log(date);
    },
};
console.log("ID emp2 : ", Employee2.id, " Name : ", Employee2.name, "\n Retire Method : ", Employee2.retire);
//
//
//
//
//
///////UNION TYPES////////
console.log("\nUNION\n");
function KGtoLBS(weight) {
    if (typeof weight == "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
KGtoLBS(10);
KGtoLBS("20KG");
