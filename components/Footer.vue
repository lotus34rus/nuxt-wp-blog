<template>

  <footer>
    <div class="container">
        <div class="name">
          DM-CODE | Блог веб-разработчика &nbsp;&nbsp; 2020 - {{new Date().getFullYear() }}
        </div>
    </div>
  </footer>

</template>

<script>
  export default {
    data: () => ({
      
    
    }),
  }
</script>


<style scoped>
  footer{
    border-top: 1px solid lightgray;
    padding: 15px;
    position: absolute;
    bottom: 0;
    width:100%;
    /* width: calc(100% - 30px); */
    box-sizing: border-box;
  }
</style>