// var data = [
//     {name: 'Joe', age: 20},
//     {name: 'Bill', age: 30},
//     {name: 'Kate', age: 23}
//   ]

// getNames(data) // should return ['Joe', 'Bill', 'Kate']

function getNames(data) {
    return data.map((item) => item.name);
}