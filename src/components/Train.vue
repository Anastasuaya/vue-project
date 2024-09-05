<!-- Module 5 week 14. Задание 6. -->
<template>

<div>
  <p></p>
  <select v-model="select">
  <option value="">Select type</option>
  <option value="Sochi">Sochi-Krasnodar 1</option>
  </select>
  <p></p>
  <input type="text">
  <button>Search</button>
</div>

<hr>

<div style="border: 1px solid black; width: 575px;">
 <div>
  <input type="checkbox">1
  <input type="checkbox">3
  <input type="checkbox">5
  <input type="checkbox">7
  <input type="checkbox">9
  <input type="checkbox">11
  <input type="checkbox">13
  <input type="checkbox">15
  <input type="checkbox">17
  <input type="checkbox">19
  <input type="checkbox">21
  <input type="checkbox">23
  <input type="checkbox">25
  <input type="checkbox">27
 </div>
 <div>
  <input type="checkbox">2
  <input type="checkbox">4
  <input type="checkbox">6
  <input type="checkbox">8
  <input type="checkbox">10
  <input type="checkbox">12
  <input type="checkbox">14
  <input type="checkbox">16
  <input type="checkbox">18
  <input type="checkbox">20
  <input type="checkbox">22
  <input type="checkbox">24
  <input type="checkbox">26
  <input type="checkbox">28
 </div>
</div>

<hr>

<p>Total price</p>
<button type="submit">Pay</button>
</template>

<script setup lang="ts">
import {ref} from 'vue'


const select = ref('')

</script>

<style scoped>

</style>