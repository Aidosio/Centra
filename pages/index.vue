<template>
  <div class="common-home">
    <div class="first__block" v-if="sliderData.length > 0">
      <div class="cantra_content cantra__content">
        <div class="universal__square">
          <div class="universal__square-title">{{ mainTitle.title }}</div>
          <div class="universal__square-content">{{ mainTitle.content }}</div>
        </div>
        <div class="first__swiper">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-betwee="50"
            :options="miniSwiper"
          >
            <swiper-slide
              style="height: 100%"
              v-for="slide in sliderData"
              :key="slide.id"
              draggable="false"
            >
              <!-- <div  draggable="false" class="adaptive__img"> -->
              <img
                style="width: 100%; height: 100%"
                class="slider__image"
                :src="slide.image"
                draggable="false"
              />
              <!-- </div> -->
            </swiper-slide>
          </swiper>
          <!-- <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            :options="swiperOptions">

            <swiper-slide v-for="(item,index) in gallery" :key="index" class="swiper-slide sliding-swiper">
               <img :src="item" alt=""  class="swiper-img"/>

            </swiper-slide>
          </swiper> -->
        </div>
      </div>
    </div>
    <div class="second_block">
      <div class="cantra__content">
        <Input/>
      </div>
    </div>
    <div class="third_block">
      <div class="cantra_content">
        <h2 class="h2-text">Накидки из алькантары и меха</h2>
        <div class="row mob_products index__products">
          <!-- <div v-for="(el, index) in products" :key="el.index">
      {{index}}
    </div> -->
          <product-card
            v-for="product in products.data"
            :key="product.id"
            :price="product.price"
            :image="product.image"
            :type="product.type"
            :id="product.id"
            :name="product.name"
            :brand="product.brand"
            :color="product.colors.length"
          />
        </div>

        <div class="my_pagination">
          <div v-for="(page,index) in pages" :key="page.index">
            <span @click="pagination(page), activePage = index" :class="{'active_pag' : index === activePage}"
                  class="choosed_pag">{{
                page
              }}</span>
          </div>
          &nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.
        </div>
      </div>
    </div>
    <div class="fourth_and_half_block">
      <div class="cantra_content">
        <a class="cantra_sale_block" href="/sale/">
          <div class="sale_label">АКЦИЯ</div>
          <div>
            <img
              class="PB_options_image double_trouble"
              src="@/assets/img/doubletrouble.jpg"
            />
            <div class="pb_price">
              <div class="two_products">
                <span>Два полных комплекта<br/></span>
                <div>со скидкой 15%</div>
              </div>
              <strike class="sale_price">17960</strike>
              <strong
              ><span class="PB_bundle_total_price">15266 руб. </span></strong
              >
              <div class="two_products_order_btn">Заказать</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="cantra_content five_reasons_heading">
      <h2 class="h2-text">
        Мы делаем качественные, стильные накидки ручной работы
      </h2>
      <h3>5 причин выбрать CANTRA</h3>
    </div>
    <div class="fifth_block fifth_block_home_page">
      <div class="cantra_content">
        <accordion class="onDesktop"/>
        <div class="accordion onMobile">
          <img
            src="@/assets/img/bigchaiirs.png"
            style="max-width: 700px; width: 100%"
          />
          <div class="accordion__content">
            <div class="accordion__header" @click="accordionOpen = 1">
              <img class="accordion__header-plus"/>
              <h3 class="accordion__header-title">Защита от износа</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 1 }">
              <p class="accordion__body-content">
                Накидки защищают салон от потертостей и износа. Накидки можно
                постирать в режиме деликатной стирки. Они не потеряют форму и не
                выцветут даже после 30 000 циклов использования.
              </p>
            </div>
            <div class="accordion__header" @click="accordionOpen = 2">
              <img class="accordion__header-plus"/>
              <h3 class="accordion__header-title">Защита от окрашивания</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 2 }">
              <p class="accordion__body-content">
                Обезопасьте кожу своего авто от окрашивания джинсами и другими
                материалами.
              </p>
            </div>
            <div class="accordion__header" @click="accordionOpen = 3">
              <img class="accordion__header-plus"/>
              <h3 class="accordion__header-title">Лёгкая установка</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 3 }">
              <p class="accordion__body-content">
                <iframe
                  style="width: 100%; height: 100%"
                  class="iframe"
                  src="https://www.youtube.com/embed/6uWLxa7ihnE"
                >
                </iframe>
              </p>
            </div>
            <div class="accordion__header" @click="accordionOpen = 4">
              <img class="accordion__header-plus"/>
              <h3 class="accordion__header-title">Ручная работа</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 4 }">
              <p class="accordion__body-content">
                CANTRA — автомобильные накидки ручной работы. Форма накидок
                вырезается вручную, каждый ромбик, кант и детали крепления — все
                прошивается швеями на профессиональном оборудовании. Ручное
                изготовление легко отличить хотя бы присмотревшись к ромбам:
                если их строчит швея, они идут ровные и четко смыкаются друг с
                другом в одной точке. Швеи прошивают все слои накидки насквозь,
                поэтому даже при постоянном использовании форма накидок CANTRA
                не изменится.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="fourth_block" class="fourth_block">
      <div class="cantra_content">
        <h2 class="h2-text">
          Создайте индивидуальный дизайн для себя или в подарок близким
        </h2>
        <div class="mobile">
          <div class="personal__items-right onMobile" v-if="personal">
            <img
              class="layer1"
              :src="
                'https://cantra.a-lux.dev/storage/' +
                personal.type[priceActive].image
              "
            />
            <img
              class="layer2"
              :src="
                'https://cantra.a-lux.dev/storage/' +
                personal.suede[suedeActive].image
              "
            />
            <img
              class="layer3"
              :src="
                'https://cantra.a-lux.dev/storage/' +
                personal.string[stringActive].image
              "
            />
            <img
              class="layer4"
              :src="
                'https://cantra.a-lux.dev/storage/' +
                personal.edging[edgingActive].image
              "
            />
          </div>
        </div>
        <form class="personal" @submit.prevent="personalOrderSend()">
          <div class="personal__size">
            <div
              class="personal__size-checkbox"
              v-for="(type, index) in personal.type"
              :key="type.id"
            >
              <input
                type="radio"
                :id="'checkbox' + type.id"
                v-model="priceActive"
                @change="wholePrice = personal.type[priceActive].price"
                :value="index"
              />
              <label :for="'checkbox' + type.id">{{ type.title }}</label>
            </div>
          </div>
          <div class="personal__items">
            <div class="personal__items-left">
              <div class="personal__colors">
                <select v-model="suedeActive" class="material_type">
                  <option value="0">Цвет замши</option>
                  <option
                    v-for="(type, index) in personal.suede"
                    :value="index"
                    :key="type.id"
                  >
                    {{ type.name }}
                  </option>
                </select>
                <select v-model="stringActive" class="material_type">
                  <option value="0">Цвет строчки</option>
                  <option
                    v-for="(type, index) in personal.string"
                    :value="index"
                    :key="type.id"
                  >
                    {{ type.name }}
                  </option>
                </select>
                <select class="material_type" v-model="edgingActive">
                  <option value="0">Цвет окантовки</option>
                  <option
                    v-for="(type, index) in personal.edging"
                    :value="index"
                    :key="type.id"
                  >
                    {{ type.color }}
                  </option>
                </select>
              </div>
              <div class="personal__logo">
                <div class="personal__logo-checkbox">
                  <input
                    type="radio"
                    value="1"
                    v-model="customActive"
                    id="withoutLogo"
                  />
                  <label for="withoutLogo">Без логотипа</label>
                </div>
                <div class="personal__logo-withFile">
                  <div class="personal__logo-checkbox">
                    <input
                      type="radio"
                      value="0"
                      v-model="customActive"
                      id="withLogo"
                    />
                    <label for="withLogo">С логотипом</label>
                  </div>
                  <input v-if="customActive" type="file" class="file"/>
                </div>
              </div>
              <div class="personal__inputs">
                <input
                  v-model="name"
                  class="personal__inputs-small"
                  placeholder="Ваше имя"
                />
                <the-mask
                  v-model="phone"
                  :mask="['+7 (###) ###-##-##']"
                  :masked="false"
                  class="personal__inputs-small"
                  placeholder="Ваш номер"
                />
                <input
                  class="personal__inputs-big"
                  v-model="message"
                  placeholder="Ваш комментарий..."
                />
              </div>
              <p class="personal__ps">
                *Индивидуальный заказ выполняется по 50% предоплате.<br/>
                Сроки изготовления - 1.5-2 недели.<br/>
                Точную сумму и детали оплаты Вам сообщит оператор.
              </p>
              <div class="personal__submit">
                <input
                  type="submit"
                  class="personal__submit-button"
                  value="Отправить заказ"
                />
                <div class="input policy_customorder">
                  <input
                    type="checkbox"
                    id="policy_customorder"
                    name="policy_customorder"
                    checked=""
                  />
                  <label class="tick_label_customorder" for="policy_customorder"
                  >
                    <div class="tick_customorder"></div
                    >
                  </label>
                  <span class="policy_text_customorder"
                  >Я согласен(-а) с
                    <a href="/policy" target="_blank"
                    >политикой обработки персональных данных</a
                    ></span
                  >
                </div>
              </div>
              <h2 class="personal__price" v-if="personal">
                От {{ wholePrice }} рублей
              </h2>
              <!-- <h2 class="personal__price" v-else>Выберите тип накидок</h2>  -->
            </div>
            <div class="personal__items-right onDesktop" v-if="personal">
              <img class="layer1" :src="personal.type[priceActive].image"/>
              <img class="layer2" :src="personal.suede[suedeActive].image"/>
              <img class="layer3" :src="personal.string[stringActive].image"/>
              <img class="layer4" :src="personal.edging[edgingActive].image"/>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="sixth_block delay_galleria" v-if="gallery.length > 1">
      <div class="cantra_content">
        <h2 class="h2-text">Фотогалерея</h2>
        <div id="galleria">
          <swiper
            class="swiper"
            :slides-per-view="1"
            :space-between="50"
            :options="swiperOptions"
          >
            <swiper-slide
              v-for="(item, index) in gallery"
              :key="index"
              class="swiper-slide sliding-swiper"
            >
              <img :src="item" alt="" class="swiper-img"/>
            </swiper-slide>
          </swiper>

          <div class="gallery-pagination"></div>
        </div>
      </div>
    </div>
    <div class="seventh_block">
      <div class="cantra_content">
        <div class="ninth_block_content">
          <div class="top_product_info">
            <div class="h2-text">Отзывы клиентов</div>

            <h3>
              Мы любим и уважаем наших клиентов. Каждый ваш отзыв очень важен
              для нас!<br/>
              Вы помогаете нам понять, что мы не зря делаем свое дело!
            </h3>
          </div>
          <Reviews/>
        </div>
      </div>
    </div>
    <div class="eight_block">
      <div class="cantra_content">
        <div class="ask_danger_success" v-if="success">
          <div class="text_success_green">Спасибо, ваша заявка принята</div>
          <div class="text_success_recall">
            В ближайшее время с вами свяжется менеджер и уточнит детали заказа.
          </div>
          <div class="button_ok">OK</div>
        </div>
        <aside id="column-right" class="col-sm-3 hidden-xs">
          <div class="wide-form ask_again" v-if="!success">
            <Input/>
            <div class="clear"></div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Input from "~/components/input.vue";
