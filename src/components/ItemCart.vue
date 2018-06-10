<template>
  <tr>
    <td class="collapsing"><img :src="item.image" class="ui image"></td>
    <td>
      <h4 class="ui header">{{ item.name }}
       <div class="sub header">{{ item.format.toUpperCase() }} | #{{ item.id }}</div>
      </h4></td>
    <td><button class="mini ui compact circular red icon button" @click="removeFromCart(item.id)"><i class="times icon"></i></button></td>      
    <td class="right aligned">{{ item.quantity }}</td>
    <td class="right aligned">
      <h4 class="ui header">${{ item.subTotal }}
        <div v-if="item.quantity > 1">(${{ item.price }} each)</div>
      </h4></td>
  </tr>
</template>

<script>
export default {
  name: 'ItemCart',
  props: ['item'],
  data () {
    return {

    }
  },
  methods: {
    removeFromCart: function(id){
      this.$store.dispatch('REMOVE_FROM_CART', id)      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 54px;
  height: 81px;
}
h4 div{
  color: #666;
  font-size: .6em;
}
</style>
<span v-if="totalCart > 0">