//1

function bigThanDig(arr, dig) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > dig) {
      newArr.push(arr[i])
    }
  }
  if (newArr.length === 0) {
    return 'Such values do not exist.'
  }
  return newArr
}
bigThanDig([1, 1, 2, -3, 0, 8, 4, 0], 9)

//2

function evenNum(firDig, secDig) {
  let arr = [];
  for (let i = firDig; i <= secDig; i++) {
    fd = Math.floor(i / 10)
    if (i % 2 == 0 && i < 100 && fd % 2 == 0) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return 'Such numbers does not exist.'
  }

  return arr
}
evenNum(19, 42)

//3
function sortNum(arrays) {
  let sum = 0
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] > arrays[i + 1]) {
      sum++
    }
  }
}
if (sum > 0) {
  return arrays[arrays.length - 1]
} else {
  return -1

}
//alert(sortNum([2, 12, 15, 48, 64]))
//alert(sortNum([-9, -4, -4, 3, 12, 4, 5]))

//4

function maxDif(arrays) {
  let arr = [];
  let dif = 0;
  let maxNum = -Infinity
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i + 1] !== undefined) {
      let dif = arrays[i] * arrays[i + 1]
      arr.push(dif)
      dif = 0
    }
}
for (let i = 0; i < arr.length; i++){
    if(arr[i]> maxNum){
      maxNum =arr[i] 
    }
}


  return maxNum
}
alert(maxDif([1, 2, 3, 4, 5, 6]))
//5

function absentNums(array) {
  max = -Infinity
  min = Infinity
  arr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
    if (array[i] < min) {
      min = array[i]
    }
  }
  for (let j = min; j < max; j++) {
    if (!array.includes(j)) {
      arr.push(j)
    }
  }
  return arr
}
alert(absentNums([1, 2, 5, 6, 15]))

//6

function newArr(arrays) {
  sum = 0
  sumArr = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      sum += arrays[i][j]

    }
    sumArr.push(sum)
    sum = 0
  }
  return sumArr
}
alert(newArr([
  [8, 35, 2],
  [8],
  [5, 6, -5, -6],
  [1, 3, -9, 0, -1]
]))

//7

function newArr(arrays) {
  oddNum = []
  arr = [];
  for (let i = 0; i < arrays.length; i++) {
    if (Math.abs(arrays[i]) % 2 === 1) {
      oddNum.push(arrays[i])
    }
  }
  for (let i = 0; i < oddNum.length; i++) {
    arr.push(oddNum[i] * oddNum.length)
  }
  return arr
}
alert(newArr([5, 4, 78, 0, -3, 7]))


