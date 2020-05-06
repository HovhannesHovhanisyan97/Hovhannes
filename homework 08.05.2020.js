//1
function uniqueArr (array){
  let newArr = array.slice(0)
  array.shift()
 if(array.length === 0){
   return 'Array is unique'
 }else if (array.includes(newArr[0])){
   return `${newArr[0]} was reapeted`
 }else{

return uniqueArr(array)
 }
}
console.log(uniqueArr([4,1,2,3,8,9,11,1,22,5,6,10]))
//2
function arrPowSum (array){
  let newArr = array.filter((el) =>{return Math.sqrt(el) % 2 === 0})
  .reduce((t,el) => t+el)
return newArr 
}
console.log(arrPowSum([4,9,16,36,15,6]))




//3
function palidrom (str){
  let arr = str.split('');
  if(arr.reverse().join('') == str){
    return true
  }
 return false
}

console.log(palidrom('rlr'))

//4
function palidrom (str,arrayOfStr){
  let sortedStr = str.split('').sort().join('');
  let sortedArr = arrayOfStr.map(function(el){return el.split('').sort().join('')})
  let newArr = [];
  for(let i = 0; i < sortedArr.length; i++){
    if (sortedStr == sortedArr[i]){
      newArr.push(arrayOfStr[i])
    }
  }

  return newArr
}

console.log(palidrom('listen', ['enlists', 'google', 'inlets', 'banana','linste']))