<template>
  <div class="delivery__wrapper">
    <div class="delivery__container">
      <div class="delivery__header">
        <h1 v-html="delivery.title"></h1>
        <div
          class="delivery__headercontent"
          v-html="delivery.headercontent"
        ></div>
      </div>
      <div class="delivery__body">
        <div v-html="delivery.middlecontent"></div>
      </div>
      <div class="delivery__footer">
        <h1 v-html="delivery.footertitle" class="footer"></h1>
        <div class="delivery__footer-images">
          <div v-for="img in delivery.footerimages" :key="img.index">
            <img :src="img" alt="" />
          </div>
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
      delivery: "",
    };
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/delivery").then((res) => {
      this.delivery = res.data;
    });
  },
};
</script>

<style scoped>
.delivery__headercontent {
  margin-bottom: 50px;
}
.column.coll4.delivery-info {
  font-size: 15px;
  font-weight: 700;
}
.delivery__container {
  padding: 10px;
}
.delivery__footer {
  margin: 50px 0;
}
.column .column .delivery-info {
  display: flex;
}
.delivery__footer-images img {
  margin-left: 50px;
  width: auto;
  height: 35px;
  /* margin: 0 auto; */
  align-items: center;
  /* max-width: 25px; */
}
@media (min-width: 1201px) {
  .delivery__container {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .delivery__container {
    max-width: 800px;
  }
  .delivery__footer-images {
    overflow: scroll;
  }
}
.delivery__container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
}
.column.coll4.delivery-info {
  display: flex;
  width: 283px;
  justify-content: space-around;
}
.delivery__footer-images {
  display: flex;
  padding-top: 20px;
}
</style>
