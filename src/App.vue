<template>
  <HeaderComponent>
    <RouterLink to="/">На главную</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </HeaderComponent> 
  
  <RouterView></RouterView>

  <footer style="background:#dedede; height:30px">
    logo
  </footer>

</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';



</script>

<style scoped>
</style>
