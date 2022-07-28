<template>
  <div itemscope="" class="content catalog-item product_content">
    <div class="first__block">
      <div class="images">
        <div class="images-choose">
          <!-- <img v-for="(img,index) in images[i].images" :key="index" :src="img">  -->
          <img
            v-for="(img, index) in images"
            :key="index"
            @click="changePic(index)"
            :src="img"
          />
        </div>
        <div class="image-zoom" v-if="zitems.length > 0">
          <vue-photo-zoom-pro
            :highUrl="zitems[this.i].src"
            class="image-zoom-img"
          >
            <vue-picture-swipe :items="zitems"></vue-picture-swipe>
          </vue-photo-zoom-pro>
        </div>
      </div>
      <div class="description">
        <div class="item-card">
          <div class="description-text">
            <div
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                margin: auto;
              "
            >
              <div style="font-size: 17px" v-html="product.name"></div>
            </div>
            <p>{{ product.title }}</p>
          </div>

          <h1 class="color-title">{{ currentColorName }}</h1>
          <div class="description-color">
            <div class="description-colors">
              <img
                class="description-colors-logo"
                v-for="color in colors"
                @click="setColor(color.id, color.name, color)"
                :key="color.id"
                :title="color.name"
                :src="color.logo"
              />
            </div>
            <div class="text-danger" v-if="isError">Выберите цвет накидок</div>
          </div>

          <div class="description-button">
            <div class="description-button__price">
              <h1 v-if="wholeColor && wholeColor.type != 2" class="price">
                {{ product.price }} руб.
              </h1>
              <!-- <h1 v-else>{{product.price>}}</h1> -->

              <h1 class="price" v-else>{{(wholeColor.price) }} руб.</h1>
            </div>
            <div>
              <button
                type="button"
                id="button-cart"
                v-if="currentColor"
                @click="addToCart"
                class="description-button_add"
                style="position: relative"
              >
                Добавить в корзину >
                <span
                  class="succes_order succes_order_product"
                  v-if="dataSent"
                  style="display: block"
                  ><i class="fa fa-check" aria-hidden="true"></i>Товар
                  добавлен</span
                >
              </button>
              <button
                type="button"
                id="button-cart"
                v-if="!currentColor"
                @click="addToCartFail"
                class="description-button_add"
              >
                Добавить в корзину >
              </button>
              <div v-if="dataSent" class="alert alert-success success_design">
                <button
                  @click="dataSent = !dataSent"
                  type="button"
                  class="close"
                  data-dismiss="alert"
                >
                  Продолжить покупки
                </button>
                <nuxt-link to="/cart/">>Оформить заказ </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mode mode_mob_hide">
      <div class="char__tab">
        <div class="char__tab-content">
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 1"
            :class="{ underlined: selectedContent === 1 }"
          >
            Описание товара
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 2"
            :class="{ underlined: selectedContent === 2 }"
          >
            Доставка
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 3"
            :class="{ underlined: selectedContent === 3 }"
          >
            Подробнее о товаре
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 4"
            :class="{ underlined: selectedContent === 4 }"
          >
            О бренде
          </p>
          <p
            class="char__tab-h1-text"
            @click="selectedContent = 5"
            :class="{ underlined: selectedContent === 5 }"
          >
            Отзывы
          </p>
        </div>
      </div>
      <div class="char__content">
        <div class="content__info" v-if="selectedContent === 1">
          <div class="content__info-content" v-html="product.leftcolumn"></div>
          <img :src="product.middleimage" />
          <div class="content__info-content" v-html="product.rightcolumn"></div>
        </div>
        <div
          class="content__info"
          style="justify-content: space-between"
          v-if="selectedContent === 2"
        >
          <div class="content__info-block">
            <div class="content__info-content">
              <h3>Доставка Москва:</h3>
              <p>
                По Москве мы осуществляем доставку в течении 1-2 дней после
                оформления заказа. Наш специалист может БЕСПЛАТНО установить
                накидки на Ваш автомобиль в момент доставки. Стоимость доставки
                в пределах МКАД: 290 руб. Стоимость доставки за пределами МКАД:
                390 руб. до 10км.
              </p>
              <h3>Доставка по всей России:</h3>
              <p>
                Доставка заказов осуществляется курьерской службой CDEK и Почтой
                России. Сроки доставки: CDEK: 3-7 дней* Почта: 3-14 дней*
              </p>
              <h3>Доставка по миру:</h3>
              <p>
                В другие страны мы осуществляем доставку курьерской компанией
                EMS. Заказы оформляются по полной предоплате, если на сайте по
                какой-то причине у вас не получается оплатить заказ, оператор
                посоветует вам другие варианты оплаты при оформлении заказа.
                Срок доставки зависит от вашей страны.
                <br />
                *Предоставленные временные рамки являются приблизительными.
                Точные сроки доставки, а так же стоимость, Вам озвучит наш
                оператор, при подтверждении заказа.
              </p>
            </div>
          </div>
          <div class="content__info-block">
            <div class="content__info-content">
              <h3>Оплата:</h3>
              <p>
                Вы можете оплатить посылку в момент ее получения. Такой вид
                оплаты возможен при выборе доставки курьерской службой CDEK, а
                также Почтой России - курьером. На нашем сайте Вы можете
                оплатить покупку: VISA, MasterCard, PayPal.
              </p>
            </div>
          </div>
        </div>
        <div class="content__info" v-if="selectedContent === 3">
          <div class="content__info-bigcontent" v-html="product.more"></div>
        </div>
        <div class="content__info" v-if="selectedContent === 4">
          <div class="content__info-content">
            <h3>О бренде:</h3>
            <p>
              CANTRA - продукт ручной работы, выполненный на высококлассном
              современном оборудовании. Ни одна деталь накидок не сделана на
              скорую руку и не появилась просто так. CANTRA - это качество,
              разработанное в результате непрерывного процесса улучшения и
              доработок. 37 швей в команде с лучшим технологом ежедневно
              работают над стилем и комфортом Вашего автомобиля.
            </p>
          </div>
        </div>
        <div class="content__review" v-if="selectedContent === 5">
          <h3 class="content__info-title">Оставьте ваш отзыв</h3>
          <form class="review_form" @submit.prevent="sendReview">
            <div class="smallboxes">
              <input type="text" v-model="name" placeholder="Ваше имя" />
              <input type="text" v-model="city" placeholder="Город" />
              <input
                type="text"
                v-model="carType"
                required
                placeholder="Автомобиль*"
              />
              <input type="text" v-model="carColor" placeholder="Цвет" />
            </div>
            <input
              type="text"
              class="big-input"
              v-model="message"
              required
              placeholder="Ваш отзыв*"
            />
            <div class="boxes">
              <div class="drop_block" v-if="!dragActive">
                <div class="explanation_text">
                  <span>Перетащите фото сюда</span><br />
                  или <span>выберите из библиотеки</span><br />
                  <span class="file_name"></span>
                </div>
                <input
                  id="drop_field"
                  type="file"
                  @change="uploadFiles"
                  name="file"
                  multiple
                  accept="image/x-png,image/gif,image/jpg,image/png,image/jpeg"
                />
              </div>
              <input
                type="submit"
                class="btn btn-primary submit submit_red_awards"
                value="Отправить"
              />
            </div>
          </form>
          <div class="review_move">
            <div
              class="review_block"
              v-for="review in reviews"
              :key="review.id"
            >
              <div class="review_cred">
                <div><img src="@/assets/img/png/user_photo.png" /></div>
                <div>{{ review.name }}</div>
              </div>
              <div class="review_data">
                <div><span>г.</span>&nbsp;{{ review.city }}</div>
                <div><span>автомобиль:</span>&nbsp;{{ review.auto }}</div>
                <div><span>цвет:</span>&nbsp;{{ review.color }}</div>
              </div>
              <div class="review_post">
                {{ review.message }}
                <div class="review_imgs">
                  <a href="" data-fancybox="review_images">
                    <img :src="review.images" width="50px" height="50px" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fifth_block fifth_block_home_page onMobile">
      <div class="cantra_content">
        <div class="accordion onMobile">
          <div class="accordion__content">
            <div class="accordion__header" @click="accordionOpen = 1">
              <img class="accordion__header-plus" />
              <h3 class="accordion__header-title">Описание товара</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 1 }">
              <p
                class="accordion__body-content"
                v-html="product.leftcolumn"
              ></p>
              <img
                class="accordion__body-content-img"
                :src="product.middleimage"
                alt=""
              />
              <p
                class="accordion__body-content"
                v-html="product.rightcolumn"
              ></p>
            </div>
            <div class="accordion__header" @click="accordionOpen = 2">
              <img class="accordion__header-plus" />
              <h3 class="accordion__header-title">Доставка</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 2 }">
              <div class="accordion__body-content">
                <h3>Доставка Москва:</h3>
                <p>
                  По Москве мы осуществляем доставку в течении 1-2 дней после
                  оформления заказа. Наш специалист может БЕСПЛАТНО установить
                  накидки на Ваш автомобиль в момент доставки. Стоимость
                  доставки в пределах МКАД: 290 руб. Стоимость доставки за
                  пределами МКАД: 390 руб. до 10км.
                </p>
                <h3>Доставка по всей России:</h3>
                <p>
                  Доставка заказов осуществляется курьерской службой CDEK и
                  Почтой России. Сроки доставки: CDEK: 3-7 дней* Почта: 3-14
                  дней*
                </p>
                <h3>Доставка по миру:</h3>
                <p>
                  В другие страны мы осуществляем доставку курьерской компанией
                  EMS. Заказы оформляются по полной предоплате, если на сайте по
                  какой-то причине у вас не получается оплатить заказ, оператор
                  посоветует вам другие варианты оплаты при оформлении заказа.
                  Срок доставки зависит от вашей страны.
                  <br />
                  *Предоставленные временные рамки являются приблизительными.
                  Точные сроки доставки, а так же стоимость, Вам озвучит наш
                  оператор, при подтверждении заказа.
                </p>
              </div>
            </div>
            <div class="accordion__header" @click="accordionOpen = 3">
              <img class="accordion__header-plus" />
              <h3 class="accordion__header-title">Подробнее о товаре</h3>
            </div>
            <div class="accordion__body" :class="{ open: accordionOpen === 3 }">
              <p class="accordion__body-content" v-html="product.more"></p>
            </div>
          </div>
        </div>
      </div>
      <div class="hide_all_reviews">
        <div class="mobile_review" :class="{ inactive: closedReviews }">
          <div class="mobile_review_head">Отзывы</div>
          <div
            class="review_tab_mobile"
            v-for="review in reviews"
            :key="review.id"
          >
            <div class="review_block">
              <div class="review_cred">
                <div><img /></div>
                <div>{{ review.name }}</div>
              </div>
              <div class="review_data">
                <div><span>г.</span>{{ review.city }}</div>
                <div><span>автомобиль:</span>{{ review.auto }}</div>
                <div><span>цвет:</span>{{ review.color }}</div>
              </div>
              <div class="review_post">
                {{ review.message }}
                <div class="review_imgs">
                  <img :src="review.image" />
                </div>
              </div>
            </div>
          </div>
          <div class="insta_feedback_toggle" v-if="closedReviews"></div>
        </div>
        <a @click="closedReviews = !closedReviews" class="insta_toggle-btn"
          >Раскрыть</a
        >
        <h2>Оставьте ваш отзыв</h2>
        <form
          class="form-horizontal"
          id="form-awards"
          @submit.prevent="sendReview"
        >
          <fieldset class="formRow">
            <div class="awards_block_form">
              <div class="formRow--item">
                <label class="formRow--input-wrapper js-inputWrapper">
                  <input
                    type="text"
                    v-model="name"
                    name="awards_name"
                    class="formRow--input js-input"
                    id="awards_name"
                    placeholder=""
                  /><span class="placeholder">Ваше имя</span>
                </label>
              </div>
              <div class="formRow--item">
                <label class="formRow--input-wrapper js-inputWrapper">
                  <input
                    type="text"
                    v-model="city"
                    name="awards_city"
                    class="formRow--input js-input"
                    id="awards_city"
                    placeholder=""
                  /><span class="placeholder">Город</span>
                </label>
              </div>
              <div class="formRow--item">
                <label class="formRow--input-wrapper js-inputWrapper">
                  <input
                    type="text"
                    v-model="carType"
                    name="awards_car"
                    class="formRow--input js-input"
                    id="awards_car"
                    placeholder=""
                  /><span class="placeholder">Автомобиль*</span>
                </label>
              </div>
              <div class="formRow--item">
                <label class="formRow--input-wrapper js-inputWrapper">
                  <input
                    type="text"
                    v-model="carColor"
                    name="awards_color"
                    class="formRow--input js-input"
                    id="awards_color"
                    placeholder=""
                  /><span class="placeholder">Цвет</span>
                </label>
              </div>
              <div class="formRow--item">
                <label class="formRow--input-wrapper js-inputWrapper">
                  <textarea
                    name="awards_feedback"
                    v-model="message"
                    class="formRow--input js-input"
                    id="awards_feedback"
                    placeholder=""
                  ></textarea
                  ><span class="placeholder">Ваш отзыв*</span>
                </label>
              </div>
              <input type="hidden" name="file" id="file" multiple="multiple" />
              <input
                type="hidden"
                name="url_path"
                value="/allgoods/cantra-standart"
              />

              <div class="buttons awards_button" style="width: auto">
                <input
                  type="submit"
                  style="position: static"
                  class="btn btn-primary submit submit_red_awards"
                  value="Отправить"
                />
              </div>
            </div>
          </fieldset>
        </form>
        <!-- <form enctype="multipart/form-data" id="form-upload">
        <div class="drop_block">
            <div class="explanation_text">
                <span>Перетащите фото сюда</span><br> или <span>выберите из библиотеки</span><br>
                <span class="file_name"></span>
            </div>
        <input id="drop_field" type="file" name="file" multiple="multiple" accept="image/x-png,image/gif,image/jpeg">
        </div>
    </form> -->
      </div>
    </div>
    <form
      class="product__recomendations"
      @submit.prevent="addToCartRecommendated()"
    >
      <p class="product__recomendations-title">Рекомендации для вас</p>
      <div class="product__recomendations-products">
        <div
          class="recomendation-card"
          v-for="(recommendation, index) in recommendations"
          :key="index"
        >
          <img class="recomendation-card__img" :src="recommendation.image" />
          <p class="recomendation-card__price">{{ recommendation.price }}</p>
          <div
            class="recomendation-card__title"
            style="display: flex; align-items: center; margin: 0"
          >
            <div v-html="recommendation.brand" style="margin: 0"></div>
            /{{ recommendation.name }}
          </div>
          <input
            type="checkbox"
            v-model="checkedRecommendations[index].active"
            class="recomendation-card__checkbox"
            @change="recommendationActive(recommendation, index)"
          />
        </div>
        <div class="product__recommendations-info">
          <div class="product__recommendations-info__title">
            <p>{{ fullrecomendationPrice }} р</p>
          </div>
          <input
            type="submit"
            value="  Добавить в корзину  "
            class="product__recommendations-info__button"
          />
        </div>
      </div>
      <div
        class="modal"
        v-if="activeRecommendation != null"
        @click.self="
          checkedRecommendations[
            checkedRecommendations.indexOf(
              checkedRecommendations.find((obj) => {
                return obj.id === activeRecommendation.id;
              })
            )
          ].active = false;
          activeRecommendation = null;
        "
      >
        <form
          class="recommendation__choose"
          @submit.prevent="submitRecommendation()"
        >
          <div class="recommendation__choose-colors">
            <h2 class="recommendation__choose-colors-title">Выберите цвет*</h2>
            <div class="recommendation__choose-colors-images">
              <img
                class="recommendation__choose-colors-color"
                v-for="(color, index) in activeRecommendation.colors"
                @click="recommendatedColor(color, index)"
                :key="index"
                :src="color.logo"
              />
            </div>
          </div>
          <div class="recommendation__choose-button">
            <input type="submit" value="   Выбрать опцию >   " />
          </div>
        </form>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import VuePhotoZoomPro from "vue-photo-zoom-pro";
