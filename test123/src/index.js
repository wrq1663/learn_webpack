import test1 from './assets/test1.wav'
import test2 from './assets/test2.wav'
import test3 from './assets/test3.wav'

import mList from './mList'

let test = new mList(  {
  name: 'test1',
  src: test1,
  sprite: {
    blast: [1000, 2000],
    laser: [3000, 1000],
    winner: [4000, 1000]
  }
})
let testwrq = new mList(  {
  name: 'test2',
  src: test2,
  sprite: {
    blast: [0, 2000],
    laser: [3000, 1000],
    winner: [4000, 1000]
  }
})
let testwrq1 = new mList(  {
  name: 'test3',
  src: test3,
  sprite: {
    blast: [1000, 2000],
    laser: [3000, 1000],
    winner: [4000, 1000]
  }
})



document.getElementById('play').addEventListener('click', function () {
  test.play('blast')
})

document.getElementById('test1').addEventListener('click', function () {//跳段
  test.play('laser')
})
document.getElementById('test2').addEventListener('click', function () { //切换下一段音频
  test.play('winner')
})
document.getElementById('test3').addEventListener('click', function () { //切换下一段音频
  testwrq.play('blast')
})
document.getElementById('test4').addEventListener('click', function () { //切换下一段音频
  testwrq1.play('blast')
})
