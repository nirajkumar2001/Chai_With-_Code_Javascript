// let names=[ 'love', 'rahul', 'niraj', 'babu'];
//  console.log( names[1]);
//  console.log( names[4])
//  names[1]='jo man kre dal do '// ye jo hai na value ko array me override kr dega
// console.log( names[1])// if we want to assign the same varibale with the let keyword then the ------- cut the variable names
 const myArray=[0,1,2,3,4,true, false, 'niraj','kumar']
  let n= myArray.length
  console.log( n);
   for( let i=0 ;i<n; i++){
    console.log( myArray[i]);
   }
    const names= new  Array( 1,2,3,4);
    // push  use to insert the element at the back 
    // pop is use to pop back from the  array
    // unshift is use to insert element at first then all elment get shifted
    // shift  is use to delete the first or shift one element back ward
    const newarray=myArray.join()
    console.log(newarray)
    console.log( typeof myArray)
    console.log( typeof newarray)
    // slice and spilice question
    console.log( "A", myArray)
    const myn=myArray.slice(1,3);
    console.log( myn)
    console.log( "B",myArray)
    // splice simply manupulate the original arrray and delete the element
    // while slice is not include the last range but splice include the range and mange the arrray to change it 

  
