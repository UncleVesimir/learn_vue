const app = Vue.createApp({
  data() {
    return {
      title: "The Rhythm of War",
      author: "Brandon Sanderson",
      age: 45,
      number: Math.random(),
      showBooks: false,
      x: 0,
      y: 0,
      books: [
        { title: "Way of Kings", author: "Brandon Sanderson", isFav: true },
        { title: "Oathbringer", author: "Brandson Sanderson", isFav: false },
        { title: "Brave New World", author: "Auldus Hucksley", isFav: false }
      ]
    }
  },
  methods: {
    changeAnswer() {
      this.number = Math.random();
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e) {
      console.log(e.target);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app")