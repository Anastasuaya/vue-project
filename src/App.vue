<template>
  <HeaderComponent>
    <div style="display: flex;">
    <RouterLink to="/"><p>На главную</p></RouterLink>

    <RouterLink to="/about"><p>About</p></RouterLink>

    <RouterLink to="/hello"><p>Hello</p></RouterLink>   
    
    <RouterLink to="/CharacterCard"><p>CharacterCard</p></RouterLink> 

    <RouterLink to="/idbm"></RouterLink>
    </div>

  </HeaderComponent> 
  
  <RouterView></RouterView>

  <footer style="background:#7a7272; height:30px;">
     <p style="color: black;">logo</p>
  </footer>

</template>

<script setup lang="ts">
import HeaderComponent from '#root/components/HeaderComponent.vue'




</script>

<style scoped>
p {
   padding: 10px;
}
</style>
