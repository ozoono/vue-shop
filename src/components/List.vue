<template>
  <div>
    <h1><span><i class="list icon"></i>Results from category:</span> {{ format }}</h1>
    <div class="loading" v-if="loading"><p>Loading data</p></div>
    <div class="error" v-if="error"><p><i class="massive red exclamation triangle icon"></i><br/>Data not available</p></div>    
    <ul>
      <ItemList v-for="(item, index) in listProducts(format)" :key="index" :item="item"></ItemList>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ItemList from '@/components/ItemList'

export default {
  name: 'List',
  components: {
    ItemList
  },
  props: ['format'],
  data () {
    return {
      msg: 'List',
    }
  },
  computed: {
    ...mapState([
      'loading',
      'error'
    ]),    
    ...mapGetters([
      'listProducts'
    ])
  },
  created: function() {
    this.getData();      
  },
  watch: {
    // call again the method if the route changes
    '$route': 'getData'
  },
  methods: {
    getData(){
      this.$store.dispatch('FETCH_ITEMS', this.format)
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* loading */
@keyframes loading {
  to {transform: rotate(360deg);}
}
 .loading, .error{
  position: relative;
    width: 100%;
    height: 300px;
    text-align: center;
    color: #000;
    background-color: #ffffff;
}
.loading:before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 40%;
  left: 50%;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border-radius: 50%;
  border: 4px solid #ddd;
  border-top-color: #004eae;
  animation: loading .6s linear infinite;
}
.loading p{
  padding-top: 150px;
}
.error p{
  padding-top: 100px;
}
</style>
