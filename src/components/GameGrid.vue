<script setup lang="ts">
import { Colors } from '@/enums/Colors';
import { Ref, ref } from 'vue';

const gameGrid : {color: Colors, star: boolean}[][] = [
  [
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.green,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.orange,
      star: true,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
  ],
  [
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.yellow,
      star: true,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.yellow,
      star: true,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.blue,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
  ],
  [
    {
      color: Colors.blue,
      star: true,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: true,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
  ],
  [
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.red,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
  ],
  [
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
  ],
  [
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.blue,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.red,
      star: true,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: true,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.red,
      star: true,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.orange,
      star: true,
    },
  ],
  [
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.blue,
      star: false,
    },
    {
      color: Colors.red,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.yellow,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: false,
    },
    {
      color: Colors.green,
      star: true,
    },
    {
      color: Colors.orange,
      star: false,
    },
    {
      color: Colors.orange,
      star: false,
    },
  ]
]

const playerGrid: Ref<boolean[][]> = ref([]);
for (let i = 0; i < 7; i++) {
  playerGrid.value[i] = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
}
function handleColumnClick(rowIndex: number, columnIndex: number) {
  const isRemovingCheck = playerGrid.value[rowIndex][columnIndex];
  const isFirstColumn = (columnIndex === 7);
  const hasCheckOnRight = columnIndex === 14 ? false : playerGrid.value[rowIndex][columnIndex + 1];
  const hasCheckOnLeft = columnIndex === 0 ? false : playerGrid.value[rowIndex][columnIndex - 1];
  const hasCheckOnTop = rowIndex === 0 ? false : playerGrid.value[rowIndex - 1][columnIndex];
  const hasCheckOnBottom = rowIndex === 6 ? false : playerGrid.value[rowIndex + 1][columnIndex];
  if (isRemovingCheck || isFirstColumn || hasCheckOnRight || hasCheckOnLeft || hasCheckOnTop || hasCheckOnBottom) {
    playerGrid.value[rowIndex][columnIndex] = !playerGrid.value[rowIndex][columnIndex];
    return;
  }
}
</script>

<template>
  <div id="game-grid">
    <div v-for="(row, rowIndex) in gameGrid" :key="rowIndex" class="row">
      <div>
        <div v-for="(column, columnIndex) in row" :key="columnIndex" :data-color="column.color" :data-index="columnIndex" class="column" @click="handleColumnClick(rowIndex, columnIndex)">
          <font-awesome-icon class="star" v-if="column.star" icon="fa-solid fa-star" />
          <font-awesome-icon class="cross" icon="fa-solid fa-xmark" v-if="playerGrid?.[rowIndex]?.[columnIndex] === true" size="3x"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#game-grid {
  width: 780px;
  height: 364px;
  background-color: #203839;
  padding: 20px;

  .row {
    width: 780px;
    height: 52px;
  }
  .column {
    width: 50px;
    height: 50px;
    float: left;
    position: relative;
    border-radius: 5px;
    margin: 1px;
    box-sizing: border-box;
    text-align: center;

    &[data-color="0"] {
      background-color: #9ABC78;
    }
    &[data-color="1"] {
      background-color: #e1774c;
    }
    &[data-color="2"] {
      background-color: #7FC6EB;
    }
    &[data-color="3"] {
      background-color: #e54365;
    }
    &[data-color="4"] {
      background-color: #e7b556;
    }

    &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 44px;
      height: 44px;
      background-color: #fff;
      opacity: 0.3;
      border-radius: 30px;
    }

    &[data-index="7"] {
      border: 1.5px solid #fff;

      &:before {
        top: 2px;
        left: 2px;
      }
    }

    .star {
      color: #fff;
      opacity: 0.5;
      font-size: 28px;
      margin-top: 10px
    }
    .cross {
      position: absolute;
      opacity: 0.5;
      left: 8px;
      top: 0;
    }
  }
}
</style>
