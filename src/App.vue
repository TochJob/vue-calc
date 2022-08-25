<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="number" v-model.number="num1">
    <input type="number" v-model.number="num2">
    <button @click="mth('+')">+</button>
    <button @click="mth('-')">-</button>
    <button @click="mth('*')">*</button>
    <button @click="mth('/')">/</button>
    <button @click="mth('^')">^</button>
    <button @click="mth('%')">%</button>
    {{ res }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      num1:0,
      num2:0,
      res:0
    }
  },
  methods: {
    sum () {
      this.res=this.num1+this.num2
    },
    minus () {
      this.res=this.num1-this.num2
    },
    div () {
      this.res=this.num1/this.num2
    },
    mult () {
      this.res=this.num1*this.num2
    },
    exponentiation () {
      this.res=Math.pow(this.num1, this.num2)
    },
    integer () {
      this.res=Math.trunc(this.num1 / this.num2)
    },
    mth (key) {
      switch (key) {
        case '+':
          this.sum()
          break;
        case '-':
          this.minus()
          break;
        case '*':
          this.mult()
          break;
        case '/':
          this.div()
          break;
        case '%':
          this.integer()
          break;
        case '^':
          this.exponentiation()
          break;
      }
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
