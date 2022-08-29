<script setup lang="ts">
import GameGrid from '@/components/GameGrid.vue';
import DiceRoller from '@/components/DiceRoller.vue';
</script>

<template>
  <main id="game-wrapper">
    <GameGrid/>
    <DiceRoller/>
  </main>
</template>

<style scoped lang="scss">
#game-wrapper {
  height: 404px;
  width: 1024px;
  background: #203839;
}
</style>
