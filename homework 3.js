//1
function getArr(arr,str){

 
let str2 = str.split('')
for(let i = 0; i <str2.length; i++){

if(str2[i] == '_'){
str2.splice(i,1,arr[0])
arr.splice(0,1)
}

}

alert(str2.join(''))

}


//2

function OnlyNum (a){

let b = [];
let c = [];
for(let i = 0;i <=a.length-1;i++){
	if(Number(a[i]) && a[i] % 2 == 1){
  		c.push(a[i]);
  }else if(a[i] == 0 ) {
  	b.push(a[i]);
  }else if(a[i] % 2 == 0) {
  	b.push(a[i]);
  }else if (a[i] == null){
		b.pop(a[i])}
}for(let j = 0; j <= b.length-1;j++){
		c.push(b[j])

}return c
}




//3
function StrAndNum (a){


let string = 0;
let number = 0;
for(let i = 0;i <=a.length-1;i++){
	if(Number(a[i]) || a[i] == 0){
  		number += 1
    }else  {
		string +=1
  }

}return (`string ${string}, number ${number}`)
}





//4

function count (a){



let max = 0;
let min = Infinity;
for(let i = 0; i < a.length; i++){

				if(a[i].length > max){
           max = a[i].length;
        }
				if(a[i].length < min) {
        	min =  a[i].length ;
        }

}return max + min
}

//5
let a = prompt();
let arr = a.split(',');
let c = 0;
for(let i = 0; i < arr.length; i++){
		c += +Number(arr[i])


}alert(Math.abs(c))



//6

function bbb (a){


let c = [];
let b = []
for(let i = 0; i < a.length; i++){
		c[i] = a[i] * a[i + 1]
		if(c[i]){
    		b.push(c[i])
    }else if(c[i] == 0){
    		b.push(c[i])
    
    }

}
return b
}