import "vue-photo-zoom-pro/dist/style/vue-photo-zoom-pro.css";
export default Vue.extend({
  layout: "default",
  mounted() {
    let url = window.location.pathname.split("/").pop();
    let url2 = "https://cantra.a-lux.dev/api/recommendation/" + url;
    this.$axios.get(url2).then((res) => {
      alert("asdas");
      this.recommendations = res.data;
      this.recommendations.forEach((element, index) => {
        this.checkedRecommendations.push({
          id: element.id,
          active: false,
        });
      });
    });

    axios
      .post("https://cantra.a-lux.dev/api/items", {
        id: Number(url),
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        this.images = res.data.images[0].images;
        this.product = res.data;
        this.colors = res.data.colors;
        this.wholeColor = res.data.price
        res.data.images.forEach((element) => {
          this.allImages.push(element);
          this.imageColors.push(element.color);
        });
        res.data.images[0].images.forEach((element) => {
          this.zitems.push({
            src: element,
            w: 800,
            h: 800,
          });
        });
        this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
      });
    this.$axios
      .post("https://cantra.a-lux.dev/api/items/review", {
        item_id: Number(url),
      })
      .then((res) => {
        this.reviews = res.data;
      });
  },
  components: {
    VuePhotoZoomPro,
  },
  data() {
    return {
      images: "",
      activeRecommendation: null,
      recommendations: "",
      wholeColor: "",
      recommendatedCart: [],
      recommendationChoosenColor: "",
      colors: "",
      checkedRecommendations: [],
      zitems: [],
      currentColor: false,
      name: "",
      closedReviews: true,
      accordionOpen: 0,
      city: "",
      carType: "",
      carColor: "",
      message: " ",
      imageColors: [],
      reviews: "",
      dragActive: false,
      allImages: [],
      product: "",
      fullrecomendationPrice: 0,
      i: 0,
      isError: false,
      selectedContent: 1,
      currentColorName: "Выберите цвет",
      dataSent: false,
      files: [],
    };
  },
  methods: {
    addToCartRecommendated() {
      let cartItems = JSON.parse(localStorage.getItem("cartItems"));
      this.recommendatedCart.forEach((element) => {
        cartItems.push(element);
      });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },

    submitRecommendation() {
      this.recommendatedCart.push({
        id: this.activeRecommendation.id,
        ammount: 1,
        color: this.recommendationChoosenColor.id,
        colorName: this.recommendationChoosenColor.name,
      });
      console.log(this.recommendatedCart);
      this.fullrecomendationPrice += this.activeRecommendation.price;
      this.activeRecommendation = null;
      this.recommendationChoosenColor = null;
    },
    recommendatedColor(a, b) {
      console.log(a, b);
      this.recommendationChoosenColor = a;
    },
    recommendationActive(a, b) {
      console.log(a, b);
      let isInActive = this.recommendatedCart.find((obj) => {
        return obj.id === a.id;
      });
      if (isInActive === undefined) {
        this.activeRecommendation = a;
      } else {
        this.fullrecomendationPrice -= a.price;
        this.recommendatedCart.splice(
          this.recommendatedCart.indexOf(isInActive),
          1
        );
      }
    },

    uploadFiles(event) {
      // let data = new FormData();
      let img = event.target.files[0];
      let fd = new FormData();
      console.log(img, fd);
      this.files.push(img);
      console.log(this.files);
      fd.append("images", this.files[0]);
      fd.append("images", this.files[1]);
      let cringe = {
        header: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      };
      axios.post("https://cantra.a-lux.dev/api/test", fd, cringe);
    },
    sendReview() {
      let cringe = {
        header: {
          "Content-Type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      };
      let fd = new FormData();
      let url = window.location.pathname.split("/").pop();
      fd.append("item_id", url);
      fd.append("name", this.name);
      fd.append("city", this.city);
      fd.append("auto", this.carType);
      fd.append("color", this.carColor);
      console.log(this.files);
      fd.append("message", this.message);
      fd.append("images", this.files);

      this.$axios.post(
        "https://cantra.a-lux.dev/api/items/review/create",
        fd,
        cringe
      );
      // item_id: url,
      // name: this.name,
    },
    changePic(a) {
      delete this.zitems[this.i].thumbnail;
      this.i = a;
      this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
      console.log(this.zitems);
    },
    setColor(a, b, c) {
      this.currentColor = a;
      this.wholeColor = c;
      this.currentColorName = b;
      this.isError = false;
      this.images = this.allImages[this.imageColors.indexOf(a)].images;
      this.zitems = [];
      this.allImages[this.imageColors.indexOf(a)].images.forEach((element) => {
        this.zitems.push({
          src: element,
          w: 800,
          h: 800,
        });
      });
      this.$set(this.zitems[this.i], "thumbnail", this.zitems[this.i].src);
    },
    addToCartFail() {
      this.isError = true;
    },
    addToCart() {
      if (localStorage.cartItems) {
        let cartItems = JSON.parse(localStorage.getItem("cartItems"));
        let isExist = false;
        let colorExist = false;
        cartItems.forEach((element, index) => {
          if (element.id === Number(this.product.id)) {
            isExist = index + 1;
          } else {
            return false;
          }
          if (element.color === this.currentColor) {
            colorExist = true;
          } else {
            return false;
          }
        });
        if (isExist && colorExist) {
          cartItems[isExist - 1].ammount++;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          this.dataSent = true;
        } else {
          cartItems.push({
            id: this.product.id,
            ammount: 1,
            color: this.currentColor,
            colorName: this.currentColorName,
          });
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          this.dataSent = true;
        }
      } else {
        let cartItems = [];
        cartItems.push({
          id: this.product.id,
          ammount: 1,
          color: this.currentColor,
          colorName: this.currentColorName,
        });
        this.dataSent = true;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    },
  },
});
</script>
<style lang="scss">
.content {
  overflow: hidden;
}
img.accordion__body-content-img {
  width: 100%;
  padding: 10px;
  max-width: 260px;
}
@media (max-width: 1251px) {
  .content__info-content {
    max-width: 211px !important;
  }
  .content__info {
    display: block !important;
    //     flex-direction: column;
  }
}
.content__info-content p {
  font-size: 14px !important;
  margin-bottom: 15px !important;
}
.content__info-content {
  max-width: 411px !important;
  font-size: 16px !important;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
}
// .right-coll {
//     width: 35vw;
// }
// .fifth_block{
//     margin-top: 40px;
// }
.product__recommendations-info {
  max-width: 200px;
  width: 300px;
  height: 100%;
  display: flex;
  flex-flow: column;
  height: 300px;
  align-items: flex-start;
  justify-content: center;
  &__title {
    // height: 60%;
    padding-top: 50px;
    font-size: 20px;
    font-weight: 600;
    p {
      margin: 0;
    }
  }
  &__button {
    border: 1px solid #db2c29;
    background: #ffffff;
    color: #db2c29;
    font-size: 16px;
    line-height: 27px;
    border-radius: 0;
    margin-top: 15px;
    padding-top: 5px;
    box-shadow: none;
    text-shadow: none;
    // height: 40%;
  }
}
.recommendation__choose {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 400px;
  width: 100%;
  background: rgba(245, 245, 245, 1);
  max-height: 400px;
  height: 100%;
  transform: translate(-50%, -50%) !important;

  &-colors {
    max-height: 300px;
    height: 100%;
    margin: 20px 15px;
    background: #fff;
    &-title {
      margin: 0 15px;
      padding-top: 20px;
      font-size: 12px;
      font-weight: normal;
    }
    &-images {
      width: 90%;
      margin: auto;
      display: flex;
      flex-flow: wrap;
    }
    &-color {
      margin: 10px 5px;
      cursor: pointer;
    }
  }
  &-button {
    margin: auto;
    // border-top: 1px sol black;
    text-align: center;
    input {
      border: 1px solid #db2c29;
      background: #ffffff;
      color: #db2c29;
      font-size: 16px;
      line-height: 27px;
      border-radius: 0;
      padding-top: 5px;
      box-shadow: none;
      text-shadow: none;
    }
  }
}
.recomendation-card::before {
  content: "+";
  position: absolute;
  right: -20px;
  top: 50%;
  font-size: 30px;
  color: red;
  transform: translateY(-50%);
}
.recomendation-card:nth-last-child(2)::before {
  content: "=";
}
.recomendation-card {
  position: relative;
  max-width: 230px;
  width: 100%;
  display: flex;
  text-align: left;
  margin-right: 30px;
  flex-flow: column;
  align-items: center;
  &__img {
    max-width: 200px;
  }
  &__price {
    width: 90%;
    margin: 0;
    text-align: left;
    margin-bottom: 5px;
    font-size: 15px;
  }
  &__title {
    width: 90%;
    text-align: left;
    p {
      margin: 0 !important;
    }
    margin-bottom: 20px !important;
  }
  &__checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    margin: auto !important;
    padding-top: 20px !important;
    text-align: center;
  }
}
.product__recomendations {
  &-products {
    display: flex;
  }
  &-title {
    margin-top: 60px;
    margin-bottom: 40px;
    color: #000000;
    font-weight: normal;
    line-height: 27px;
    font-size: 18px;
    text-transform: uppercase;
    width: 362px;
    border-bottom: 1px solid #000000;
    font-family: "Lato", sans-serif;
  }
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
    transition: 0.3s ease-in-out all;
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
  max-height: 300px;
  height: 100%;
  overflow: scroll;
  transition: 0.5s ease-in-out all;
}

.review_move {
  margin-top: 60px;
}
.boxes {
  max-width: 650px;
  position: relative;
}
.submit_red_awards {
  position: absolute;
  top: 10px;
  background-color: #ff482e;
  right: 0;
}
.drop_block {
  margin: 0;
}
.drag-n-drop {
  width: 400px;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.review_form {
  width: 100%;
  height: 100%;
}
.big-input {
  width: 646px;
  margin-top: 15px;
  height: 100px;
  border: solid 1px #cdcdcd;
  background-color: #ffffff;
  padding-left: 12px;
  font-size: 17px;
  color: #171717;
}
.smallboxes {
  max-width: 650px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  input {
    width: 148px;
    letter-spacing: 0.2px;
    font-weight: 400;
    resize: none;
    transition: all 0.2s ease;
    height: 32px;
    border-radius: 0;
    border: solid 1px #cdcdcd;
    background-color: #ffffff;
    padding-left: 12px;
    font-size: 17px;
    color: #171717;
  }
}

.char__content {
  padding-top: 40px;
}
.content__info {
  display: flex;
  &-title {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 300;
    color: #000000;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  &-block {
    width: 100%;
    height: auto;
  }
  img {
    max-width: 579px;
    height: 386px;
    width: 100%;
  }
  &-bigcontent {
    // width: 90%;
    margin: auto;
    font-size: 14px !important;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    p {
      font-size: 14px !important;
    }
    h1 {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
      font-weight: normal;
      margin-bottom: 20px;
    }
  }
  &-content {
    max-width: 500px;
    font-size: 14px !important;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
    p {
      font-size: 14px !important;
    }
    h3 {
      font-size: 14px;
      line-height: 18px;
      color: #000000;
      font-weight: normal;
      // margin-bottom: 20px;
    }
  }
}

.char__tab {
  width: 100%;
  border-bottom: 1px solid black;
  &-content {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
  }
  &-h1-text {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.4);
    transition: 0.1s ease-in all;
    border-bottom: unset;
  }
  &-h1-text:hover {
    color: rgba(0, 0, 0, 0.85);
    transition: 0.1s ease-in all;
    // border-bottom: 1px solid rgb(219, 44, 41);
  }
}
.underlined {
  color: rgb(0, 0, 0);
  transition: 0.1s ease-in all;
  border-bottom: 3px solid rgb(219, 44, 41);
}
.onMobile {
  display: none;
}

.color-title {
  padding: 10px 0 0 0;
}
.first__block {
  width: 100%;
  max-height: 600px;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.images {
  display: flex;
  justify-items: center;
}
.image-zoom {
  max-width: 500px;
}
// .img-region{
//             width: 100% !important;
//             height: 400px !important;
// }
.images-choose {
  display: flex;
  flex-flow: column;
  max-height: 350px;
  height: 100%;
  overflow-y: auto;
  max-width: 100px;
  width: 100%;
  margin-right: 50px;
}
.description {
  &-text {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
  }
  &-color {
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    padding-top: 10px;
  }
  &-colors {
    width: 100%;
    display: flex;
    max-width: 371px;
    margin: auto;
    flex-flow: wrap;
    &-logo {
      margin: 1px 5px;
      cursor: pointer;
      border: 0.1mm solid black;
      width: 21px;
      border-radius: 45px;
    }
  }
  &-button {
    max-height: 200px;
    height: 100%;
    &_add {
      width: 80%;
      height: 40px;
      color: #db2c29;
      font-size: 16px;
      line-height: 27px;
      font-family: "Lato", sans-serif;
      background: #fff;
      border: 1px solid #db2c29;
    }
  }
}
@media (max-width: 768px) {
  .first__block {
    flex-flow: column;
    margin-bottom: 100px;
  }
  .images-choose {
    margin: 0;
  }
  .img-region {
    padding-left: 10px;
  }
  .onMobile {
    display: unset;
  }
}
.hide_all_reviews {
  margin-top: 20px;
}
.mobile_review {
  overflow: hidden;
  height: auto;
}
.inactive {
  height: 200px !important;
}
.gallery-thumbnail {
  max-width: 600px;
  max-height: 600px;
  img {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .product__recomendations {
    padding-bottom: 100px;
    max-width: 300px;
  }
  .product__recomendations-products {
    position: relative;
  }
  .recomendation-card {
    max-width: 100px;
    max-height: fit-content;
    height: 100%;
    &__img {
      max-width: 75px;
    }
    &__title {
      flex-flow: wrap;
    }
    &__checkbox {
      margin: 0;
    }
  }
  .product__recommendations-info {
    position: absolute;
    bottom: -100px;
    height: auto;
    width: 100%;
    max-width: 300px;
    flex-flow: wrap;
    justify-content: space-between;
    align-items: center;
    background: #f7f7f7;
    padding: 15px;
    border: 1px solid #ccc;
    &__title {
      margin: 0;
      padding: 0;
      margin-left: 10px;
    }
    &__button {
      margin: 0;
    }
  }
}
</style>
