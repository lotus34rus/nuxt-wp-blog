<template>
  <div class="container">
      <div class="post-title">
          <h1 v-html="post.title.rendered"></h1>
          <p>Опубликовано: <span class="date">{{ new Date(post.date).toLocaleString().split(",")[0] }}</span></p>
          <p>Категория: {{catName}}</p>
      </div>
      <div class="post-content" v-html="post.content.rendered"> </div>
  </div>
</template>


<script>
export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      "http://dm-code.ru/wp-json/wp/v2/posts/" + params.id + "?_embed"
    );
    return { post };
  },



  data() {
    return {
      thumb: "",
      catName: "",
      title: '',
    };
  },


  async mounted() {
    if (this.post.featured_media) {
      const img = await this.$axios.$get(
        "http://dm-code.ru/wp-json/wp/v2/media/" + this.post.featured_media
      );
      this.thumb = img.guid.rendered;
    }
    const cat = await this.$axios.$get(
      "http://dm-code.ru/wp-json/wp/v2/categories/" + this.post.categories[0]
    );
    this.catName = cat.name;
    this.title = this.post.title.rendered;
  },

  head() {
      return {
        title: this.title,
      }
  }
};
</script>


<style scoped>
    .post-title{
        margin-bottom: 40px;
        border-bottom: 1px solid lightgray;
    }
</style>