<template>
  <div>
    <h2>Бронирование билетов</h2>
    <label for="destination">Направление:</label>
    <select v-model="selectedDestination" id="destination">
      <option v-for="destination in destinations" :key="destination" :value="destination">{{ destination }}</option>
    </select>

    <label for="date">Дата:</label>
    <input type="date" v-model="selectedDate" id="date" />

    <h3>Выберите места:</h3>
<div style="display: flex; padding-bottom: 20px;">      
  <div class="stick">
    <div class="pilot"></div>
    <div class="pilot"></div>
  </div>
   <div class="container">

      <div class="seats" style="padding-top: 10px;">
          <div 
          v-for="seat in seats" 
          :key="seat"
          :class="{'booked': isBooked(seat)}">
      <input type="checkbox" :value="seat" v-model="selectedSeats" :disabled="isBooked(seat)"  />
      <label :style="{ color: isBooked(seat) ? 'red' : 'black' }">{{ seat }}</label>
     </div>
    </div>
    <div class="seats">
          <div v-for="seat in seats1" :key="seat" :class="{'booked': isBooked1(seat)}">
      <input type="checkbox" :value="seat" v-model="selectedSeats" :disabled="isBooked1(seat)" />
      <label :style="{ color: isBooked1(seat) ? 'red' : 'black' }">{{ seat }}</label>
     </div>
    </div>    
    <div class="seats">
          <div v-for="seat in seats2" :key="seat" :class="{'booked': isBooked2(seat)}">
      <input type="checkbox" :value="seat" v-model="selectedSeats" :disabled="isBooked2(seat)" />
      <label :style="{ color: isBooked2(seat) ? 'red' : 'black' }">{{ seat }}</label>
     </div>
    </div>  
    </div>
</div>
    <button @click="bookTickets">Забронировать</button>

    <!-- <h4>Забронированные билеты</h4> -->
    <booked-tickets :tickets="bookedTickets" />
  </div>
</template>

<script lang="ts">
import { defineComponent,} from 'vue'
import BookedTickets from './BookedTickets.vue'



export default defineComponent({
  components: {
    BookedTickets,
  },
  data() {
    return {
      destinations: ['Адлер - Краснодар', 'Имеретинский курорт - Саратов', 'Адлер - Москва'],
      selectedDestination: '',
      selectedDate: '',
      seats: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37'],
      seats1: ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38'],
      seats2: ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39'],
      selectedSeats: [] as string[],
      bookedTickets: [] as { destination: string; date: string; seats: string[]; seats1: string[]; seats2: string[] }[],
    }
  },
  methods: {
    bookTickets() {
      if (this.selectedDestination && this.selectedDate && this.selectedSeats.length) {
        this.bookedTickets.push({
          destination: this.selectedDestination,
          date: this.selectedDate,
          seats: [...this.selectedSeats],
          seats1: [...this.selectedSeats],
          seats2: [...this.selectedSeats],
        })
        this.selectedSeats = []
      }
    },
    isBooked(seat: string): boolean {
      return this.bookedTickets.some(ticket => ticket.seats.includes(seat))
    },
    isBooked1(seat: string): boolean {
      return this.bookedTickets.some(ticket => ticket.seats1.includes(seat))
    },
    isBooked2(seat: string): boolean {
      return this.bookedTickets.some(ticket => ticket.seats2.includes(seat))
    }
  },
})

</script>

<style scoped>

.container{
  display: flex;
 flex-direction: column; 
 /* align-items: center; */
 border: 1px solid black;
}

.seats{
  display: flex;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
}

.stick {
  display: flex;
    justify-content: space-between;
    border: 1px solid black;
    width: 120px;
    border-radius: 65% 0% 0% 65%;
    flex-direction: column;
    align-items: center;
}

.pilot {
  background-color: black;
  height: 20px;
  width: 20px;
}

.available {
background-color: #a0e0a0; /* Зеленый для доступных */
}

.booked {
  color: white;
background-color: #691010; /* Красный для забронированных */
cursor: not-allowed;
}

</style>