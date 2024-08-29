<template>
  <h1 v-if="bool" @click="str += '!'">{{ str }}</h1>
  <h1 v-else @click="str += '!'">{{ str.split('').reverse().join('') }}</h1>

  <slot></slot>

  <button v-on:click="myFunc" :style="'color:#' + color">Reverse</button>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, onBeforeUnmount } from 'vue'

console.log('created')

onBeforeMount(()=>{
  console.log('onBeforeMount')
})
onMounted(()=>{
  console.log('onMounted')
})
onBeforeUpdate(()=>{
  console.log('onBeforeUpdate')
})
onUpdated(()=>{
  console.log('onUpdated')
})
onBeforeUnmount(()=>{
  console.log('onBeforeUnmount')
})
onUnmounted(()=>{
  console.log('onUnmounted')
})

const str = ref('Learn vue')
const bool = ref(true)
const color = ref(100000)

const myFunc = () => {
  bool.value = !bool.value
  color.value += 500
}

</script>

<style scoped>
h1 {
  user-select: none;
}
</style>


<!-- <template>
    <div>
      <h1>Добавить новый цвет</h1>
      <form @submit.prevent="addColor">
        <label for="colorName">Название цвета:</label>
        <input v-model="colorName" id="colorName" required />
  
        <label for="colorType">Тип цвета:</label>
        <select v-model="colorType" required>
          <option value="">Выберите тип</option>
          <option value="RGB">RGB</option>
          <option value="RGBA">RGBA</option>
          <option value="HEX">HEX</option>
        </select>
  
        <label for="colorCode">Код цвета:</label>
        <input v-model="colorCode" id="colorCode" required />
  
        <button type="submit">Сохранить</button>
      </form>
  
      <h2>Палитра цветов</h2>
      <div class="color-palette">
        <div 
          class="color-box" 
          v-for="(color, index) in colors" 
          :key="index" 
          :style="{ backgroundColor: color.code }">
          {{ color.name }}
        </div>
      </div>
    </div>
  </template>