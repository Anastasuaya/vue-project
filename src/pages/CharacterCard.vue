<template>

    <div class="container">

        <div>
            <button class="btn-tab" v-for="(tab) in tabs" @click="activeTab = tab">{{ tab }}</button>
        </div>

        <Transition mode="out-in">
            <div class="contant" key="1" v-if="activeTab == 'Granger'">
                <div class="df-box">
                    <h2>Granger</h2>
                    <img src="/granger.png" alt="">
                    <p>

                    </p>
                </div>
            </div>
            <div class="contant" key="2" v-else-if="activeTab == 'Lancelot'">
                <div class="df-box">
                    <h2>Lancelot</h2>
                    <img src="/Lancelot.png" alt="">
                    <p></p>
                </div>
            </div>
            <div class="contant" key="3" v-else-if="activeTab == 'Angela'">
                <div class="df-box">
                    <h2>Angela</h2>
                    <img src="/angela.png" alt="">
                    <p></p>
                </div>
            </div>
            <div class="contant" key="4" v-else-if="activeTab == 'Layla'">
                <div class="df-box">
                    <h2>Layla</h2>
                    <img src="/Layla.png" alt="">
                    <p></p>
                </div>
            </div>
            <div class="contant" key="5" v-else-if="activeTab == 'Dyrioth'">
                <div class="df-box">
                    <h2>Dyrioth</h2>
                    <img src="/dyrioth.png" alt="">
                    <p></p>
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
}

.contant img {
  width: 400px;
  height: 300px;
  margin-top: 30px;
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