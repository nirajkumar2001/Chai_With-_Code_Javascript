let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(typeof myDate)
//let myCreateDate=new Date(2023,0,24)//month start from 0 always
let myCreateDate=new Date(2023,0,24,5,3)

// console.log(myCreateDate.toDateString())
// console.log(myCreateDate.toLocaleString())
// console.log(myCreateDate.toLocaleDateString())
let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log( newDate.getDay());
//`${newdate.getday()} and the time
console.log(newDate.toLocaleDateString('default',{weekday:"long"}))



