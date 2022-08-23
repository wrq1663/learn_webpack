import { Howl } from 'howler';
const cache = []


export default class mList extends Howl {
  constructor(options) {
    super(options)
    cache.push(this)
  }

  play(...arg) {
    cache.forEach(item => {
      item.stop()
      console.log(item)
    })
    super.play.call(this, ...arg)
  }
}