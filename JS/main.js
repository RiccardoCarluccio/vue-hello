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
    },
    boing: function () {
      document.querySelector('.such-wow').classList.toggle('biong'); //il querySelector prende solo il primo elemento
    },
  }
})

const ANOTHER_DIV = document.createElement('div');
ANOTHER_DIV.classList.add('gapbox');
ANOTHER_DIV.innerHTML = `
  <div :class="anotherDivClass" @click="boing">
  </div>
  <div class="such-wow" @click="boing">
  </div>
`

const CONTAINER = document.querySelector('.container');
CONTAINER.append(ANOTHER_DIV);

app.mount("#app");