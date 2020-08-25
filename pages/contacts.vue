<template>
  <div class="container">
    <p>Если у вас есть вопросы, предложения или полезная информация, вы всегда можете меня найти на следующих реусрсах:</p>

    <p>
      <b>Персональный сайт:</b>
      <a href="http://dm-code.ru">ТЫК</a>
    </p>
    <p>
      <b>GitHub:</b>
      <a href="https://github.com/lotus34rus">ТЫК</a>
    </p>
    <p>
      <b>Instagram:</b>
      <a href="https://www.instagram.com/work.dmitriy34/">ТЫК</a>
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Блог Веб-разработчика | DM-CODE.RU",
    };
  },
};
</script>

<style scoped>
p {
  font-size: 22px;
  width: 70%;
  text-align: center;
  line-height: 30px;
  margin-bottom: 10px;
}
.container {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>