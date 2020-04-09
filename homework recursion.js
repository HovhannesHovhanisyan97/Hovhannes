//1
function oddRec (number){
  let result; 
  let digit = (number % 10); 
  if (digit % 2 === 0) {
  	return false;
  } else if (digit % 2 === 1) {
    result = true; 
  }

  
  if (number > 9) {
  	number = (number - digit)/10
  	return oddRec(number);
  } else {
		return result;
  }
}
alert(oddRec(251))

//2

function maxPos (array){
  array.sort((a,b) => a-b)
  if(array.length === 1 && array[0]< 0){
  return -1
  }else if(array.length === 1){
  return array[0]
  }else if(array[0]< 0){
  array.shift()
  return maxPos(array)
  }else if (array.length > 1){
    array.pop()
    return maxPos(array)
  }
}
alert(maxPos([-23,-5,-10]))

//3

function fibonacci (number){
	if (number === 0){
		return []
	} else if (number === 1) {
		return 1
	} else if (number === 2) {
		return [1, 1]
	} else {
  	let fib = fibonacci(number - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib
  }
}
alert(fibonacci(10))

//4

function arrayMerge (array){
  let newArr = [];
  
  for (let i = 0; i < array.length; i++) {
    if (typeof (array[i]) === 'object') {
      newArr = newArr.concat(arrayMerge(array[i]));
     } else {
      newArr.push(array[i]);
     }
  }
  return newArr;
}
alert(arrayMerge([1, [3, 4, [1, 2]], 10]));

//5

function sum (number){

  let result
  let arr = number.toString().split('')
    result = arr.reduce((a,b) => +a + +b)
    if(result < 10){
    return result
    }else{
    return sum(result)
    }
  }
  alert(sum(12345))