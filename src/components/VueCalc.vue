
<!-- Калькулятор без делегирования/ вешаем на каждый клик обработчик -->
<template>
  <div ref="calc">
    <div style="margin: 0 0 10px 20px;">
      <div style="font-size: 22px; height: 12px; text-align: left;">{{ calcStr }}</div>
      <div style="font-size: 22px; height: 12px; text-align: left; padding: 10px;">{{ calcCurrentStr }}</div>
    </div>
    <div style="display: flex; justify-content: center;">
      <div>
        <div style="display: flex;">
          <button @click="calcEvents('1')">1</button>
          <button @click="calcEvents('2')">2</button>
          <button @click="calcEvents('3')">3</button>
        </div>
        <div style="display: flex;">
          <button @click="calcEvents('4')">4</button>
          <button @click="calcEvents('5')">5</button>
          <button @click="calcEvents('6')">6</button>
        </div>
        <div style="display: flex;">
          <button @click="calcEvents('7')">7</button>
          <button @click="calcEvents('8')">8</button>
          <button @click="calcEvents('9')">9</button>
        </div>
        <div style="display: flex; justify-content: center;">
          <button @click="calcEvents('0')">0</button>
        </div>
      </div>
      <div style="display: flex; flex-direction: column;">
        <button @click="calcEvents('+')">+</button>
        <button @click="calcEvents('*')">*</button>
        <button @click="calcEvents('-')">-</button>
      </div>
      <div style="display: flex; flex-direction: column;">
        <button @click="calcEvents('=')">=</button>
        <button @click="calcEvents('/')">/</button>
      </div>
    </div>
    <div style="display: flex;">

    </div>
  </div>
</template>

<script setup lang = "ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const calc = ref()
const calcStr = ref('')
const calcCurrentStr = ref('')

const calcKeyboard = (e: KeyboardEvent) => {
  if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=', 'Enter'].includes(e.key)) {
    let key = e.key
    if (key == ',') key = '.'
    if (key == 'Enter') key = '='
  }
}

onMounted(() => {
  document.addEventListener('keydown', calcKeyboard)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', calcKeyboard)
})

const calcEvents = (char: string) => {
  if (char == '.') {
    if (calcCurrentStr.value.includes('.')) return
  }
  if (['+', '-', '*', '/'].includes(char)) {
    calcCurrentStr.value += char
    calcStr.value = calcCurrentStr.value
    calcCurrentStr.value = ''
    return
  }
  if (char == '=') {
    if (calcStr.value.includes('=')) return
    calcStr.value += calcCurrentStr.value
    if (calcStr.value.includes('+')) {
      const arr = calcStr.value.split('+')
      calcCurrentStr.value = (parseFloat(arr[0]) + parseFloat(arr[1])).toString()
    }
    if (calcStr.value.includes('-')) {
      const arr = calcStr.value.split('-')
      calcCurrentStr.value = (parseFloat(arr[0]) - parseFloat(arr[1])).toString()
    }
    if (calcStr.value.includes('*')) {
      const arr = calcStr.value.split('*')
      calcCurrentStr.value = (parseFloat(arr[0]) * parseFloat(arr[1])).toString()
    }
    if (calcStr.value.includes('/')) {
      const arr = calcStr.value.split('/')
      calcCurrentStr.value = (parseFloat(arr[0]) / parseFloat(arr[1])).toString()
    }
    calcStr.value += char
    return
  }
  calcCurrentStr.value += char
}

</script>