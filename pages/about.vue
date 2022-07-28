<template>
  <div class="about__wrapper">
    <div class="about__container">
      <div class="about__header-content">
        <h1>{{ aboutData.title }}</h1>
        <div class="header-content" v-html="aboutData.headercontent"></div>
        <img :src="aboutData.headerimage" alt="" />
        <p>
          {{ aboutData.headerimagefooter }}
        </p>
      </div>
      <div class="about__middle-content">
        <p v-html="aboutData.middlecontent"></p>
        <di v class="about__middle-content__images-wrapper">
          <div class="about__middle-content__images-wrappe-inner">
            <div
              v-for="img in aboutData.middleimages"
              :key="img.key"
              class="about__middle-content__image"
            >
              <img :src="img" alt="" />
            </div>
          </div>
        </di>
        <p>{{ aboutData.middleimagesfooter }}</p>
        <p>
          В мае 2015 мы открыли представительство в Москве. Это позволило
          сократить сроки доставки до 1-2 дней. Также мы заинтересованы в
          сотрудничестве с другими городами. У нас всегда в наличии весь
          ассортимент продукции, который мы доставим в ваш город в кратчайшие
          сроки
        </p>
        <div class="about__footer-content">
          <a href="./partnersip">Как стать партнером?</a>
        </div>
        <p>
          Мы занимаемся не только оптовой, но и розничной продажей. Наши дилеры
          — это квалифицированные сотрудники, которые работают уже долгие годы в
          сфере продажи автомобильных чехлов. Они помогут подобрать нужный
          дизайн и цвет накидки для Вашего салона, а также подробно объяснят,
          как установить его на сидение.
        </p>
        <p>
          Мы постоянно совершенствуемся, ведем разработку новых дизайнов и
          делаем упор на качество и практичность нашей продукции.
        </p>
        <p>
          Ассортимент продукции составляет около 60-70 наименований. В наших
          розничных точках и офисах оптовых продаж Вы можете найти продукцию на
          любой вкус. Мы подберем товары для самых щепетильных покупателей,
          которые хотят выделить свое авто среди других.
        </p>
        <div class="about__footer-content">
          <a href="/contacts/mainContacts">Контакты и адреса</a>
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
      aboutData: "",
    };
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/about").then((res) => {
      this.aboutData = res.data;
    });
  },
};
</script>
<style scoped>
.about__header-content img {
  width: 100% !important;
  max-width: 383px !important;
}
.about__middle-content__images-wrappe-inner {
  display: flex;
  justify-content: space-around;
}
.about__middle-content__images-wrapper img {
  width: 100%;
  max-width: 150px;
}
.about__middle-content__images-wrapper {
  justify-content: space-around;
  margin: 50px;
  overflow-x: scroll;
  overflow-y: hidden;
  width: max-content;
  overflow: hidden;
}
.about__middle-content__image {
}
.header-content {
  line-height: 1.5em;
  font-size: 18px;
  width: 75%;
  margin: 2em 0;
}
p {
  margin: 30px;
  font-size: 18px !important;
}
.about__footer-content {
  margin: 18px;
  font-size: 18px;
}
@media (min-width: 1201px) {
  .about__container {
    max-width: 1200px;
  }
}
.about__container {
  width: 100%;
  margin: 0 auto;
}
</style>
