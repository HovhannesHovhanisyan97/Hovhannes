1)let a = prompt('number','')
let b = prompt('number','')
if (a % b == 0 || b % a == 0){
alert ('1')
}else {alert('0')}

2)let a = +prompt()
let b = +prompt()
let c = 180 - a - b
alert (c)

3)let n = prompt()
alert(n+2*n+3*n)

4)let a = prompt()
let b = a % 10
let c = (a - (a % 10))/10
if (a % 10 == 0){
alert (a);} 
else if (a < 10){alert(a);}
else{
alert (String(b) + String(c))}

5)let a = +prompt()
let b = +prompt()
let c = +prompt()
let d = +prompt()
let e = +prompt()

alert((a+b+c+d+e)/5)