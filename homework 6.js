function binarySerch (array,num){
  let first = 0;
  let last = array.length-1
   while(first <= last){
      let middle = Math.floor((first + last)/2)
      if(array[middle] === num){
           return `Index of given element is ${middle}`
      }
       if(num > array[middle]){
         first = middle + 1
       }else if(num < array[middle]){
         last = middle - 1
       }else{
         return 'not found'
       }

   }
    return 'not found' 
}
console.log(binarySerch([1,2,3,4,5],1))