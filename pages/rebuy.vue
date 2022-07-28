<template>
  <div class="rebuy__container">
    <div class="rebuy__wrapper">
      <div v-for="(item, index) in rebuy" :key="index" class="rebuy__item">
        <h2>{{ item.title }}</h2>
        <p v-html="item.subtitle"></p>
        <div class="rebuy__pdf" v-if="item.id === 1">
          <a :href="item.pdf">
            <img src="https://cantra.ru/img/pdf.png" alt="" /><br>
            <span>
              Форма заявления на возврат <br />
              .PDF, 419 Kb</span
            >
          </a>
        </div>
        <div v-if="item.danger !== null">
          <p class="rebuy__item-danger" v-html="item.danger"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      rebuy: "",
    };
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/rebuy").then((res) => {
      this.rebuy = res.data;
    });
  },
};
</script>
<style scoped>
.rebuy__pdf {
  /* text-align: center; */
}
.rebuy__item-danger {
  border: 2px solid #ec2c2c;
  padding: 1em;
  color: #ec2c2c;
  font-size: 1.4em;
  margin-top: 2em;
  text-align: center;
}
a {
  text-decoration-line: none;
  color: black;
}
.rebuy__item {
}
@media (min-width: 1201px) {
  .rebuy__container {
    max-width: 1200px;
  }
}
@media (max-width: 800px) {
  .rebuy__container h1 {
    margin-left: 10px !important;
  }
  .rebuy__container div:nth-child(n + 2) {
    margin-left: 10px !important;
  }
  .rebuy__item {
    display: block;
    margin: 0 auto;
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .rebuy__container {
    max-width: 750px;
  }
}

.rebuy__container {
  grid-column-start: 16vw;
  width: 76%;
  margin: 0 auto;
}
</style>
