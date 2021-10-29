const form = document.querySelector("#form")
const user = document.querySelector('input[type="text"]')
const ulElement = document.querySelector("ul")


function newUser(user) {
  const liElement = document.createElement("li")
  liElement.innerText = user + " "
  ulElement.appendChild(liElement)
  removeButton(liElement)

}

function removeButton(liElement) {
  const button = document.createElement("button")
  button.innerHTML = `<img align="center" height="20" width="20" src="minus.svg" alt="remove transaction">`
  button.onclick = () => liElement.remove()
  liElement.appendChild(button)
}


function clearInput() {
  return user.value = ""
}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  newUser(user.value)
  clearInput()
})




