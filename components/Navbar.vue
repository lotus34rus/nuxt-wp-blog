 <template>
  <div class="container">
    <nav>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/blog">Блог</nuxt-link>
      <nuxt-link to="/contacts">Контакты</nuxt-link>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({}),
};
</script>


<style lang="css" scoped>
    nav{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    nav a{
        color: black;
        font-size: 24px;
        margin: 0px 10px;
        text-decoration: none;
        position: relative;
    }
    nav a:hover::before{
        width: 100%;
        height: 1px;
    }
    nav a::before{
        content: '';
        width: 0;
        height: 0px;
        background: black;
        position: absolute;
        display: block;
        bottom: -5px;
        left: 0;
        transition: .5s ease-in-out;
    }
</style>