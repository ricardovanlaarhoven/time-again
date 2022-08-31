<script setup lang="ts">
import BaseDice from '@/components/BaseDie.vue';
import { DiceType } from '@/enums/DiceType';
import { useRealtimeDatabase } from '@/useRealtimeDatabase';
import { useRoute } from 'vue-router';

const diceTypes = [
  { type: DiceType.number, count: 3, },
  { type: DiceType.color, count: 3},
]
const route = useRoute()
const {data: game} = useRealtimeDatabase(`games/${route.params.pin}`, {diceValues: []} as {diceValues: { value:1|2|3|4|5|6, type: DiceType}[]});

function reRollAllDices() {
  game.value.diceValues = [];
  diceTypes.forEach(type => {
    for (let i = 0; i < type.count; i++) {
      game.value.diceValues.push({value: Math.floor(Math.random() * 6) + 1 as 1|2|3|4|5|6, type: type.type});
    }
  });
}

</script>

<template>
  <main id="dice-grid">
    <template v-if="game.diceValues?.length === 6">
      <BaseDice
        v-for="(dice, index) in game.diceValues"
        :key="index"
        :value="dice.value"
        :color="dice.color"
        :dice-type="dice.type"
      />
    </template>
    <button @click="reRollAllDices">
      <font-awesome-icon
        class="dice-icon"
        icon="fa-solid fa-dice"
      />&nbsp; Roll Dice
    </button>
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
