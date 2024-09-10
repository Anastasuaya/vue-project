<!-- Module 5 week 14. Задание 6. -->
<template>

<div id="App">

  <h1>Бронирование билетов на поезд</h1>
  
  <div>
    <label for="direction">Направление:</label>
    <select v-model="selectedDirection" id="direction">
      <option v-for="direction in directions" :key="direction" :value="direction">{{ direction }}</option>
    </select>
  </div>
  
  <div>
    <label for="date">Дата поездки:</label>
    <input type="date" v-model="selectedDate" id="date" />
  </div>

<h3>Выберите места для бронирования</h3>
    <div  class="seats"
      v-for="seat in seats" 
      :key="seat.number" 
      :class="{'booked': bookedSeats.includes(seat.number), 'available': !bookedSeats.includes(seat.number)}"
      @click="toggleSeat(seat.number)"
    >
      {{ seat.number }}
    </div>

    <button @click="bookTickets">Забронировать билеты</button>

<h3>Забронированные билеты</h3>
<ul>
  <li v-for="ticket in bookedTickets" :key="ticket.id">{{ ticket.details }}</li>
</ul>
</div>

</template>

<script setup lang="ts">
import { ref} from 'vue'



const directions = ref(['Москва - Санкт-Петербург', 'Краснодар - Ростов', 'Новосибирск - Омск'])
  const seats = ref([{ number: 1 }, { number: 2 }, { number: 3 }, { number: 4 }, { number: 5 }])
  const bookedSeats = ref<number[]>([])
  const bookedTickets = ref<{ id: number; details: string }[]>([])
  const selectedDirection = ref<string>(directions.value[0])
  const selectedDate = ref<string>('')

    // Метод для выбора места
    const toggleSeat = (seatNumber: number) => {
    if (bookedSeats.value.includes(seatNumber)) {
      bookedSeats.value = bookedSeats.value.filter(seat => seat !== seatNumber)
    } else {
      bookedSeats.value.push(seatNumber)
    }
  }

  const bookTickets = () => {
  if (bookedSeats.value.length === 0 || !selectedDate.value) {
    alert('Пожалуйста, выберите места и дату!')
    return
  }

  const ticketDetails = `Направление: ${selectedDirection.value}, Дата: ${selectedDate.value}, Места: ${bookedSeats.value.join(', ')}`
  const ticket = {
    id: bookedTickets.value.length + 1,
    details: ticketDetails,
  }

  bookedTickets.value.push(ticket)
  bookedSeats.value = [] // Сбросить выбранные места
  selectedDate.value = '' // Сбросить дату

  return {
  directions,
  seats,
  bookedSeats,
  bookedTickets,
  selectedDirection,
  selectedDate,
  toggleSeat,
  bookTickets,
}
}

</script>

<style scoped>

.seats {
display: flex;
flex-wrap: wrap;
max-width: 200px;
margin: 20px 0;
}

.seats div {
width: 40px;
height: 40px;
border: 1px solid #000;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
}

.available {
background-color: #a0e0a0; /* Зеленый для доступных */
}

.booked {
background-color: #e0a0a0; /* Красный для забронированных */
cursor: not-allowed;
}

</style>