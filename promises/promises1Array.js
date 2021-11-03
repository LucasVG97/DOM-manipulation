let form = document.querySelector('form');
let generateRandom = max => Math.floor(Math.random() * max)
let createRandomArray = () => {
  var lista = new Array(generateRandom(10))
  for (let i = 0; i < lista.length; i++) {
    lista.fill(generateRandom(1000), i, i + 1)
  }
  return lista
}

let createPromises = async () => {
  let interval = generateRandom(10000)
  return await new Promise(resolve => setTimeout(resolve, interval, createRandomArray()))
}

let generatePromises = async () => {
  const promise1 = createPromises()
  const promise2 = createPromises()
  const promise3 = createPromises()
  let allPromiseArray = []
  await Promise.allSettled([promise1, promise2, promise3]).then((result) => {
    for (let element of Object.values(result)) {

      allPromiseArray = [...allPromiseArray, element.value]
    }
    console.log(Object.values(result))
    return allPromiseArray
  })
  let arrayToShow = allPromiseArray.filter(elements => elements != "")
  const ulElement = document.querySelector('ul')
  const liElement = document.createElement('li')
  liElement.innerHTML = `[${arrayToShow}]`
  ulElement.appendChild(liElement)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  generatePromises()
})
