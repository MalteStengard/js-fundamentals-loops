const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: 1. Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array

numsZeroToThree.push(...Array.from({ length: 4 }, (_, n) => n))
console.log(numsZeroToThree)

// TODO: 2. Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array

numsFiveToTen.push(...Array.from({ length: 6 }, (_, n) => n + 5))
console.log(numsFiveToTen)

// TODO: 3. Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums

evenNums.push(...Array.from({ length: 4 }, (_, n) => n * 2))
console.log(evenNums)

// TODO: 4. Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array

countdown.push(...Array.from({ length: 4 }, (_, n) => 3 - n))
console.log(countdown)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
