<template>
    <HelloWorld msg="Welcome from App"/>
</template>
  
  <script>
  import HelloWorld from '../components/HelloWorld.vue'
  
  export default {
    name: 'MyHomeView',
    components: {
      HelloWorld
    }
  }
  </script>
  
  <style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  