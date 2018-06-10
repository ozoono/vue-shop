<template>
  <div id="app">
    <div><img src="./assets/logo.png" /></div>
    <NavBar></NavBar>

    <router-view/>

    <div class="ui clearing divider"></div>

      <div class="footer">
      <button class="ui basic button">
        <a href="https://github.com/ozoono/vue-shop"><i class="github icon black"></i>Repo on Github</a>
      </button>

      <button class="ui basic button"> 
        <a href="http://vuejs.org"><i class="checkmark icon black"></i>Vue 2.x</a>   
      </button>
    </div> 

  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;
  width: 700px;
}
h1 {
  margin-top: 1em;
  border-bottom: 1px dotted #bbb;
  text-align: left;
  text-transform: capitalize;
  font-weight: normal;
}
h1 span{
  text-transform: uppercase;
  font-size: .6em;
}
ul {  
  margin: 0;
  padding: 0;
  list-style-type: none;  
}
.info{
  position: relative;
  width: 100%;
  text-align: center;
  color: #000;
  background-color: #ffffff;
}
.info p{
  padding: 70px;
}
.info i{
  margin-bottom: 20px;
}
.footer {
    margin-top: 50px;
    text-align: center;
}
</style>
