<script setup lang="ts">
import BaseDice from '@/components/BaseDie.vue';
import { Colors } from '@/enums/Colors';
import { ref } from 'vue';
import { DiceType } from '@/enums/DiceType';

const dices = ref([
  {color: Colors.green, value: 1, type: DiceType.number},
  {color: Colors.green, value: 1, type: DiceType.number},
  {color: Colors.green, value: 1, type: DiceType.number},
  {color: Colors.green, value: 1, type: DiceType.color},
  {color: Colors.green, value: 1, type: DiceType.color},
  {color: Colors.green, value: 1, type: DiceType.color},
])

function reRollAllDices() {
  dices.value.forEach(dice => {
    dice.value = Math.floor(Math.random()*6)+1
  })
}
</script>

<template>
  <main id="dice-grid">
    <BaseDice :value="dice.value" :color="dice.color" :dice-type="dice.type" v-for="(dice, index) in dices" :key="index"/>
    <button @click="reRollAllDices"><font-awesome-icon  class="dice-icon" icon="fa-solid fa-dice" />&nbsp; Roll Dice</button>
  </main>
</template>

<style scoped lang="scss">
#dice-grid {
  background-color: #203839;
  width: 200px;
  height: 404px;
  padding: 40px 10px 10px;
  box-sizing: border-box;
  float: right;

  button {
    background-color: #fff;
    color: #203839;
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    text-transform: uppercase;
    margin-left: 30px;
    margin-top: 20px;

    .dice-icon {
      font-size: 16px;
      color: #203839;
    }
  }
}
</style>
