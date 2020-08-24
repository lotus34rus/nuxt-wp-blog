<template>
  <div class="container">
      <div class="main-photo">
        <img src="/img/photo.jpg" alt="Мое фото">
      </div>
      <div class="main-info">
        <p>
          Привет! Приятно, что вы попали в мой блог. Возможно, вы найдете здесь то, что искали.<br>
          Для началала, давайте познакомимся! Меня зовут Дмитрий,и я WEB-разработчик с опытом создания WEB-продуктов более 5 лет. 
        </p>
        <p>Моя специализация — создание различных проектов, от посадочных страниц до внутренних CRM систем и интеграций 
          со сторонними сервисами.
       </p>
       <p>
          В этом блоге я буду публиковать свой путь по тернистому пути разработчика, полезные техники, которые помогли мне решить ту или иную задачу
          и все то, чем моя душа захочет поделиться с "интернетом".
        </p>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
  .container{
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
  }
  
  .main-photo{
    width: 20%;
  }

  .main-info{
    width: 80%;
    padding: 20px 30px;
  }
  .main-info p{
    font-size: 20px;
    line-height: 28px;
  }

  .main-photo img{
    width: 100%;
  }
</style>
