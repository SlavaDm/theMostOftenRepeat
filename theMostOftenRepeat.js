const b = []
const arr = [1, 5, 3, 6, 2, 7, 8, 1, 4, 6, 1]

arr.forEach(el => {
  let c = false

  for (let i of b) {
    if (i.value == el) {
      i.repeat++
      c = true
    }
  }

  if (c === false) {
    b.push({ value: el, repeat: 1 })
  }
})

b.sort((a, b) => (a.repeat > b.repeat ? -1 : 1))

const findTheMostOftenRepeat = (value = 1) => {
  return b.slice(0, value)
}


console.log(findTheMostOftenRepeat(3))
