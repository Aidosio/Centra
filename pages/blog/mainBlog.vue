<template>
  <div class="blog__wrapper">
    <div class="blog__conatiner">
      <h1>Блог</h1>
      <div v-for="(item, index) in blog" :key="index" class="blog__item">
        <nuxt-link :to="'/blog/' + item.id">
          <img :src="item.image" alt="" />
          <h2>{{ item.title }}</h2>
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      blog: "",
    };
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/blog").then((res) => {
      this.blog = res.data;
    });
  },
};
</script>
<style scoped>
.blog__conatiner h1 {
  margin-left: 150px;
}
a {
  text-decoration-line: none;
  color: black;
}
h2 {
  transition: 0.3s;
}
h2:hover {
  transition: 0.3s;
  color: red;
}
.blog__item {
  width: 40%;
  max-width: 350px;
  margin-bottom: 5vh;
  /* margin: 0 auto; */
  vertical-align: top;
  display: inline-block;
  max-height: 650px;
}
.blog__item img {
  width: 100%;
  max-width: 350px;
}
@media (min-width: 1201px) {
  .blog__conatiner {
    max-width: 1200px;
  }
}
@media (max-width: 800px) {
  .blog__conatiner h1 {
    margin-left: 10px !important;
  }
  .blog__conatiner div:nth-child(n + 2) {
    margin-left: 10px !important;
  }
  .blog__item {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .blog__conatiner {
    max-width: 750px;
  }
}

.blog__conatiner {
  /* grid-template-columns: repeat(2, 30vw); */
  /* grid-template-rows: 52vh; */
  grid-column-start: 16vw;
  /* display: grid; */
  /* text-align: center; */
  /* justify-content: center; */
  width: 76%;
  /* align-items: center; */
  margin: 0 auto;
}
.blog__conatiner div:nth-child(n + 2) {
  margin-left: 150px;
}
</style>
