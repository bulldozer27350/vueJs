<template>
  <div class="ui main container">
    <ul>
      <li v-for="item in articles" :key="item.id">
        <div class="ui message"  v-if="item.stockNumber != 0" :class="item.category.name == 'Nourriture' ? 'error' : 'success'">
        {{ item.id }} / <h2>{{ item.name }}</h2> 
        <br />
        <span style="font-style: bold; font-size: large;">{{ item.shortDescription }}</span><br />
        <span style="font-style: italic; font-size: small;">{{ item.longDescription }}</span><br />
        <span style="text-decoration: underline;">Categorie : {{ item.category.name }}</span> <br />
        ( {{ item.stockNumber }} en stock ) 
        <button @click="decrement(item)">&nbsp;-&nbsp;</button>
        <button @click="increment(item)">&nbsp;+&nbsp;</button>
        <br />
        <br />
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      articles: [],
    }
  },
  mounted() {
      axios.get('http://localhost:9000/articles').then(response => {
        this.articles = response.data
      })
  },
  methods: {
    decrement(article) {
      article.stockNumber --
    },
    increment(article) {
      article.stockNumber ++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
