<template>
  <div id="header" class="ui inverted fixed menu header item"><!-- header item -->
    Démonstration
  </div>
  <div>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
	</div>
	<router-view />
</template>
  
<script>
  export default {
    name: 'MyHeaderComponent'
  }
</script>
  
<style lang="scss">
  
</style>