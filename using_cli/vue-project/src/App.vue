<template>
  <h1>{{ title }}</h1>
  <div v-show="showModal">
    <Modal :header="modal_header" :text="modal_text" :theme="theme" />
  </div>
  <button v-show="!showModal" @click="toggleModal">Show Modal</button>
  <button v-show="showModal" @click="toggleModal">Hide Modal</button>
</template>

<script setup>
import Modal from './components/Modal.vue'
import ref from 'vue'
const modal_header = 'Sign up For the Bacon Butties!'
const modal_text = 'Deez Nuts'
const theme = 'sale'
let showModal = ref(false)

function toggleModal() {
  showModal = !showModal
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
}
h1 {
  color: blue;
}
</style>
