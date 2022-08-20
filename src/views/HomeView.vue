<script setup lang="ts">
enum Color {
  green,
}
const gameGrid: {color: Color, star: boolean}[][] = [
    [
      {color: Color.green, star: false},
      {color: Color.green, star: false},
    ]
]
</script>

<template>
  <main>
    <div v-for="(row, rowIndex) in gameGrid" :key="rowIndex">
      <div>
        <div v-for="(column, columnIndex) in row" :key="columnIndex">
          {{column.color}}
          {{column.star}}
        </div>
      </div>
    </div>
  </main>
</template>
