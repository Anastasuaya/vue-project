<template>
  <HeaderComponent>
    <RouterLink to="/">На главную</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/hello">Hello</RouterLink>
  </HeaderComponent> 
  
  <RouterView></RouterView>

  <footer style="background:#7a7272; height:30px;">
     <p style="color: black;">logo</p>
  </footer>

</template>

<script setup lang="ts">
import HeaderComponent from '#root/components/HeaderComponent.vue';



</script>

<style scoped>
</style>
