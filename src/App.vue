<template>

<VueCalc></VueCalc>


  <HeaderComp>
    <p>Вложенный тег</p>
    <hr>
    <p>Вложенный тег 2</p>
  </HeaderComp>

  <p></p>
  <input v-model="message" />

  <HeaderComp />

  <ToDoElement/> 
  
</template>

<script setup lang="ts">
import HeaderComp from './components/HeaderComponent.vue'
import ToDoElement from './components/ToDoElement.vue'

import {ref} from 'vue'
import VueCalc from './components/VueCalc.vue';

const message = ref('')

message.value = 'Hello Vue!'

</script>

<style scoped>
h1 {
  user-select: none;
}
</style>

<!-- create ToDoList -->