<template>
  <div id="game">

    <h1>Угадай число</h1>

    <p>Я задумал число от 1 до 100. Угадай его</p>

    <input type="number" v-model="guess" placeholder="Введите число">

    <button @click="checkGuess">Угадать</button>

    <p v-if="message">{{ message }}</p>

    <button v-if="gameOver" @click="resetGame">Начать заново</button>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const randomNumber = ref(0)
const guess = ref(null)
const message = ref('')
const gameOver = ref(false)


const checkGuess = () => {
  if (guess.value !== null) {
    if (guess.value < 1 || guess.value > 100) {
      message.value = 'Пожалуйста, введите число от 1 до 100.'
      return
    }

    if (guess.value < randomNumber.value) {
      message.value = 'Слишком маленькое! Попробуйте еще раз.'
    } else if (guess.value > randomNumber.value) {
      message.value = 'Слишком большое! Попробуйте еще раз.'
    } else {
      message.value = 'Поздравляю! Вы угадали число!'
      gameOver.value = true
    }

    guess.value = null // Сбросить поле ввода
  } 
  return { guess, checkGuess, message }

  
}

const resetGame = () => {
  randomNumber.value = Math.floor(Math.random() * 100) + 1
  guess.value = null
  message.value = ''
  gameOver.value = false
}

// Сброс игры при создании компонента
resetGame()

</script>
