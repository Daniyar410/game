let randomNumber = Math.floor(Math.random() * 100) + 1
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')



btn.addEventListener('click', () => {
  const userGuess = input.value

  if (!userGuess || userGuess < 1 || userGuess > 100 ) {
    result.innerText = 'введите от 1 до 100 👀💀'
  }else if(userGuess == randomNumber) {
    result.innerText = 'jack bot 🤑🤑'

    setTimeout(() => {
      randomNumber = Math.floor(Math.random() * 100) + 1
        result.innerText = 'обновление введите новое число'
        input.value = ''
    }, 3000);
  } else if(userGuess < randomNumber ){
    result.innerText = 'больше 🔼'
  } else{
    result.innerText = 'меньше🔽'
  }
})
