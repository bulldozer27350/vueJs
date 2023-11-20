<template>
  <div id="helloWorld" class="ui main container">
    <ul>
      <li v-for="element in articles" :key="element.id">
        <ItemComponent :item="element" />
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import ItemComponent from './ItemComponent.vue'

export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            articles: [],
        };
    },
    mounted() {
        axios.get("http://localhost:9000/articles").then(response => {
            this.articles = response.data;
        });
    },
    components: { ItemComponent }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
