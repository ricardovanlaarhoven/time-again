<script setup lang="ts">
import { ref } from 'vue';
import router from '@/router';

const gamePin = ref("");

function joinSession() {
  if (gamePin.value.length === 6) {
    router.push({ name: "game", params: { pin: gamePin.value } });
  }
  //@TODO add error message
}

function generateGamePinAlphanumericString() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let pin = "";
  for (let i = 0; i < 6; i++) {
    pin += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return pin;
}

function createSession() {
  gamePin.value = generateGamePinAlphanumericString();
  // @TODO add game to database
  joinSession();
}
</script>

<template>
  <main id="home-wrapper">
    <!--    @TODO apply an OTP input here-->
    <input
      v-model="gamePin"
      type="text"
      maxlength="6"
    >
    <button @click="joinSession">
      Join session
    </button>
    <button @click="createSession">
      Create session
    </button>
  </main>
</template>
