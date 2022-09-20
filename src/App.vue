<template>
  <div id="app">
    <header>
        <h1 class="header">My personal costs</h1>
    </header>
    <AddPaymentForm @add-payment="addPayment" />
    <main>
      <PaymentDisplay :paymentsList="paymentsList"/>
    </main>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentDisplay from './components/PaymentDisplay.vue';

export default {
  name: 'App',
  components: {
    PaymentDisplay,
    AddPaymentForm,
},
  data() {
    return {
      // paymentsList:[],
    }
  },
  methods: {
    // fetchPaymentsData(){
    //   return [
    //   {
    //       date: '28.03.2020',
    //       category: 'Food',
    //       value:163
    //     },
    //     {
    //       date: '25.03.2020',
    //       category: 'Transport',
    //       value:263
    //     },
    //     {
    //       date: '28.03.2022',
    //       category: 'Food',
    //       value:363
    //     }
    //   ]
    // },
    addPayment(data){
      this.paymentsList.push(data)
    },
  },
  created() {
    // setTimeout(()=>{
    //   this.paymentsList = this.fetchPaymentsData()

    // }, 2000)
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
