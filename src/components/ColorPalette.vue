<!-- <template>

  <h2>Create new color</h2>

  <div>
    <form @submit.prevent="addColor">
      <p>Color</p>
      <input v-model="colorName">
      <p>Type</p>
      <select v-model="colorType">
        <option value="">Select type</option>
        <option value="RGB">RGB</option>
        <option value="RGBA">RGBA</option>
        <option value="HEX">HEX</option>
      </select>
      <p>Code</p>
      <input v-model="colorCode">

      <button type="submit">Save</button>

    </form>

    <h2>All colors</h2>

    <div class="color-palette">
      <div class="color-box" 
      v-for="(color, index) in colors" 
      :key="index" 
      :style="{ backgroundColor: color.code }">
        {{ color.name }}
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {defineComponent, ref } from 'vue';


const message = ref('')

interface Color {
  name: string;
  type: string;
  code: string;
}

      const colorName = ref('')
      const colorType = ref('')
      const colorCode = ref('')
      const colors = ref<Color[]>([])
  
      const validateName = (name: string) => {
        const nameLower = name.toLowerCase();
        return colors.value.every(color => color.name.toLowerCase() !== nameLower) && /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name);
      };
  
      const validateColorCode = (type: string, code: string) => {
        if (type === 'RGB') {
          return /^rgb\(\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*\)$/.test(code);
        }
        if (type === 'RGBA') {
          return /^rgba\(\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/.test(code)
        }
        if (type === 'HEX') {
          return /^#[A-Fa-f0-9]{6}$/.test(code);
        }
        return false;
      };
  
      const addColor = () => {
        if (!validateName(colorName.value)) {
          alert('Некорректное название цвета.')
          return
        }
        if (!validateColorCode(colorType.value, colorCode.value)) {
          alert('Некорректный код цвета.')
          return
        }
        colors.value.push({
          name: colorName.value,
          type: colorType.value,
          code: colorCode.value,
        });
        colorName.value = ''
        colorType.value = ''
        colorCode.value = ''

 return { colorName, colorType, colorCode, colors, addColor }      
      }
     
    
  
 

</script>

<style></style>
 -->

<!--   
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  interface Color {
    name: string;
    type: string;
    code: string;
  }
  
  export default defineComponent({
    name: 'ColorPalette',
    setup() {
      const colorName = ref('');
      const colorType = ref('');
      const colorCode = ref('');
      const colors = ref<Color[]>([]);
  
      const validateName = (name: string) => {
        const nameLower = name.toLowerCase();
        return colors.value.every(color => color.name.toLowerCase() !== nameLower) && /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(name);
      };
  
      const validateColorCode = (type: string, code: string) => {
        if (type === 'RGB') {
          return /^rgb\(\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*\)$/.test(code);
        }
        if (type === 'RGBA') {
          return /^rgba\(\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*([0-2]?\d{0,2}|255)\s*,\s*(0|0?\.\d+|1(\.0)?)\s*\)$/.test(code);
        }
        if (type === 'HEX') {
          return /^#[A-Fa-f0-9]{6}$/.test(code);
        }
        return false;
      };
  
      const addColor = () => {
        if (!validateName(colorName.value)) {
          alert('Некорректное название цвета.');
          return;
        }
        if (!validateColorCode(colorType.value, colorCode.value)) {
          alert('Некорректный код цвета.');
          return;
        }
        colors.value.push({
          name: colorName.value,
          type: colorType.value,
          code: colorCode.value,
        });
        colorName.value = '';
        colorType.value = '';
        colorCode.value = '';
      };
  
      return { colorName, colorType, colorCode, colors, addColor };
    },
  });
  </script>
  
  <style scoped>
  .color-palette {
    display: flex;
    flex-wrap: wrap;
  }
  .color-box {
    width: 100px;
    height: 100px;
    margin: 5px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
  }
  </style> -->
