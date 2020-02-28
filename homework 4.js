//1
function typeNum (digit){ 
let firstdigit = 0;
let secondDigit = 1;
let c;
do{
c = firstdigit + secondDigit
console.log(firstdigit);
firstdigit = secondDigit
secondDigit = c


}while(firstdigit < digit)
return 
}
	
//2

function difference (k){  
let sum = 0;
let product = 1;
if (k === 0){alert('Cannot calculate.')}
for(; k != 0; k = (k - k % 10)/10){
  let digit = k % 10
  sum += digit
  product = product * digit

}
if(product % sum === 0){
alert(`‘Quotient is ${product/sum}`);
}else{
alert(`Remainder is ${product % sum}`)
}
}

difference (1233)



//3

function getArr (array){

let max = - Infinity
let min = Infinity
for(let i = 0; i < array.length; i++){
  if(array[i] > max){
  	max = array[i]
  
  } if (array[i] < min){
  min = array[i]
  
  }


}
let dif = Math.abs(max) - Math.abs(min)

if(array.includes(dif)){

return true

}else{

return false
}
}
	

//4

function secMax (numbers) {
let array = numbers.split(',')
let c = array.sort(function (a , b){ return a - b})
let secondMaxDigInd = c.length - 2

return alert(c[secondMaxDigInd])
}

secMax ('5,10,15,20,21')

//5

function padding (array,pad,rep){

if(array.length < pad){

alert('Invalid padding amount')
}
else{
let newArr = [];
let newArr1 = [];
let newArrrep1 = [];
let newArrrep2 = [];
for (let i = 0; i < pad ;i++){
newArr.push(array[i])
newArr1.push(array[array.length-pad+i])
}
for(let j = rep; j > 0;j--){
 newArrrep1.push(newArr)
 newArrrep2.push(newArr1)

} 
array = newArrrep1.concat(array) 
array = array.concat(newArrrep2)
alert(array)
}
}
padding( [1],1,3)

//6

function TypeNum (n){

for (let i = 0; i < n ; i++){
        let symbol = '* '
        for(let j = 0; j < n ; j++){
        console.log(symbol);
        
        
}
console.log('\n')
}
}



//8
function digit (k){

for(let i = 1; i < 2 ; i++){
let allDgits = '';
		for (let j = 1 ; j < k; j++){
    	  
        allDgits += j
        
console.log(allDgits)

 } 
		for (let j = k ; j > 2; j--){
    	  
        allDgits = (allDgits - allDgits % 10)/10
        
console.log(allDgits)

               
 }
}
}

digit(6)
