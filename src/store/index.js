import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex ({
    state: {
      paymentsList:[],

    },
    mutations:{
        // SET_PAYMENTS_LIST(state, paymentsList){
        //     state.paymentsList = paymentsList
        // }
    },
    getters:{
        // paymentsList: (state)=>state.paymentsList
    },
    // actoins:{
    //     fetchData({ commit }){
    //         setTimeout(()=>{
    //             const initialPaymentsList = [
    //                 {
    //                     date: '28.03.2020',
    //                     category: 'Food',
    //                     value:163
    //                   },
    //                   {
    //                     date: '25.03.2020',
    //                     category: 'Transport',
    //                     value:263
    //                   },
    //                   {
    //                     date: '28.03.2022',
    //                     category: 'Food',
    //                     value:363
    //                   }
    //                 ]
    //                 commit('SET_PAYMENTS_LIST', initialPaymentsList)
    //         }, 2000)
    //     }
    // },
})