import ProductCard from "~/components/product-card.vue";
import axios from "axios";
import Reviews from "~/components/layout/reviews.vue";
import accordion from "~/components/accordionhorizontal.vue";
import {TheMask} from "vue-the-mask";
import Swiper from "swiper";

export default Vue.extend({
  components: {
    Input,
    accordion,
    ProductCard,
    Reviews,
    TheMask,
  },
  layout: "default",
  data() {
    return {
      activePage: 0,
      pages: "",
      currentPage: 1,
      customActive: 0,
      phone: "",
      name: "",
      product: "",
      mainTitle: "",
      products: "",
      wholePrice: 0,
      accordionOpen: 0,
      gallery: [],
      edgingActive: 0,
      colors: "",
      message: "",
      stringActive: 0,
      suedeActive: 0,
      personal: "",
      priceActive: 0,
      success: false,
      src: "@/assets/img/bigchaiirs.png",
      sliderData: "",
      //  swiperOptions: {
      //     initialSlide: 2,
      //     slidesPerView: 1,
      //     // centeredSlides: true,
      //     spaceBetween: 10,

      //   },
    };
  },
  computed: {
    swiperOptions() {
      return {
        initialSlide: 2,
        slidesPerView: 1,
        // centeredSlides: true,
        spaceBetween: 10,
      };
    },
    miniSwiper() {
      return {
        slidesPerView: 1,
        spaceBetween: 10,
      };
    },
  },

  watch: {
    customActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice =
          Number(this.personal.type[this.priceActive].price) + 2000;
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price;
      }
    },
    priceActive() {
      if (Number(this.customActive) === 1) {
        this.wholePrice =
          Number(this.personal.type[this.priceActive].price) + 2000;
      } else {
        this.wholePrice = this.personal.type[this.priceActive].price;
      }
    },
  },

  mounted() {
    axios
      .post(`https://cantra.a-lux.dev/api/items?page=${1}`, {
        id: "",
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        this.currentPage = res.data.current_page;
        this.pages = res.data.last_page;
        this.products = res.data;
      });
    axios.get("https://cantra.a-lux.dev/api/index").then((res) => {
      this.product = res.data;
      this.mainTitle = res.data.main_title;
      this.personal = res.data.create;
      this.gallery = res.data.gallery[0].image;
      this.sliderData = res.data.slider;
    });
  },
  methods: {
    pagination(page) {

      this.currentPage = page;
      axios
        .post(`https://cantra.a-lux.dev/api/items?page=${this.currentPage}`, {
          id: "",
          order: "",
          type: "",
          season: "",
        })
        .then((res) => {
          this.currentPage = res.data.current_page;
          this.pages = res.data.last_page;
          this.products = res.data;
        });
    },
    sentData() {
      this.$axios.post("https://cantra.a-lux.dev/api/application", {
        name: this.name,
        phone: this.phone,
      });
      this.success = true;
    },
    personalOrderSend() {
      axios
        .post("https://cantra.a-lux.dev/api/inapplication", {
          type: this.personal.type[this.priceActive].id,
          suede: this.personal.suede[this.suedeActive].id,
          string: this.personal.string[this.stringActive].id,
          edging: this.personal.edging[this.edgingActive].id,
          image: 0,
          name: this.name,
          number: this.phone,
          comment: this.message,
          price: this.customActive,
        })
        .then(window.location.reload());
    },
  },
});
</script>
<style lang="scss">
.active_pag {
  color: red !important;
}

