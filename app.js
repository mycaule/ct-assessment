const movingV1 = (arr, k) => arr.map((x, i) => {
    const kp = Math.min(k, arr.length-i)
    return arr.slice(i, i+kp).reduce((acc, v) => acc + v/kp, 0)
  })

const movingV2 = (arr, k) => {
  let win_sum = arr.slice(0,k).reduce((acc, v) => acc + v/k, 0)

  return arr.map((x, i) => {
    const kp = Math.min(k, arr.length-i)

    if (i==0) {
      return win_sum
    } else if (k < arr.length -i) {
      win_sum -= i>0 ? arr[i-1]/kp : 0
      win_sum += arr[i-1+kp]/kp
      return win_sum
    } else {
      return arr.slice(i, i+kp).reduce((acc, v) => acc + v/kp, 0)
    }
  })
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log('movingV1', movingV1([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))
console.log('movingV2', movingV2([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))

const range = (n) => [...Array(n).keys()]
console.time('movingV1');
console.log(movingV1(range(200000), 10).reduce((acc,v) => acc+v, 0))
console.timeEnd('movingV1');

console.time('movingV2');
console.log(movingV2(range(200000), 10).reduce((acc,v) => acc+v, 0))
console.timeEnd('movingV2');
