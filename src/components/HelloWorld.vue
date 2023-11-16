<template>
  <div class="ui main container">
    <ul>
      <li v-for="item in articles" :key="item.id">
        <div class="menu-item ui message"  v-if="item.stockNumber != 0" :class="item.category.name == 'Nourriture' ? 'error' : 'success'">
          <div class="left"><img class="menu-item__image" :src="'/images/articles/' + item.name + '.jpg'" />
          </div>
          <div class="right">
          <h2>{{ item.id }} / {{ item.name }}</h2> 
          <span style="font-style: bold; font-size: large;">{{ item.shortDescription }}</span><br />
          <span style="font-style: italic; font-size: small;">{{ item.longDescription }}</span><br />
          <span style="text-decoration: underline;">Categorie : {{ item.category.name }}</span> <br />
          ( {{ item.stockNumber }} en stock ) 
          <button @click="decrement(item)">&nbsp;-&nbsp;</button>
          <button @click="increment(item)">&nbsp;+&nbsp;</button>
          <br />
          <br />
        </div>
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
.menu-item {
    display: flex;
    width: 800px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  
  .menu-item__image {
    max-width: 200px;
    vertical-align: auto;
  }
</style>
