const app = Vue.createApp({
  data() {
    return {
      title: "The Rhythm of War",
      author: "Brandon Sanderson",
      age: 45,
      number: Math.random(),
      showBooks: false
    }
  },
  methods: {
    changeAnswer() {
      this.number = Math.random();
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

app.mount("#app")