<template>
  <div class="container">
    <div class="category-list">
        <a href=""
          @click.prevent="filterPost('')"
        >Все записи ({{posts.length}})</a>
        <a href=''
          v-for= "cat of categories"
          :key = "cat.id"
          @click.prevent="filterPost(cat.id)"
        > {{cat.name}} ({{cat.count}}) </a>
    </div>

    <div class="blog-list">
      <Card v-for="post of posts" :filter = 'filter' :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: ''
    };
  },
  methods: {
    filterPost(catId){
      this.filter = catId
    }
  },
  async fetch({ store }) {
    if (store.getters["posts/getPosts"].length === 0) {
      await store.dispatch("posts/fetchPosts");
      await store.dispatch("categories/fetchCategories");
    }
  },

  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
    },
    categories(){
      return this.$store.getters["categories/getCategories"];
    }
  },
};
</script>


<style scoped>
.blog-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
.category-list{
  padding: 0px 0px 20px 0;
}
.category-list a{
  font-size: 24px;
  margin-right: 10px;
  color: black;
  text-decoration: none;
}
.category-list a:hover{
  color: grey;
}
</style>