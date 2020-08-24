<template>
  <div class="layout">
    <Banner />
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
  .text-center{
    text-align: center;
  }
  body{
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
  }
  .container{
    max-width: 1200px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
  }
  .layout{
   min-height: 85vh;
    position: relative;
    padding-bottom: 80px;
  }
 
</style>
