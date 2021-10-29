let form = document.querySelector('form');

let createRandomArray = () => {
  var lista = new Array(Math.floor(Math.random() * 10))
  for (let i = 0; i < lista.length; i++) {
    lista.fill(Math.floor(Math.random() * 1000), i, i + 1)
  }
  return lista
}

let createPromises = async () => {
  let interval = Math.floor(Math.random() * 10000)
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