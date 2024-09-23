const START = 1
const END = 10

const simpleOne = []
const nestedOne = []
const nestedTwo = []
const deepOne = []
const deepTwo = []
const deepThree = []

// 1. Using a for loop from 1 to 10, add the value of the 'loop index' to the array 'simpleOne'
//    eg [1,2,3...]

// HINT: in the below loop, the statements and block of code needs to be changed
// HINT: in the below loop, the var i represents the loop index
// for (let i = 5; i < 7; i++) {
// Your code here
// }

for (let i = 1; i < 11; i++) {
  simpleOne.push(i)
}
// console.log(simpleOne)

// 2. Using nested for loops, add arrays to 'nestedOne' where each array has n copies of the outer 'loop index'
//    eg [[1],[2,2],...]

for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let n = 1; n <= i; n++) {
    innerArray.push(i)
  }
  nestedOne.push(innerArray)
}
// console.log(nestedOne)

// 3. As 2, but each array should contain the values from the outer 'loop index' to 1 inclusive. Update array 'nestedTwo'
//    eg [[1],[2,1],...]

for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let n = i; n >= START; n--) {
    innerArray.push(n)
  }
  nestedTwo.push(innerArray)
}
// console.log(nestedTwo)

// 4. As 2, but each array should contain arrays from 1 to the outer 'loop index' with the value of the outer 'loop index'. Update array 'deepOne'
//    eg [[[1]],[[2],[2,2]],...]

for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let n = 0; n < i; n++) {
    innerArray.push(Array.from({ length: n + 1 }, (_, f) => (f = i)))
  }
  deepOne.push(innerArray.length === 0 ? [i] : innerArray)
}
// console.log(deepOne)

// 5. As 4, update array 'deepTwo' so that the result is:
//       [[[1]],[[1],[1,2]],...]

for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let n = 0; n < i; n++) {
    innerArray.push(Array.from({ length: n + 1 }, (_, f) => f + 1))
  }
  deepTwo.push(innerArray)
}
// console.log(deepTwo)

// 6. As 5, update the array 'deepThree', but the result should be the average of the sum of the squares of the numbers in each array
//       [[1],[[1],[2.5]],...]
let testarray = []
for (let i = START; i <= END; i++) {
  const innerArray = []
  for (let n = 0; n < i; n++) {
    innerArray.push(Array.from({ length: n + 1 }, (_, f) => (f + 1) * (f + 1)))
    const subarray = innerArray[n]
    let sum = 0
    subarray.forEach((x) => {
      sum += x
    })
    sum = sum / subarray.length
    testarray.push(sum)
    testarray = [...new Set(testarray)]

    // subarray.pop()
    // subarray.push(sum)
    // innerArray.pop()
    // innerArray.push(testarray)
  }

  deepThree.push(testarray.map((element) => [element]))
}
console.log(deepThree)
// console.log(testarray)

module.exports = {
  START,
  END,
  simpleOne,
  nestedOne,
  nestedTwo,
  deepOne,
  deepTwo,
  deepThree
}
