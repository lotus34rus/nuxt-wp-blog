<template>
  <div class="container">
    <div class="blog-list">
      <Card v-for="post of posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  async fetch({ store }) {
    if (store.getters["posts/getPosts"].length === 0) {
      await store.dispatch("posts/fetchPosts");
    }
  },

  computed: {
    posts() {
      return this.$store.getters["posts/getPosts"];
    },
  },
};
</script>


<style scoped>
.blog-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>