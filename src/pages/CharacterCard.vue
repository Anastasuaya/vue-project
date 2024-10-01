<template>
  <div class="container">

    <div>
      <button class="btn-tab" v-for="(tab) in tabs" @click="activeTab = tab">{{ tab }}</button>
    </div>

    <Transition mode="out-in">
      <div class="contant" key="1" v-if="activeTab == 'Granger'">
        <div class="flxdrct">
          <h2>Granger</h2>
          <h3>格兰杰</h3>
          <h4>About</h4>
          <p> Granger, a demon hunter who walks the line between human and demon, always preferred to keep to himself.
            But if someone could enter his world, they would realize how terrifying it isâ€”the
            incessant howls and shrill cries constantly deafening his ears and heart.</p>
        </div>
        <div class="df-box">
          <img style="height: 350px; width: 520px;" src="/granger.png" alt="">
            <div style="background-color: #84def7;;" class="circle"></div>
            <div style="border-color: #84def7;" class="circle1"></div>
        </div>
      </div>

      <div class="contant" key="2" v-else-if="activeTab == 'Lancelot'">
        <div class="flxdrct">
          <h2>Lancelot</h2>
          <h3>兰斯洛特</h3>
          <h4>About</h4>
          <p> As the eldest son of Duke Baroque, Lancelot was born rebellious.
            Dead set on resisting the political marriage arranged for him by his father,
            he traveled the country and led a licentious life instead.
            After being wounded at a drunken brawl in a tavern,
            Lancelot was rescued by Odette and finally came to realize what his heart truly yearned for.</p>
        </div>
        <div class="df-box">
          <img style="height: 350px; width: 540px; border-radius: 0% 0% 7% 0%;" src="/Lancelot.png" alt="">
          <div style="background-color: rgb(132 167 247);" class="circle"></div>
            <div style="border-color: rgb(132 167 247);" class="circle1"></div>
        </div>
      </div>

      <div class="contant" key="3" v-else-if="activeTab == 'Angela'">
        <div class="flxdrct">
          <h2>Angela</h2>
          <h3>安吉拉</h3>
          <h4>About</h4>
          <p> An android created by the founder of Laboratory 1718, Dr. Baker.
            It was the first life form created without using human body or soul.
            In order to gain the knowledge of her, other scientists in the lab went after Dr. Baker.
            Before taken away, Dr. Baker stuffed her into a flight capsule to escape.</p>
        </div>
        <div class="df-box">
          <img style="height: 350px; width: 520px;" src="/angela.png" alt="">
          <div style="background-color: rgb(162 151 183);" class="circle"></div>
            <div style="border-color: rgb(162 151 183);" class="circle1"></div>
        </div>
      </div>

      <div class="contant" key="4" v-else-if="activeTab == 'Layla'">
        <div class="flxdrct">
          <h2>Layla</h2>
          <h3 style="padding-left: 30px;">莱拉</h3>
          <h4>About</h4>
          <p> In Eruditio—the City of Scholars, there's hardly anyone who doesn't know of Layla.
            She's the "daughter of Eruditio", just like a bright star that shines over the streets of Eruditio in the
            darkness of night.
            Brave and selfless, she always had a bright and happy smile on her face while toting
            the gun handed to her by her grandfather, protecting Eruditio in her own way.</p>
        </div>
        <div class="df-box">
          <img src="/Layla.png" alt="">
          <div style="background-color: rgb(156 180 223);" class="circle"></div>
            <div style="border-color: rgb(156 180 223);" class="circle1"></div>
        </div>
      </div>

      <div class="contant" key="5" v-else-if="activeTab == 'Dyrioth'">
        <div class="flxdrct">
          <h2>Dyrioth</h2>
          <h3>迪里奥斯</h3>
          <h4>About</h4>
          <p> Prince of the Moniyan Empire, raised by Alice and Thamuz after being kidnapped. He won a duel witnessed by
            Thamuz.
            After the conflict between Light and Dark, the Son of Darkness was about to represent the lord of the
            Abyss and lead the Abyssal Army to the [battlefront].</p>
        </div>
        <div class="df-box">
          <img src="/dyrioth.png" alt="">
          <div style="background-color: rgb(158 132 219);" class="circle"></div>
            <div style="border-color: rgb(158 132 219);" class="circle1"></div>
        </div>
      </div>

    </Transition>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref('Granger')

const tabs = ref(['Granger', 'Lancelot', 'Angela', 'Layla', 'Dyrioth'])


</script>

<style scoped>
.container {
  width: 1000px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.contant {
  border: 3px solid black;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
}

.contant img {
  width: 490px;
  height: 350px;
}

.flxdrct {
  display: flex;
  flex-direction: column;
  padding-left: 30px;
}

h2 {
  font-size: 50px;
  color: rgb(199, 199, 199);
  width: 300px;
  margin-bottom: 0%; 
}

h3 {
  font-size: 50px;
    position: absolute;
    color: #ffffff;
    opacity: 30%;
    margin-bottom: auto;
    margin-top: 14px;
    padding-right: 110px;
    z-index: -1;
}
h4 {
   font-size: 20px;
   margin: 0px;
}

p {
  padding-left: 20px;
  padding: 10px;
  margin-top: 0px;
}

.circle {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  left: auto;
  margin-top: 20px;
  margin-left: 60px;
}

.circle1 {
  width: 325px;
  height: 325px;
  border-radius: 50%;
  border: 3px solid;
  position: absolute;
  z-index: -1;
  left: auto;
  margin-top: 20px;
  margin-left: 60px;
}

.df-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}

.text-car {
  text-align: justify;
}

.tab-nav {
  display: flex;
}


.btn-tab {
  width: 170px;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>