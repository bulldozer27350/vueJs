<script>
  export default {
    name: 'ItemComponent',
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    methods: {
        decrement(article) {
            article.stockNumber--;
        },
        increment(article) {
            article.stockNumber++;
        }
    },
  }
</script>

<template>
 <div class="menu-item ui message"  v-if="item.stockNumber != 0" :class="item.category.name == 'Nourriture' ? 'error' : 'success'">
    <div class="left">
      <img class="menu-item__image" :src="'/images/articles/' + item.name + '.jpg'" />
    </div>
    <div class="right">
      <center><h2><router-link :to="'edit/' + item.id">{{ item.id }} / {{ item.name }}</router-link></h2></center>
      
      <span style="font-style: bold; font-size: large;">
        {{ item.shortDescription }}
      </span><br />
      
      <span style="font-style: italic; font-size: small;">
        {{ item.longDescription }}
      </span><br />
      
      <span style="text-decoration: underline;">
        Categorie : {{ item.category.name }}
      </span> <br />
      
      ( {{ item.stockNumber }} en stock ) <br />

      <button @click="decrement(item)">&nbsp;-&nbsp;</button>
      <button @click="increment(item)">&nbsp;+&nbsp;</button>
      <br />
      <br />
    </div>
  </div>
</template>
  
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
a {
  color: #42b983;
}
.menu-item {
  display: flex;
  width: 800px;
  justify-content: space-between;
  margin: 10px;
}

.menu-item__image {
  max-width: 200px;
  vertical-align: auto;
}
.left{
  margin-right: 30px;
  display: block;
}
.right{
  margin-left: 30px;
  text-align: justify;
}
</style>