.my_pagination {
  display: flex;
  justify-content: center;
}

span.choosed_pag {
  cursor: pointer;
}

.common-home {
  overflow: hidden;
}

.cantra_content {
  max-width: 1200px;
}

.swiper-slide {
  text-align: center;
}

.form-control {
  font-size: 12px !important;
}

.accordion {
  &__content {
    width: 90%;
    margin: auto;
  }

  &__header {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  &__body {
    max-height: 0px;
    transition: 0.5s ease-in all;
    overflow: hidden;

    &-content {
      font-size: 15px;
      // width: 80%;
      // margin: auto;
    }
  }
}

.open {
  // display: flex;
  max-height: 500px;
  height: 100%;
  transition: 0.5s ease-in all;
}

.material_type {
  max-width: 196px;
  width: 100%;
  margin-bottom: 20px;
  height: 39px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: #000000;
  opacity: 0.5;
  display: block;
  padding-left: 15px;
}

.personal {
  width: 100%;

  &__items {
    display: flex;
    justify-content: space-between;

    &-right {
      position: relative;

      img {
        position: absolute;
        width: 500px;
        height: 400px;
        right: 0;
      }
    }
  }

  &__submit {
    display: flex;
    max-width: 450px;
    justify-content: space-between;

    &-button {
      width: 226px;
      height: 39px;
      border-radius: 0;
      background: #db2c29;
      font-weight: normal;
      line-height: 24px;
      font-size: 16px;
      color: white;
      text-shadow: none;
    }

    &-checkbox {
      display: flex;
      margin: auto;
      align-items: center;
    }
  }

  &__ps {
    font-style: normal;
    font-weight: normal;
    line-height: 20px;
    font-size: 14px;
    color: #db2c29;
    display: inline-block;
    vertical-align: top;
    text-align: justify;
    margin-bottom: 5px;
  }

  &__inputs {
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;

    &-small {
      width: 196px;
      // width: 100%;
      height: 39px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-sizing: border-box;
      font-weight: normal;
      line-height: 27px;
      font-size: 16px;
      color: #000000;
      opacity: 0.9;
      display: block;
      margin-bottom: 20px;
      padding-left: 15px;
    }

    &-big {
      width: 447px;
      // width: 100%;
      height: 115px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      border-radius: 0;
      border: none;
      line-height: 27px;
      padding-left: 15px;
      font-size: 16px;
      color: #000000;
      background-color: #ffffff;
      display: inline-block;
      float: left;
      margin-bottom: 15px;
    }
  }

  &__size,
  &__logo {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 20px;

    &-withFile {
      height: 100%;
      display: flex;
      flex-flow: column;

      input {
        margin-top: 20px;
      }
    }

    &-checkbox {
      margin-right: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;

      input {
        width: 26px;
        height: 26px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;
        position: relative;
        margin: auto !important;
        margin-right: 5px !important;
      }

      label {
        margin: auto;
        font-size: 16px;
        line-height: 27px;
        color: #000000;
        width: 100%;
        height: 22px;
        border: none;
        margin: 0;
        background: transparent;
      }
    }
  }

  &__colors {
    display: flex;
    max-width: 450px;
    justify-content: space-between;
    flex-flow: wrap;
  }
}

.index__products {
  display: flex !important;
  flex-flow: wrap !important;
}

::v-deep .agile__list {
  border-radius: 8px;
}

.first__block {
  margin-top: 20px;
}

.cantra__content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
}

