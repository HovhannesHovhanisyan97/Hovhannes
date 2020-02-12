// 1
let a = prompt();
let b = prompt();
let c = prompt();

if (a == 0 || b == 0 || c == 0){
			alert('unsigned');
}else if (a < 0 && b > 0 && c > 0) {
 			alert('-')
}else if (a > 0 && b < 0 && c > 0) {
 			alert('-')
}else if (a > 0 && b > 0 && c < 0) {
			alert('-')
}else if (a == null || b == null || c == null){
 			alert('type number')
}else {
 			alert('+')}
			
			
			
//2

let a = +prompt('digit','');
let b = +prompt('number','');
let c;
let arr =[];
for(;b != 0;b = (b-b%10)/10){
  		c = b % 10;
			arr.push(c)
 }
if(arr.includes(a)){
  		alert('Yes');
      
  } else{
  		alert('No');
      
}

//3

let a = prompt('number','');
if (a.length < 2){
		alert(a)
}

let first = a[0];
let last = a[a.length - 1];
let c = Math.pow(10,a.length-1);
let e = (a -a % 10) - first * c;
let d = +last * +c + +e + +first;
		alert(d);
		
//4

let a = +prompt();
let b = +prompt();
let c = +prompt();

if (a > b && b > c){
			alert(`${c},${b},${a}`);
						}
else if(b > a && a >c){
			alert (`${c},${a},${b}`);
						}
else if (b > c && c > a){
			alert(`${a},${c},${b}`);
						}
else if (c > b && b >a){
			alert(`${a},${b},${c}`);
						}
else if(c > a && a > b){
			alert(`${b},${a},${c}`);
						}
else if(a > c && c > b){
			alert(`${b},${c},${a}`);
						}
else {
			alert(`${a},${b},${c}`);
			}
		
//5

let a = +prompt('number1');
let b = +prompt('number2');
let c = +prompt('number3');

if (a == 0 ){
		alert('Enter valid constans');
}else {
let d;
let x1;
let x2;
d = Math.pow(b,2) - 4 * a * c;
let k = Math.sqrt(d);
x1 = (-1 *b + Math.sqrt(d))/(2 * a);
x2 = (-1 *b - Math.sqrt(d))/(2 * a);
if (x1 == x2){
			alert(`solution is ${x1}`);
      }
else if (d < 0){
			alert('Solution does not exists');
      }
else{
			alert (`Solutions are ${x1} and ${x2}`);
			}
}
//6
let n = +prompt();

let j = 0;
let i = 0;

if (n % 2 === 0 && !Math.floor(n/10)){
			i += 1;
}if(n % 3 === 0 && n % 10 === 1){
			j +=1;
}


//7

let a = prompt('type triangle or rectangle',);
let b = +prompt();
let c = +prompt();

if (a === 'triangle'){
		alert(`Square of the triangle is  ${(b * c)/2}`);
}else if (b <=0 || c <=0){
		alert('please enter only postives')
}else{
		alert(`Square of the rectangle is ${b * c}`);
}

//8

let a = prompt();
let min = 9;
let max = 0;
for (;a !=0;a = (a - a %10)/10){
	let b = a % 10;
  if(b>max){
  		max = b;
  		}
  if (b < min){
  		min = b;
  			}
 }
alert(max - min)


//8.1

let a = prompt();
let b = a.split('');
let c = b.sort();
let d = c[c.length - 1] - c[0];
     alert(d);



