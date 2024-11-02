// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
//console.log(2!=1)// same as the other laguage or mathematical
// /console.log( "2">1)
//console.log("02">1)// always try to compare the same type of datatype
// console.log( null >0)
// console.log(null==0)
// console.log(null>=0)

/* the reason is that an equality check == and comparisons > < >= <= work differently, comparison convert null to a number treating it as 0.that's why (3) null>=0 is true and(1) null >0 is false*/
//console.log( undefined>0) // it always give false
// === here it always check the data check that's why we called it strict check
console.log( "2"===4)// stricktly checked the symbol 
// == it check the value should be same or not and then compare to it 
// === it check the value as well as the data type of the value and then we comparison it
let age=28;
 let  status= (age>30)? 'yes it is older than 30':' you are a teen'
 console.log(status);
// when we going to work with non boolean check 
console.log( true|| false)// true
console.log( false|| 8)// 8
console.log( false|| 'niraj')// niraj
// falsy value=> undefined, null, 0, nan, ' '
// truthy value=> anything that is not falsy 
 // that's why here it give the truthy value when we are going to compare the thing 
 






