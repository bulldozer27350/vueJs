<template>
  <div id="edit">
    <div class="menu-item ui message">
    <div class="left">
      <img class="menu-item__image" :src="'/images/articles/' + item.name + '.jpg'" />
    </div>
    <div class="right">
      <center><h2>{{ item.id }} / {{ item.name }}</h2></center>
      
      <span style="font-style: bold; font-size: large;">
        {{ item.shortDescription }}
      </span><br />
      
      <span style="font-style: italic; font-size: small;">
        {{ item.longDescription }}
      </span><br />
      <!--
      <span style="text-decoration: underline;">
        Categorie : {{ item.category.name }}
      </span> <br />-->
      
      ( {{ item.stockNumber }} en stock ) <br />

      <button @click="decrement(item)">&nbsp;-&nbsp;</button>
      <button @click="increment(item)">&nbsp;+&nbsp;</button>
      <button @click="validate(item)">Envoyer</button>
      <br />
      <br />
    </div>
  </div>
  </div>
</template>
  
<script>
  import axios from 'axios'
  
  export default {
    name: 'ArticleEdit',
    data() {
        return {
            item: [],
        };
    },
    mounted() {
        axios.get("http://localhost:9000/article/" + this.$route.params.id).then(response => {
            this.item = response.data;
        });
    },
    methods: {
        decrement(article) {
            article.stockNumber--;
        },
        increment(article) {
            article.stockNumber++;
        },
        validate(article) {
          axios.put("http://localhost:9000/article/" + this.$route.params.id, article);
        }
    },
  }
</script>
<style lang="scss">
#edit {
  padding-top: 20px;
}
</style>