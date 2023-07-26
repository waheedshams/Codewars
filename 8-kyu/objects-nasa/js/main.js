// function removeexclaimationMarks(arr) {
//   return arr.split("!").join("")
// }


// function findNeedle(haystack) { 
//   return `found the needle at postition ${haystack.indexOf("needle")}`
// }

// function reverseArray(arr) {
//   return arr.split(" ").reverse().join(" ")
// }


// function addBaby() {
//   const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];  
//   return animals.map(word => `baby ${word}`)
  
// }
// console.log(addBaby())


// function busCapacity(cap, on, wait) {
//   if (on + wait < cap) {
//     return 0;
//   }
//   else {
//     return (on + wait) - cap;
//   }
// }

// function shoutGreetings(arr) {
//   return arr.map(word => word.toUpperCase() + "!")
// }

// console.log(shoutGreetings(["hello", "hi", "stop"]))

// function calculateCost(rent) {
//   let costOfCar = 40;
//   if (rent >= 7) {
//     costOfCar = (costOfCar * rent) - 50;
//   }
//   else if (rent >= 3 || rent < 7 ) {
//     costOfCar = (costOfCar * rent) - 20;
//   }
//   return costOfCar
// }
// console.log(calculateCost(10))
// console.log(calculateCost(3))
// console.log(calculateCost(7))


// function sortYears(years) {
//   return years.sort((a,b) => b-a)

// }
// console.log(sortYears([1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]))

// const justCoolstuff = (arr1, arr2) => arr1.filter(word => { return arr2.includes(word)})

// console.log(justCoolstuff(['this', 'not this', 'nor this'], ['thing 1', 'thing 2', 'this']))

// const isTheDinnerVegan = arr => arr.every(food => food.source === "plant")

// const evenOrOdd = arr => arr % 2 === 0;

// console.log(evenOrOdd(20));

// const findMyKeys = arr => arr.findIndex(item => item === "keys");

// const factorial = num => {
  
//   for (let i = num - 1; i > 0; i--){
//     num *= i
//   }
//   return num
// }

// console.log(factorial(5))


// const groceries = arr => {
//   const list = ""
//   for (let i = 0; i < arr.length; i++) {
//     list = list + arr[i]
//   }
//   if (arr.length - 2) {
//     list += ","
//   }
//   else if (i === listOfGroceries.length - 2) {
//     newList += " and ";
//   } 
//   return list
// }

// const func = (a, b) => a.reduce((acc, c) => acc + c ** 2, 0) > b.reduce((acc, c) => acc + c ** 3, 0)
// console.log(func([5,5,5], [2,2,2]))


// const func = arr => arr.filter((e, i) => e % i == 0)

// console.log(func([22, -6, 32, 82, 9, 25]))



// const func = arr=> arr.split(" ")


const reverseWords = arr => arr.split(" ").map(word => word.split("").reverse().join("")).reverse().join(" ")



function accum(s) {
  return s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join("-")
}

console.log(accum("RqaEzty"))