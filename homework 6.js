//1

function remfirele(array) {
  
    if (array.length === 0 || array.length === 1) {
      return [];
    } else {
      let arr = remfirele(array.slice(0, array.length - 1));
      arr.push(array[array.length - 1]);
      return arr;
    }

    
  }

  console.log(remfirele([1, 2, 3, 4, 5,6,7,8]))

  //2

  function newObj (o){
    let obj = {}
    let arr = []
    for (let key in o) {
      obj[o[key]] = [key]
      arr.push(key)
      arr.push(o[key])
    }
    for(let i = 0 ;i < arr.length-1; i+=2){
       if(obj.hasOwnProperty(arr[i+1])){
         if(arr[i] !== obj[arr[i+1]][0]){
           obj[arr[i+1]].push(arr[i])
       }
    }
    }
    return obj
    }
    
    console.log(newObj({ a: 1, b: 2, c: 2, d: 2,t : 1 }))
    

  //3

  function objSort(arr){
    let arr1 = []
    for(let i = 0; i < arr.length ; i++){
      if(arr[i].readStatus === true){
        arr1.push(arr[i])
      }
    }
    arr1.sort(function(a,b){return b.percent - a.percent})
    return arr1
    }
    console.log(objSort([
    { book: 'Catcher in the Rye', readStatus: true, percent: 40},
    { book: 'Animal Farm', readStatus: true, percent: 20},
    { book: 'Solaris&quot', readStatus: false, percent: 90 },
    { book: 'The Fall', readStatus: true, percent: 50 },
    { book: 'White Nights', readStatus: false, percent: 60 }]))

  //4

  function rotate(array,num) {
    if (num === 0) {
        return []
    }else if(num > 0){
        num--
        rotate(array,num)
        array.push(array.shift())
        return array
    }else{
        num++
        rotate(array,num)
        array.unshift(array.pop())
        return array
     }    
  }  
    console.log(rotate(['a','b','c','d','e','f','g'],3))
  
   
  