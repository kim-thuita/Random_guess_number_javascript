
// practice problem 1

// practice problem 2
//
// let a;
// let array = [1,2,3,4,5,6,7]
//
// do{
//      a = prompt("Enter number")
//
//     a= Number.parseInt(a)
//
//     array.push(a)
//
//
// }while (a!==0){
//     console.log(array)
// }

//practice problem 3

 //  let arr  =[10,20,30,44,55,66,70]
 //
 // let filteredarray=  arr.filter(function (array){
 //
 //    return array%10===0
 //
 //  });




let a;
a = (Math.random()*100)
let randomizednumber = Math.floor(a);
let user = prompt("Choose a number")

if(Number.parseInt(user)===randomizednumber){
   console.log(randomizednumber)
}else if (Number.parseInt(user)>randomizednumber){
   console.log("Number is greater than the randomized number which is" + " " + randomizednumber)
}else  if (Number.parseInt(user)<randomizednumber) {
   console.log("Number is lesser that the randomized number which is" +randomizednumber)
}


