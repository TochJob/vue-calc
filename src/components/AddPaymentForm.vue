  <template>
    <div>
      <form action="">
        <input type="text" placeholder="Amount" v-model="value">
        <input type="text" placeholder="Type" v-model="category">
        <input type="text" placeholder="Date" v-model="date">
        <button @click="addPayment">Add</button>
      </form>
    </div>
  </template>
  <script>
  
  export default {
    name: 'AddPaymentForm',
    data() {
      return {
        value:'',
        category:'',
        date:0,
      }
    },
    props: {
      show:Boolean,
    },
    methods: {
      addPayment(e){
        e.preventDefault();
        console.log(this.currentDate);
        const { value, category, date } = this
        const data = {
           value,
           category,
           date: date ? date : this.currentDate
        }

        this.$emit('add-payment', data)
      }
    },
    computed: {
      currentDate(){
        const currentDate= new Date()
        const day = currentDate.getDate()
        const month = currentDate.getMonth()+1
        const year = currentDate.getFullYear()

        return `${day}.${month}.${year}`

      }
    },

}
  </script>
  
  <style scoped>
    form{
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid #000;
      max-width: 300px;
      margin: 0 auto;
      padding: 10px 0;
      margin-bottom: 10px;
    }
    form input{
      margin-bottom: 10px;
      padding: 10px 30px;
      border-radius: 10px;
      border: 1px solid #000;
    }

    button{
      background: rgb(53, 233, 173);
      border: none;
      padding: 10px 30px;
      border-radius: 10px;
      margin-top: 10px;
      color: rgb(0, 0, 0);
      font-weight: 700;
      cursor: pointer;
    }
  </style>
  