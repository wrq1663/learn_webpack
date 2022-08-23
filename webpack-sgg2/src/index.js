// import {sum} from './math'

document.getElementById('wrq').onclick = function () {
  import(/* webpackChunkName: "math" */"./math").then(res => { console.log(res) })
}
console.log(123123)


