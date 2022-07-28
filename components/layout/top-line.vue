<template>
  <div class="top-line">
    <div class="cantra_content">
      <div class="top-line__items">
        <p>
          Официальный сайт производителя автомобильных накидок премиум класса
        </p>
        <div class="right-side">
          <div>
            <div class="default-lang" @click="langPopup = true">
              <img :src="defaultLang.img" alt="" />
              {{ defaultLang.name }}
            </div>
            <div v-if="langPopup">
              <div
                v-for="lang in langs"
                :key="lang.index"
                @click="(langPopup = false), changeLang(lang)"
                class="lang_wrapper"
              >
                <img :src="lang.img" />
                {{ lang.name }}
              </div>
            </div>
          </div>
          <nuxt-link to="/cart/"
            ><img src="@/assets/img/svg/shoppingcart.svg" class="shopcart"
          /></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langPopup: false,
      defaultLang: {
        img: "../../assets/img/russia.svg",
        name: "Россия",
      },
      langs: [
        {
          name: "Россия",
          img: require("../../assets/img/russia.svg"),
        },
        {
          name: "Молдова",
          img: require("../../assets/img/moldova.svg"),
        },
        {
          name: "Беларусь",
          img: require("../../assets/img/belarus.svg"),
        },
        {
          name: "Казахстан",
          img: require("../../assets/img/kazakhstan.svg"),
        },
        {
          name: "Германия",
          img: require("../../assets/img/germany.svg"),
        },
      ],
    };
  },
  methods: {
    changeLang(lang) {
      this.defaultLang = lang;
    },
  },
  mounted() {
    this.changeLang(this.langs[0]);
  },
};
</script>

<style>
.right-side {
  align-items: center;
  display: flex;
  z-index: 10;

}
.lang_wrapper {
  transition: 0.3s;
  padding: 5px;
  border: 1px solid #c3c3c3;
  background-color: #fff;
  color: black;
  font-size: 14px;
  display: flex;
}
.default-lang {
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  display: flex;
}
.lang_wrapper img,
.default-lang img {
  padding-right: 5px;
  width: 30px;
}
.top-line__items {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.shopcart {
  position: absolute;
  /* right: 0; */
  top: 0;
  max-height: 25px;
  margin: auto;
  height: 100%;
  filter: invert(1);
}
</style>
