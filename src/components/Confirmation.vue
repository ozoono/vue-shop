<template>
  <div>
    <h1>My Cart</h1>
    <div class="info"><p><i class="massive green check icon"></i><br/>Good choice! Thanks for coming</p></div>  
  </div>
</template>

<script>

export default {
  name: 'Confirmation',
  created (){
    this.$store.dispatch('VALIDATE_CHECKOUT');
  } 
}
</script>