<template>
  <div class="hello">
    <h1>Hello!</h1>
    <div class="ui very relaxed list very padded segment">
      <div class="item">
        <i class="orange hand spock outline icon"></i>
        <div class="content">
          Welcome to my vue-shop.
        </div>
      </div>
      <div class="item">
        <i class="orange sitemap icon"></i>
        <div class="content">
          In this <strong>simulated comics online shop</strong>, you can browse through the different categories located in top bar and navigate to a list of comics in each one.
        </div>
      </div>
      <div class="item">
        <i class="orange cart plus icon"></i>
        <div class="content">
          You can select all you want and see how your cart changes (all of the items you can see are obtained from the free <strong>Marvel's API</strong>).
        </div>
      </div>
      <div class="item">
        <i class="orange credit card outline icon"></i>
        <div class="content">
          Finally, you can proceed to <strong>checkout</strong> your order (you won't have to pay anything, obviously... XD).
        </div>
      </div>
      <div class="item">
        <i class="orange vuejs icon"></i>
        <div class="content">
          Remember, this is only a demo that simulates how the fronted of an online shop <strong>developed with Vue.js</strong> could work.
        </div>
      </div>
      <div class="item">
        <i class="orange smile outline icon"></i>
        <div class="content">
          Be happy!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: left;
}
</style>
