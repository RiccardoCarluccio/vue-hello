const app = Vue.createApp({
  data() {
    return {
      vueGaming: "Hell-o",
      vueGamingSecond: "Jell-o",
      inputClass: "click-test-input",
    }
  },

  methods: {
    clickTestButton: function () {
      document.getElementById('click-test-button').classList.toggle('button-active');
    },
    clickTestInput: function () {
      document.querySelector('.click-test-input').classList.toggle('input-selected');
    }
  }
})
app.mount("#app");