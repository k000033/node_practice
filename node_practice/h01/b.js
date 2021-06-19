const  {add,mul} = require('./a') // 將 a.js 的 add，mul 方法 引用
const sum = add(10,20)
const result = mul(10,10)


const  _ = require('lodash') // 引用 package.json 
console.log(sum)
console.log(result)

const arr = _.concat([1,2],3)
console.log(arr)