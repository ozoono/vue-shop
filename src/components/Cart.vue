<template>
  <div>
    <h1>My Cart</h1>
    <div  v-if="numCartItems > 0">
      <table class="ui table">
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th></th>             
            <th class="right aligned">Quantity</th>
            <th class="right aligned">Price</th>       
          </tr>
        </thead>     
        <tbody>
            <ItemCart v-for="(item, index) in listCart" :key="index" :item="item"></ItemCart>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="3"></th>
            <th class="left aligned">TOTAL:</th>
            <th class="right aligned"><h3>${{ totalCart.toFixed(2) }}</h3></th>
          </tr>
        </tfoot>
      </table>   
      <div class="ui basic segment">
        <button class="ui huge red button" @click="emptyCart()">
          <i class="times icon"></i> Empty Cart
        </button>
        <router-link to="/cart/confirmation" tag="button" class="huge teal toggle ui button">Checkout <i class="arrow right icon"></i></router-link>
      </div>  
    </div>  
    <div class="info" v-else><p><i class="massive red frown outline icon"></i><br/>The cart is empty</p></div>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemCart from '@/components/ItemCart'

export default {
  name: 'Cart',
  components: {
    ItemCart
  },  
  computed: {
    ...mapGetters([
      'numCartItems',
      'listCart',
      'totalCart'
    ])
  },
  methods:{
    emptyCart: function(){
      this.$store.dispatch('EMPTY_CART');
    }
  } 
}
</script>