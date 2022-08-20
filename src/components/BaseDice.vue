<script setup lang="ts">
import { Colors } from '@/enums/Colors';
import { computed } from 'vue';
import { DiceType } from '@/enums/DiceType';

const props = defineProps<{
  color: Colors,
  value: 1|2|3|4|5|6,
  diceType: DiceType
}>()

const cssColors = {
  [Colors.green]: '#9ABC78',
  [Colors.orange]: '#e1774c',
  [Colors.blue]: '#7FC6EB',
  [Colors.red]: '#e54365',
  [Colors.yellow]: '#e7b556'
}

const cssBackgroundColor = computed((): string => {
  if(props.diceType === DiceType.color) {
    return '#FFFFFF';
  }

  return '#000000'
})

const cssForeGroundColor = computed((): string => {
  if(props.diceType === DiceType.number) {
    return '#FFFFFF';
  }

  return cssColors[props.value - 1]
})

</script>

<template>
  <div class="dice" :class="`dice-value--${props.value}} dice-type--${diceType ?? DiceType.number}`">
    <template  v-if="diceType !== DiceType.color">
      <div v-for="i in props.value" :key="i">o</div>
    </template>
    <div v-else>
      X
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dice {
  width: 200px;
  height: 200px;
  background-color: v-bind(cssBackgroundColor);
  color: v-bind(cssForeGroundColor);
}
</style>