.universal__square {
  width: 400px;
  height: 320px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  vertical-align: top;
}

.universal__square-title {
  line-height: 27px;
  max-width: 300px;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  /* margin-top: 105px; */
}

.universal__square-content {
  line-height: 20px;
  max-width: 300px;
  font-size: 15px;
  text-align: center;
  color: #000000;
  margin-top: 10px;
}

.first__swiper {
  max-width: 750px;
  // width: 100%;
}

.slider__wrapper {
  position: relative;
  margin-bottom: 24px;
  display: flex;
}

.sliding {
  width: 100%;
}

.slider__image {
}

.hooper ul {
  display: flex !important;
  overflow: hidden;
}

.fsbanner {
  display: flex;
  width: 90%;
  margin: auto;
  background: url("@/assets/img/bigchaiirs.png");
  height: 100%;
}

.slide_card {
  width: 100%;
}

.galleria_container {
  width: 90%;
  margin: auto;
  max-height: 600px;
}

.galleria-image {
  max-width: 1000px;
  margin: auto;
}

.galleria-images img {
  height: 100%;
  width: 100%;
}

.sliding-swiper {
  margin: auto;
}

.swiper-img {
  /* max-height: 698px; */
  height: 100%;
  max-width: 539px;
  width: 100%;
}

.form-control {
  background-color: transparent;
  max-width: 264px;
  width: 100%;
  height: 39px;
  font-size: 16px;
  line-height: 27px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: none;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-radius: 0;
}

