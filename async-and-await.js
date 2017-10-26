// Definition of callback
const callback = (err) => { }

const executor = (resolve, reject) => {
  // reject()

  // resolve()


}


const promise = new Promise((resolve, reject) => {


  // resolve()
  // reject()

})


console.log(promise.then)
console.log(promise.catch)


// const add = (x, y) => {
//   return new Promise((resolve, reject) => {
//     return resolve(x + y)
//   })
// }
//
// const subtract = (x, y) => {
//   return new Promise((resolve, reject) => {
//     return resolve(x - y)
//   })
// }

const add = (x, y) => {
  return Promise.resolve(x + y)
}

const subtract = async (x, y) => {
  return await x - y
}

console.log(subtract(3,2).then)


add(1, 2)
  .then((addResult) => {
    addResult
    return subtract(addResult, 1)
  })
  .then(subResult => {
    subResult
  })
  .catch(err => {
    console.log(err)
  })


// const add = (x, y, callback) => {
//   return callback(null, x + y)
// }
//
//
// add(1, 1, (err, result) => {
//   if(err) throw err;
//   result
// })