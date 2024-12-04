// https://adventofcode.com/2024/day/1

// import { SAMPLE as data } from "./input.mjs";
import { INPUT as data } from "./input.mjs";

let x = data.split("\n");

// console.log(x);


let v = x.map(i => i.split("   "))

console.log(v)

let left = []

let right = []

right.push(v.map(i=>i.pop()))
left = v.flat()
right = right.flat()

console.log({right, left})

left = left.map(Number).sort((a,b)=> a-b, 0)
right = right.map(Number).sort((a,b)=> a-b, 0)

console.log({left, right})

let res = right.map((v,i) => v - left[i])

res = res.map(i => Math.abs(i)).reduce((a, b) => a+b, 0)
console.log(res)


// result = 2769675