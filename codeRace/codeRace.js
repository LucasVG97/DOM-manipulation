let min = 0;
let sec = 0;
let msec = 0;
let cont = 0;
let cron;
let username = document.querySelector('#name')
document.querySelector('.start').onclick = () => {
  if (cont == 0) {
    start()
  }
};
document.querySelector('.stop').onclick = () => {
  if (cont != 0) {
    stop()
  }
}
let users = [];
let userList = document.querySelector('ol')
function start() {
  if (username.value === '') {
    alert('Please enter your name');
    return;
  }
  else {
    cron = setInterval(function () {
      cont++;
      msec++;
      if (msec >= 100) {
        sec++;
        msec = 0;
      }
      if (sec >= 60) {
        min++;
        sec = 0;
      }
      document.getElementById('min').innerText = formatDate(min);
      document.getElementById('sec').innerText = formatDate(sec);
      document.getElementById('msec').innerText = formatDate(msec)
    }, 10);
  }
}

function stop() {
  clearInterval(cron)
  getInformation();
  orderUsers();
  min = 0;
  sec = 0;
  msec = 0;
  cont = 0;
  document.getElementById('min').innerText = '00';
  document.getElementById('sec').innerText = '00';
  document.getElementById('msec').innerText = '00';
  clearInput();
}

let clearInput = () => username.value = ''

function formatDate(input) {
  return input > 10 ? input : `0${input}`
}

function getInformation() {
  let user = {
    name: username.value,
    time: `${formatDate(min)}:${formatDate(sec)}:${formatDate(msec)}`,
    msecTotalTime: `${cont}`
  }
  users = [...users, user];
}

function orderUsers() {
  userList.innerHTML = '';
  orderedList = users.sort((a, b) => a.msecTotalTime - b.msecTotalTime);
  window.sessionStorage.clear();
  for (const element of orderedList) {
    allUsers(element);
    let li = document.createElement('li');
    li.innerText = `${element.name} - ${element.time}`;
    userList.appendChild(li);
  }
  top1(orderedList[0]);
}

const allUsers = (user) => {
  window.sessionStorage.setItem(user.name, user.time);
};

const top1 = (user) => {
  window.localStorage.clear();
  window.localStorage.setItem(user.name, user.time);
};
