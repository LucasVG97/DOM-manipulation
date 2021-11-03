let form = document.querySelector('form');
let generateRandom = (max) => Math.floor(Math.random() * max)
let createRandomArray = () => {
  var lista = new Array(generateRandom(10))
  for (let i = 0; i < lista.length; i++) {
    lista.fill(generateRandom(1000), i, i + 1)
  }
  return lista
}

let createPromises = async () => {
  let interval = generateRandom(10000)
  const success = await new Promise((resolve) => setTimeout(resolve, interval, createRandomArray()))
  const ulElement = document.querySelector('ul')
  const liElement = document.createElement('li')
  liElement.innerHTML = `[${success}]`
  ulElement.appendChild(liElement)
}

form.addEventListener('submit', event => {
  event.preventDefault()
  createPromises()
  createPromises()
  createPromises()
})