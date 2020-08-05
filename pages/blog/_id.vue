<template>
  <div class="container">ID : {{$route.params.id}}</div>
</template>


<script>
export default {
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      "http://dm-code.ru/wp-json/wp/v2/posts/" + params.id + '?_embed'
    );
    return { post };
  },
};
</script>