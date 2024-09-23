const nums = [1, 10, 3, 9, 4, 8, 5, 7, 6, 2, -5, -2, -4, -9] // eslint-disable-line no-unused-vars

// 1. Use a for loop to set the variable hasTen to true if the array contains the value 10
// note: use a break statement to exit the loop early if the value is found
// to prove you have done this, set the variable indexOfTen to the iteration index when you find 10
let hasTen = false
let indexOfTen = -1

nums.forEach((x, index) => {
  if (x === 10) {
    hasTen = true
    indexOfTen = index
  }
})

// 2. Use a for loop to count how many numbers in the array are divisible by 3
let divisibleByThreeCount = 0
nums.forEach((x) => {
  if (x % 3 === 0) {
    divisibleByThreeCount += 1
  }
})

// 3. use a for loop to find the average of the numbers in the array
let average = 0
nums.forEach((x) => {
  average += x
})
average = average / nums.length

// 4. use a for loop to find the largest number in the array
let largest = 0
nums.forEach((x) => {
  if (x > largest) {
    largest = x
  }
})

// 5. use a for loop to find the smallest number in the array
let smallest = 100000
nums.forEach((x) => {
  if (x < smallest) {
    smallest = x
  }
})

// 6. find the median of the numbers in the array
let median = 0

nums.sort(function (a, b) {
  return a - b
})

const mid = Math.floor((nums.length - 1) / 2)
median = nums[mid]

console.log(median)
console.log(nums)

module.exports = {
  hasTen,
  indexOfTen,
  divisibleByThreeCount,
  average,
  largest,
  smallest,
  median
}
