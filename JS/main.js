const app = Vue.createApp({
  data() {
    return {
      vueGaming: "Hell-o",
      vueGamingSecond: "Jell-o",
      inputClass: "click-test-input",
      anotherDivClass: "such-wow",
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

const ANOTHER_DIV = document.createElement('div');
ANOTHER_DIV.innerHTML = `
  <div :class="anotherDivClass">
  </div>
  <div class="such-wow">
  </div>
`

const CONTAINER = document.querySelector('.container');
CONTAINER.append(ANOTHER_DIV);