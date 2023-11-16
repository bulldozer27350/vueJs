<template>
  <div class="ui inverted fixed menu">
      <MyHeaderComponent />
    </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import MyHeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyHeaderComponent
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
