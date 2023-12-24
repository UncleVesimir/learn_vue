<template>
  <h1>{{ title }}</h1>
  <br>
  <div v-show="showModal">
    <ModalWindow :theme="theme" @close="toggleModal('showModal')">
      <template v-slot:links>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
      </template>
      <h1>Crazy Giveaway!</h1>
      <p>Grab your craazzzy swag bro!</p>
    </ModalWindow>
  </div>
  <div v-show="showModal2">
    <ModalWindow :theme="null" @close="toggleModal('showModal2')">
      <template v-slot:links>
        <a href="#">Dutty Link 1</a>
        <a href="#">Dutty Link 2</a>
      </template>
      <h1>Shitty Giveaway</h1>
      <p>Don't click it..</p>
    </ModalWindow>
  </div>
  <button v-show="!showModal" @click="toggleModal('showModal')">Show Modal</button>
  <button v-show="showModal" @click="toggleModal('showModal')">Hide Modal</button>
  <button v-show="!showModal2" @click="toggleModal('showModal2')">Show Modal2</button>
  <button v-show="showModal2" @click="toggleModal('showModal2')">Hide Modal2</button>
</template>

<script setup>
  import ModalWindow from './components/ModalWindow.vue'
  import { ref } from 'vue';

  const title = "Got-eem!"
  // const modal_header = 'Sign up For the Bacon Butties!'
  // const modal_text = 'Deez Nuts'
  const theme = 'sale'
  let showModal = ref(false)
  let showModal2 = ref(false);

  let modalObj = {
    showModal,
    showModal2
  }

  function toggleModal(modalString) {
    let ref = modalObj[modalString];
    ref.value = !ref.value;
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
  body {
    background: white;
    padding: 0;
  }
  h1 {
    color: black;
  }
</style>
