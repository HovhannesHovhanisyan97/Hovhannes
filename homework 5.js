//2

function fre (arr) {
let count = []
let sum = 0
let finalres = []
for(let i = 0;i < arr.length;i++){
		for(let j = 0; j < arr.length;j++){
    if(arr[i]===arr[j]){
    sum += 1
   										}
   								
                  }
count.push(`${arr[i]}-${sum/arr.length}`)
sum = 0
}
for(let i = 0; i < count.length;i++){
		for(let j = 0; j < count.length;j++){
			if(!finalres.includes(count[i])){
				finalres.push(count[i])
    
    }
}
}
return finalres
}

alert(fre([1,2,3,4,5]))

//3

function type (strAndNum){
let string = 0;
let number = 0;
for(let i = 0;i < strAndNum.length;i++){
	if(typeof(strAndNum[i]) === 'string'){
  		string += 1
  }else {
  	number +=1
  }

}return (`string ${string}, number ${number}`)
}

alert(type([1,'10','hi',2,3]))

//4

function longChar (sen){
let senarr = sen.split(' ')
let long = ''
for(let i = 0;i < senarr.length;i++){
		if(senarr[i].length > long.length){
     long = senarr[i]
    }

}
return long
}

alert(longChar(`A revolution without dancing is a revolution not worth having.`))

//5

function longestSubstr(sent) {
  let arrsent = sent.split("")
  let piece = "";
  let longestpiece = "";
  for (let j = 0; j < arrsent.length; j++) {
    for (let i = j; i < arrsent.length; i++) {
      if (piece.includes(arrsent[i]) && arrsent[i] !== " ") {
        break;
      } else if (arrsent[i] === " ") {
        piece += arrsent[i];
      } else {
        piece += arrsent[i];
      }
    }
    if (longestpiece.length < piece.length) {
      longestpiece = piece;
    }
    piece = "";
  }
  return longestpiece;
}
console.log(longestSubstr('parting your soup is not a miracle, bruce.'));

//6

function replacement (str){
let array = str.split("");
let newArr = [];
let threechar = []
let string = "";
let a =''
let finalArr =[]
for(let i = 0;i <= array.length;i +=3){
		threechar = array.slice(i,i+3)
    string = threechar.join('')
    newArr.push(string)
    threechar = []
}
for(let j = 0; j < newArr.length;j++){
		if(newArr[j].length == 3){
     a = newArr[j][1] + newArr[j][2] + newArr[j][0]
     finalArr.push(a)
     a = "";
    }
else {
finalArr.push(newArr[j])

}

}
return finalArr.join('')
}
alert(replacement('aweyoolp'))

//7

function  prodMaxNeg(arr){ 
let allNeg = []
let theSmalestdigit = []
let prod = 1;

  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== 'object'){
      return 'Invalid Argument'
    } 

  }

 function arrMaxNeg (arr1){
       arr2 = [];
     for(let i = 0;i <arr1.length;i++){
          if(arr1[i]<0){
             arr2.push(arr1[i])
        }
     }
      let max = arr2[0]
    for(let j = 0;j< arr2.length;j++){
      if(arr2[j]>max){
      max = arr2[j]
      }
}
    return max
    }

   
		for(let i = 0; i < arr.length;i++){
					if(typeof(arrMaxNeg(arr[i]))=== 'number')
							prod *= arrMaxNeg(arr[i])

}

if (prod === 1) {
 return 'No Negatives';
} else {
return prod
}
}
alert(prodMaxNeg([[2, 9, -3, 0],[1, 2],[-4, -11, 0]]))

//8

let arr = [5, 9, 23, 0, -2, -1]
let newArr = []
let  array1 = []
for(let i = 0; i < arr.length;i++){
		for(let j= i+1; j < arr.length;j++ ){
    	for(let k = j+1; k< arr.length;k++){
      		
      		array1.push(arr[i],arr[j],arr[k])
      			newArr.push(array1);
            array1  = []
      }
    
    
    }
}
cosole.log(newArr)

