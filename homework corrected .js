//1

function bigThanDig(arr, dig) {
  let newArr = [];
  newArr = arr.filter(function(el, i, arr) {
    return el > dig
  })
  if(newArr.length === 0){
    return 'Such numbers does not exist.'
  }
  return newArr
}
alert(bigThanDig([1, 1, 2, -3, 0, 8, 4, 0, 10, 15], 9))


//2

function evenNum(firDig, secDig) {
  let arr = [];
  for (let i = firDig; i <= secDig; i++) {
    fd = even(i)
    if(fd !== 1){
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return 'Such numbers does not exist.'
  }

  return arr
}
alert(evenNum(1, 10))

function even(num) {
  let str = String(num)
  let count = 0
  for (; num != 0; num = (num - num % 10) / 10) {
    let firDi = num % 10
    if (firDi % 2 === 0) {
      count++
    }
  }
  if (str.length === count) {
    return -1
  } else {
    return 1
  }
}

//3
function sortNum(arrays) {
  let newArr = []
  newArr = arrays.filter(function(el, i, arr) {
    return arr[i + 1] < arr[i]
  })
  let a = arrays.indexOf(newArr[0])
  if(newArr.length > 0){
  return a + 1
  }else{
    return -1
  }
}
//alert(sortNum([2, 12, 15, 48, 64,12]))
alert(sortNum([-9, -4, 5, -4, 3, 12, 4, 5]))


//4

function maxDif(arrays) {
  let maxNum = arrays[0] * arrays[1]
  for (let i = 0; i < arrays.length - 1; i++) {
    if (arrays[i] * arrays[i + 1] > maxNum) {
      maxNum = arrays[i] * arrays[i + 1]
    }
  }

  return maxNum
}
alert(maxDif([1, 2, 3, 15, 4, 5, 6]))

//5

function absentNums(array) {
  array.sort(function(a, b) {
    return a - b
  })
  let arr = [];
  let min = array[0]
  let max = array[array.length - 1]
  for (let j = min; j < max; j++) {
    if (!array.includes(j)) {
      arr.push(j)
    }
  }
  return arr.length
}
alert(absentNums([1, 2, 5, 6, 15]))

//6

function newArr(arrays) {
  let finalres = [];
  for (let i = 0; i < arrays.length; i++) {
    let sum = arrays[i].reduce(function(t, e) {
      return t += e
    })
    finalres.push(sum)
  }
  return finalres
}
alert(newArr([
  [8, 35, 2],
  [8],
  [5, 6, -5, -6],
  [1, 3, -9, 0, -1]
]))


//7

function newArr(arrays) {
  let arr = arrays.filter(function(e) {
    if (Math.abs(e) % 2 === 1) {
      return e
    }
  })
  let array = arr.map(function(el) {
    return el * arr.length
  })
  return array
}
alert(newArr([5, 4, 78, 0, -3, 7]))



