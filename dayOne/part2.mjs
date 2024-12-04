// https://adventofcode.com/2024/day/1#part2

// import { SAMPLE as data } from "./input.mjs";
import { INPUT as data } from "./input.mjs";

let x = data.split("\n")

let v = x.map(i => i.split("   "))

console.log(v)

let left = []

let right = []

right.push(v.map(i=>i.pop()))
left = v.flat()
right = right.flat()

console.log({right, left})

// reduce, filter method w/ freqObj

const countObj = left.reduce((acc, el) => {
  acc[el] = right.filter(i => i === el).length;
  return acc;
}, {})


// console.log(countObj)
let count = 0
left.map(i => count += (i * countObj[i]) 
)
console.log(count)

// 24643097