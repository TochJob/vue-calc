<template>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <input type="number" v-model.number="num1">
      <input type="number" v-model.number="num2">
      <button v-for="operation of operations" :key="operation" @click="mth(operation)">{{operation}}</button>
      {{ res }}
  
      <input type="checkbox" @change="keybordShow=!keybordShow">
      
      <div class="keybord" v-if="keybordShow">
        <button class="key" v-for="num of numbers" :key="num" @click="changeInput(num)" >{{num}}</button>
        <button class="key" @click="deleteLastEl">delete</button>
        <div class="choiseInput">
          <label for="input1"><input type="radio" name="choiseInput" id="input1" value="1" class="radio1" @change="switchInput">Первок число</label>
          <label for="input2"><input type="radio" name="choiseInput" id="input2" value="2" class="radio2" @change="switchInput">Второе число</label>
        </div>
      </div>
      <div>
        {{ logs }}
      </div>
  
  
  
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Calc',
    components: {
  },
    data() {
      return {
        num1:0,
        newNum1:[],
        newNum2:[],
        num2:0,
        res:0,
        operations:['+','-','*','/','^','%'],
        logs:{},
        fibResult:0, 
        keybordShow:false,
        numbers:[1,2,3,4,5,6,7,8,9],
        inputChange:1,
      }
    },
    methods: {
      deleteLastEl(){
        if(this.inputChange == 1){
          // this.num1=this.newNum1.splice(this.newNum1.length - 1) 
          // console.log(this.num1);
          // this.$delete(this.num1, this.num1.length)
          console.log(this.$delete);
        }else{
          this.newNum2=this.newNum2.pop();
        }
      },
      switchInput(e){
        if(e.target.classList.contains('radio1')){
          this.inputChange=1
        }else if(e.target.classList.contains('radio2')){
          this.inputChange=2
        }
      },
      changeInput(num){
        if(this.inputChange == 1){
          this.newNum1.push(String(num))
          this.num1=Object.values(this.newNum1).join('')
        }else{
          this.newNum2.push(String(num))
          this.num2=Object.values(this.newNum2).join('')
        }
      },
      fib(n){
        return n < 1 ? n : this.fib(n-1)+this.fib(n-2)
      },
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
  
        // this.logs = { ...this.logs,   [Date.now()]: `${this.num1} ${key} ${this.num2} = ${this.res}`}
        this.$set(this.logs,Date.now(), `${this.num1} ${key} ${this.num2} = ${this.res}`)
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
  