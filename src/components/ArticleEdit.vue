<template>
  <div id="edit">
    <div class="menu-item ui message">
    <div class="left">
      <img class="menu-item__image" :src="'/images/articles/' + item.name + '.jpg'" />
    </div>
    <div class="right">
      <center><h2>{{ item.id }}</h2></center>
      <table>
        <tr><td>Nom de l'article :</td>         <td><input type="text" v-model="item.name" id="name" /></td></tr>
        <tr><td>Description de l'article :</td> <td><input v-model="item.shortDescription" id="shortDesc" :type="String"/></td></tr>
        <tr><td>Complément d'information :</td> <td><textarea v-model="item.longDescription" id="longDesc" :type="String"/></td></tr>
        <tr><td>Catégorie :</td> <td><select v-model="selected"> <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option></select></td></tr>
      </table>
      ( {{ item.stockNumber }} en stock ) <br />

      <button @click="decrement(item)">&nbsp;-&nbsp;</button>
      <button @click="increment(item)">&nbsp;+&nbsp;</button> <br /> <br />
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
            item: {},
            categories: [],
        };
    },
    mounted() {
      axios.get("http://localhost:9000/categories").then(response => {
        this.categories = response.data;
      });

      if(this.$route.params.id != null) {
        axios.get("http://localhost:9000/article/" + this.$route.params.id).then(response => {
            this.item = response.data;
        });
      } else {
        this.item.stockNumber = 0;
      }
    },
    methods: {
        decrement(article) {
          if (article.stockNumber > 0) {
            article.stockNumber--;
          }
        },
        increment(article) {
            article.stockNumber++;
        },
        validate(article) {
          if (this.$route.params.id != null) {
            axios.put("http://localhost:9000/article/" + this.$route.params.id, article);
          } else {
            console.log(article.category)
            axios.post("http://localhost:9000/article/", article).catch(err=> {
              console.log(err)
            });
          }
        }
    },
  }
</script>
<style lang="scss">
#edit {
  padding-top: 20px;
}
</style>