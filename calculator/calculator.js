const enterBtn = document.querySelector('.enter')
const equalsBtn = document.querySelector('.equals')
const newOpBtn = document.querySelector('.newOp')
const catchInput = document.querySelector('input[type="number"]')
const totalSpan = document.querySelector('#total span')
const modal = document.querySelector('#total')
const operators = document.querySelectorAll('input[type="radio"]')
let elements = []
let result
let eventOperator
const selectOperator = new Map()

const manipulateContent = (function () {
  function openModal() {
    modal.classList.add('--is-open')
  }

  function closeModal() {
    modal.classList.remove('--is-open')
  }

  function showEquals() {
    equalsBtn.classList.add('show')
  }

  function hideEquals() {
    equalsBtn.classList.remove('show')
  }

  function showEnter() {
    enterBtn.classList.add('show')
  }

  function hideEnter() {
    enterBtn.classList.remove('show')
  }

  return {
    closeModal,
    openModal,
    showEquals,
    hideEquals,
    showEnter,
    hideEnter,
  }
})()

const addition = (n1, n2) => n1 + n2
const subtraction = (n1, n2) => n1 - n2
const multiplication = (n1, n2) => (n1 * n2).toFixed(2)
const division = (n1, n2) => n2 > 0 ? (n1 / n2).toFixed(2) : NaN

enterBtn.onclick = function () {
  elements = [...elements, +catchInput.value]
  clearInput()
  if (elements.length == 2) {
    manipulateContent.showEquals()
    manipulateContent.hideEnter()
  }
}

selectOperator
  .set("+", addition)
  .set("-", subtraction)
  .set("*", multiplication)
  .set("/", division)

function getOperator() {
  operators.forEach(operator => operator.checked == true ? eventOperator = operator.value
    : eventOperator)
  return eventOperator
}

equalsBtn.onclick = function () {
  getOperator()
  let [n1, n2] = elements
  let operation = selectOperator.get(eventOperator)
  if (operation == undefined) {
    alert("Please, select an operation!!")
  }
  else {
    result = operation(n1, n2)
    elements = []
    totalSpan.textContent += result
    manipulateContent.openModal()
    manipulateContent.hideEquals()
  }
}

newOpBtn.onclick = function () {
  manipulateContent.closeModal()
  manipulateContent.showEnter()
  totalSpan.textContent = ' '
}

let clearInput = () => catchInput.value = ""
