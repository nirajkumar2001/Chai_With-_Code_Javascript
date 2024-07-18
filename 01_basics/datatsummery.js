/*primitive data type
 string, Number, Boolean , null ,undefined, Symbol, BigInt, these the 7 type of primitive which is always pass by value*/
const score=200
const score1=false // its is dynamically types language that's why we do not give the data  type
const loggedIn=false
const outsideTem=null 
let userEmail=undefined// or we do not pass the value
const id=Symbol('123')
const anotherId=Symbol('123')// if we pass the same value then both have the different symbol
console.log(id==anotherId);
const bigNumber=2364645644n
console.log(  typeof bigNumber)

 /* Non Primitive Data type
 Array, Object, Function */

 const arr=["shaktiman","naagraj","doga"]
 let myobje={
    name:"hitesh",
    age: 22

 }
 const myfunctoin=function(){
    console.log("hello world")
 }
 // the return type of non primitive data type are function
 console.log(typeof  myfunctoin)
 /////+++++++++++++++++++++++++++/////
 //StacK Memory is used for primitive type data
 // Heap memory is used for non primitive type data
 let myyoutube="bihartechgenius"
 let anothername=myyoutube
 anothername="chaiaurcode"
 console.log(myyoutube)
 console.log(anothername);// value not changed beacause there is copy changed not main value changed dut to stack
  let user={
    email:"nirajkumarsah@.com",
    upi: "user1"

  }
  let user2=user
  user2.email="surajkumarsah"
  console.log(user.email)
  console.log(user2.email)// here the actual value changed due to the heap 
  







