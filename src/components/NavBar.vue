<template>
    <div class="ui inverted menu">     
      <router-link to="/" exact class="item">Home</router-link>
      <router-link to="/list/comic" class="item">Comics</router-link>
      <router-link to="/list/graphic novel" class="item">Graphic Novels</router-link>    
      <router-link to="/list/magazine" class="item">Magazines</router-link>
      <router-link to="/list/trade paperback" class="item">Trade Paperbacks</router-link>  

      <div class="right menu">
        <router-link to="/cart" class="ui item">
          <i class="shopping cart icon"></i> My Cart <div class="ui orange label">${{ totalCart.toFixed(2) }}</div>
        </router-link>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapGetters([
      'totalCart'      
    ])
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui.inverted.menu .router-link-active{
  color: #fff;
  background-color: #43494f;
}
</style>
