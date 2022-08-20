<script setup lang="ts">
import BaseDice from '@/components/BaseDice.vue';
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
    dice.value = Math.floor(Math.random()*5)+1
  })
}
</script>

<template>
  <main>
    <BaseDice :value="dice.value" :color="dice.color" :dice-type="dice.type" v-for="dice in dices"/>
    <button @click="reRollAllDices">Reroll</button>
  </main>
</template>
