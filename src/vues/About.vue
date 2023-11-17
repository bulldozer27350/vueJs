<template>
    <HelloWorld msg="Welcome from About"/>
  </template>
  
  <script>
   import HelloWorld from '../components/HelloWorld.vue'
  
  export default {
    name: 'MyAboutView',
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
  