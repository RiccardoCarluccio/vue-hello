const app = Vue.createApp({
  data() {
    return {
      vueGaming: "Hell-o",
      vueGamingSecond: "Jell-o",
    }
  },

  methods: {
    clickTest: function () {
      document.getElementById('click-test').classList.toggle('bg-cornflowerblue');
    }
  }
})
app.mount("#app");