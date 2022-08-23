<script setup lang="ts">
enum Colors {
  green = 0,
  orange = 1,
  blue = 2,
  red = 3,
  yellow = 4,
}

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
</script>

<template>
  <main id="game-grid">
    <div v-for="(row, rowIndex) in gameGrid" :key="rowIndex" class="row">
      <div>
        <div v-for="(column, columnIndex) in row" :key="columnIndex" :data-color="column.color" :data-index="columnIndex" class="column">
          <font-awesome-icon class="star" v-if="column.star" icon="fa-solid fa-star" />
        </div>
      </div>
    </div>
  </main>
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
  }
}
</style>
