<script setup lang="ts">
import { Colors } from '@/enums/Colors';
import { computed } from 'vue';
import { DiceType } from '@/enums/DiceType';

const props = defineProps<{
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

  return '#0a1515'
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
    <template v-if="diceType !== DiceType.color">
      <div v-for="i in props.value" :key="i">
        <font-awesome-icon class="icon-dot" icon="fa-solid fa-circle" />
      </div>
    </template>
    <div v-else>
      <font-awesome-icon class="icon-x" icon="fa-solid fa-xmark" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dice {
  background-color: v-bind(cssBackgroundColor);
  color: v-bind(cssForeGroundColor);
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin: 5px;
  float: left;
  text-align: center;

  &.dice-type--color {
    .icon-x {
      font-size: 70px;
      margin-top: 5px;
    }
  }
}
</style>
