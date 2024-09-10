
<template>

<VueCalc></VueCalc>

<div>
    <label :for="id">{{ labelText }}</label>
    <input :id="id" type="text" :value="modelValue" @input="$emit('update:modelValue', ($event?.target as HTMLInputElement).value)">
  </div>

<button>
  <a href="https://csstriggers.com/">css triggers</a>
</button>

<button>
  <a href="https://gsap.com/">GSAP</a>
</button>
<hr>

<select v-model="select">
  <option value="All">All</option>
  <option value="Read">Read</option>
  <option value="Build">Biuld</option>
  <option value="Learn">Learn</option>
</select>

<form @submit.prevent="addToDo">
    <input v-model="newTodo" type="text">
  </form>
  
<hr>

  <HeaderComp>
    <p>Вложенный тег</p>
    <hr>
    <p>Вложенный тег 2</p>
  </HeaderComp>

  <p></p>
  <input v-model="message" />

  <HeaderComp />

<hr>

  <ToDoElement/> 

<hr>

  <game></game>

<hr>

  <ColorPalette></ColorPalette>

<hr>

<Train2></Train2>

<hr>

</template>


<script setup lang="ts">
import HeaderComp from './components/HeaderComponent.vue'
import ToDoElement from './components/ToDoElement.vue'
import {ref} from 'vue'
import VueCalc from './components/VueCalc.vue'
import game from './components/game.vue'
import ColorPalette from './components/ColorPalette.vue'
import Train2 from './components/Train2.vue'


defineProps(['id', 'labelText', 'modelValue'])
defineEmits(['update:modelValue'])

const newTodo = ref('')

const select = ref('All')
const todos = ref([
  { id: 0, text: 'Learn JavaScript' },
  { id: 1, text: 'Learn JavaScript' },
  { id: 2, text: 'Learn Vue' },
  { id: 3, text: 'Build something awesome' }
])

const addToDo = ()=>{
  todos.value.push({
    id: todos.value.length,
    text: newTodo.value
  })
  newTodo.value = ''
}

const message = ref('')


message.value = 'Hello Vue!'



</script>

<style scoped>
h1 {
  user-select: none;
}
</style>