.swiper-pagination-bullet-active {
  color: #fff;
  opacity: 0.75 !important;
  background: black !important;
}

.swiper-pagination-bullet {
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  transform: scale(1) !important;
  opacity: 1;
  margin: 0 5px;
  background: rgba(0, 0, 0, 0.2);
  width: 20px !important;
  height: 20px !important;
}

.onDesktop {
  display: flex;
}

.onMobile {
  display: none !important;
}

.gallery-pagination {
  position: unset !important;
  margin-bottom: 3%;
  margin: auto;
  width: 100%;
}

.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {
  display: none !important;
}

.swiper-pagination-bullet-active-main,
.swiper-pagination-bullet-active-prev,
.swiper-pagination-bullet-active-next {
  display: none !important;
  transform: scale(1) !important;
}

@media (max-width: 1100px) {
  .swiper-container {
    height: 100%;
    width: 49% !important;
    display: flex;
  }
}

.top-line__items {
  max-width: 96vw !important;
}

.swiper-container {
  height: 100%;
}

.swiper-wrapper {
  height: 100%;
}

@media (max-width: 1100px) {
  .cantra__content {
    width: 700px;
  }
  .universal__square {
    max-width: 250px;
    max-height: 200px;
  }
  .adaptive__img {
    max-height: 200px;

    img {
      height: 100%;
    }
  }
  .fourth_block {
    height: auto;
  }

  .personal__items {
    flex-flow: column;

    &-left {
      margin: auto;
    }

    &-right {
      height: 400px;

      img {
        right: 50%;
        transform: translateX(50%);
      }
    }
  }
  .ninth_block_content {
    width: 90%;
    margin: auto;
  }
  .second_block .h2-text {
    margin-left: 20px;
  }
  .swiper-container {
    height: 100%;
    width: 90%;
    display: flex;
  }
  .galleria {
    width: 90%;
  }
  .onDesktop {
    display: none !important;
  }
  .onMobile {
    display: unset;
  }
  .accordion__content {
    padding: 20px 0;
  }
  .personal__items-left {
    width: 100%;
  }
  .personal__logo {
    width: 100%;
  }
  .personal__size-checkbox,
  .personal__logo-checkbox {
    flex-flow: column;
    align-items: center;
    height: 100%;
    width: 49%;
    margin: 0;
    text-align: center;

    input {
      margin: 0 !important;
    }

    label {
      max-width: unset;
      height: 100%;
    }
  }
  .personal__logo-withFile {
    width: 50%;
  }
  .personal__logo-withFile .personal__logo-checkbox {
    width: 100%;
  }
  .material_type {
    max-width: unset;
  }
  .personal__inputs-small {
    max-width: 130px;
  }
  .personal__submit {
    flex-flow: column;

    input {
      margin: auto;
    }
  }
  .personal__price {
    text-align: center;
  }
  .personal__items-right {
    height: 500px;
    // display: inline-block;
  }
  // .first__block{
  //   max-height: unset;
  // }
  // .first__block .cantra__content{
  //   flex-flow: column;
  //   align-items: center;
  // }
  // .universal__square{
  //   max-width: 700px;
  //   width: 100%;
  //   margin-bottom: 20px;
  // }
}

@media (max-width: 700px) {
  .swiper-slide.swiper-slide-active {
    height: 100%;
    width: 299px;
    margin-right: 10px;
  }
  .first__block .cantra__content {
    flex-flow: column;
    margin: auto;
    max-width: 300px;
    align-items: center;
  }

  .first__swiper {
    // max-width: 200px;
    // display: none;
  }
  .adaptive__img {
    img {
      height: 100%;
      width: 65%;
    }

    max-height: 100px;
  }
  .universal__square {
    width: 100%;
    margin: auto;
    max-width: unset;
  }
  .mobile .personal__items-right {
    display: flex !important;
  }
  .personal__items-right {
    height: 350px;

    img {
      max-width: 300px;
      max-height: 300px;
    }
  }
  .insta_slider_block div img {
    width: 100%;
    height: 100%;
  }
}
</style>
