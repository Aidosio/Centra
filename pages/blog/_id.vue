<template>
  <div class="blog__wrapper">
    <div class="blog__conatiner">
      <div v-if="blogId" class="blog__item">
        <img :src="blogId.image" alt="" />
        <h2>{{ blogId.title }}</h2>
        <p v-html="blogId.content"></p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      routerId: "",
      blogId: "",
    };
  },
  mounted() {
    axios.get(`https://cantra.a-lux.dev/api/blog/${this.id}`).then((res) => {
      this.blogId = res.data;
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>
<style scoped>
.blog__wrapper {
  height: 140vh;
}
.blog__item {
  width: 100%;
  padding: 10px;
  margin: 0 auto;
  max-width: 750px;
  max-height: 650px;
}
.blog__item img {
  width: 100%;
  max-width: 750px;
}
@media (min-width: 1201px) {
  .blog__conatiner {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .blog__conatiner {
    max-width: 750px;
  }
}
.blog__conatiner {
  width: 100%;
  margin: 0 auto;
}
</style>
