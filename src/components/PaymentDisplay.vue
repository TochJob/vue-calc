    <template>
        <div>
            {{paymentsList}}
        </div>
    </template>
  <script>
  
  export default {
    name: 'PaymentDisplay',
    props: {
        paymentsList: {
            type: Array,
            default: ()=>([]),
            // required: true,
        }
    }
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
  