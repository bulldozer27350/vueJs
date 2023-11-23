<template>
  <div id="title" class="header item">
    Démonstration
  </div>
  <div id="headerLinks">
		<span class="headerLinks__a" ><router-link to="../">Accueil</router-link></span>
    <span class="headerLinks__a" ><router-link to="../create">Création</router-link></span>
		<span class="headerLinks__a" ><router-link to="../about">Contact</router-link></span>
	</div>
</template>
  
<script>
  export default {
    name: 'MyHeaderComponent'
  }
</script>
  
<style lang="scss">
  #headerLinks {
    padding-top: 9px;
    padding-bottom: 9px;
    font-size: medium;
    color: white;
  }
  .headerLinks__a {
    margin: 0;
    padding: 0;
    height: fit-content;
  }
  .headerLinks__a > a {
    padding-left: 10px;
    color: white;
    border-color: whitesmoke;
  }
</style>