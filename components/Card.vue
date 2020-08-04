<template>
     <div class="post">
      <div class="header_post">
        <img
          src="https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt
          v-if="thumb.length === 0"
        />
        <img :src = "thumb" 
        v-else
        >
      </div>

      <div class="body_post">
        <div class="post_content">
          <h1 v-html = 'post.title.rendered'></h1>
          <!-- <p v-html = "post.excerpt.rendered"> </p> -->

          <div class="container_infos">
            <div class="postedBy">
              <span>Опубликовано</span>
               {{ new Date(post.date).toLocaleString().split(",")[0] }}
            </div>

            <div class="container_tags">
              <span>Категория </span>
              <div class="tags">
                <ul>
                  <li>{{catName}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    props: ['post'],
    data() {
        return {
            thumb: '',
            catName: ''
        }
    },
    async mounted() {
        if(this.post.featured_media){
            const img = await this.$axios.$get('http://dm-code.ru/wp-json/wp/v2/media/'+ this.post.featured_media)
            this.thumb = img.guid.rendered
        }
        const cat =  await this.$axios.$get('http://dm-code.ru/wp-json/wp/v2/categories/'+ this.post.categories[0])
        this.catName = cat.name

    },
}
</script>


<style scoped>
.post {
  width: 350px;
  height: 400px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  position: relative;
  border: 1px solid lightgray;
  margin-right: 20px;
}
.post p{
    overflow: hidden;
}
/* .post:hover .header_post {
  margin-top: -20px;
} */
/* .post:hover .body_post {
  height: 50%;
} */
/* .post:hover img {
  transform: translatey(-10px) translatex(-5px) scale(1.05);
} */
.header_post {
  width: 100%;
  height: 50%;
  background: #ddd;
  position: absolute;
  top: 0;
  -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
}
.header_post img {
  max-width: 100%;
  /* height: auto; */
  height: 100%;
  width: 100%;
  transition: ease-in-out 600ms;
}
.body_post {
  width: 100%;
  height: 50%;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  cursor: pointer;
}
.post .body_post .post_content {
  width: 80%;
  height: 80%;
  background: #fff;
  position: relative;
}
.post .body_post .post_content h1 {
  font-size: 20px;
  font-weight: bold;
}
.post .body_post .post_content p {
  font-size: 14px;
  font-weight: normal;
}
.container_infos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 25px;
}
.postedBy {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 12px;
}
.postedBy span {
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 1px;
  font-weight: bold;
}
.container_tags {
  display: flex;
  flex-direction: column;
}
.container_tags span {
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 1px;
  font-weight: bold;
}
.container_tags .tags ul {
  margin: 0;
  display: flex;
}
.container_tags .tags ul li {
  font-size: 12px;
  letter-spacing: 2px;
  list-style: none;
  margin-left: 8px;
  text-transform: uppercase;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.container_tags .tags ul li:first-child {
  margin-left: 0px;
}
.container_tags .tags ul li:before {
  content: '';
  text-align: center;
  width: 100%;
  height: 5px;
  background: #FC6042;
  opacity: 0.5;
  position: absolute;
  bottom: 0;
  z-index: -1;
  padding: 0px 1px;
  -webkit-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -moz-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -ms-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  -o-transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
  transition: cubic-bezier(0.68, -0.55, 0.27, 1.55) 320ms;
}
.container .post .body_post .post_content .container_infos .container_tags .tags ul li:hover:before {
  height: 18px;
}


</style>