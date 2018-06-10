<template>
  <li class="ui clearing padded vertical segment">
    <img :src="item.image" />
    <h3 class="ui header">{{ item.name }}
      <div class="sub header">
        {{ item.format.toUpperCase() }} | #{{ item.id }}</div>
    </h3>

    <h2 class="ui header">${{ item.price }}</h2>
    <template v-if="item.stock > 0">      
      <button class="ui toggle mini teal button" @click="addCart(item.id)"> <i class="shopping cart icon"></i>Add to cart</button> {{ item.stock }} item<span  v-if="item.stock > 1">s</span> in stock
    </template>
    <span v-else><button class="ui mini red button"> <i class="exclamation circle icon"></i>SOLD OUT</button></span>
  </li>
</template>

<script>
export default {
  name: 'ItemList',
  props: ['item'],
  data () {
    return {

    }
  },
  methods: {
    addCart: function(id){
      this.$store.dispatch('ADD_TO_CART', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: block;
  margin-bottom: 1em;  
  text-align: left;
}
a {
  color: #42b983;
}
img{
  float: left;
  margin-right: 15px;
  width: 108px;
  height: 162px;
}
.ui.header{
  margin-top: 0;
}
.clearfix::after {
    content: "";
    clear: both;
    display: table;
}
</style>
