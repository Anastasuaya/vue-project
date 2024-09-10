<template>
  <div>
    <h4>Список забронированных билетов:</h4>
    <ul>
      <li v-for="(ticket, index) in tickets" :key="index">
        Направление: {{ ticket.destination }}, Дата: {{ ticket.date }}, Места: {{ ticket.seats.join(', ') }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tickets: {
      type: Array as () => Array<{ destination: string; date: string; seats: string[] }>,
      required: true,
    },
  },
});
</script>