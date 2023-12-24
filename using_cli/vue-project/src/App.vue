<template>
  <h1>Welcome to The Reaction Game</h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <ReactionBlock v-if="isPlaying" :delay="delay" @stopGame="handleStopGame"/>
  <ResultsDisplay v-if="showResults" :result="playerResult" />
</template>

<script setup>
import { ref } from 'vue';
import ReactionBlock from './components/ReactionBlock.vue';
import ResultsDisplay from './components/ResultsDisplay.vue';

let isPlaying = ref(false)
let showResults = ref(false)
let delay = null
let playerResult = null;

function start () {
  showResults.value = false;
  playerResult = null;
  delay = 2000 + Math.random() * 5000;
  isPlaying.value = true
}

const handleStopGame = ([reactionTime]) => {
  playerResult = reactionTime;
  isPlaying.value = false;
  showResults.value = true;
}
</script>

<style>
  #app {
    font-family: Arial, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 100vw;
    height: 100vh;
  }
</style>
