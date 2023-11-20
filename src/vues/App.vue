<template>
  <div id="headerComponent" class="ui inverted fixed menu">
    <MyHeaderComponent />
  </div>
  <div id="contentPage">
    <router-view />
  </div>
</template>

<script>
import MyHeaderComponent from '../components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    MyHeaderComponent
  }
}
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
