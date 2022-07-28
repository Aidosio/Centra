<template>
  <div class="quest__wrapper">
    <div class="quest__conatiner">
      <div class="quest__header">
        <img
          id="quest__headerimage"
          class="quest__headerimage"
          :src="quest.headerimage"
          alt=""
        />
        <div id="quest__headertitle" class="quest__headertitle">
          {{ quest.headertitle }}
        </div>
        <div id="quest__headercontent" class="quest__headercontent">
          {{ quest.headercontent }}
        </div>
      </div>
      <div class="quest_benefits">
        <div v-html="quest.middleleftcontent" class="quest_benef"></div>
        <div>
          <img :src="quest.middleimage" alt="" />
        </div>
        <div v-html="quest.middlerightcontent" class="quest_flaw"></div>
      </div>
      <reviews />
      <div class="cantra_content">
        <vue-picture-swipe v-if="swiperImages && swiperImages.length > 0" :items="swiperImages" class="documentsImages"/>
      </div>
      
       <!-- <div class="modal" v-if="isModal" @click="isModal = !isModal">
        <div class="bigswiper">
          <div class="swiper-button-prev"></div>
          <swiper
            class="swiper"
            @init="console.log(swiper)"
            :options="swiperOptions"
          >
            >
            <swiper-slide
              v-for="(image, index) in quest.sertificat"
              :key="index"
            >
              <img :src="image" class="slide-img" />
            </swiper-slide>
          </swiper>
          <div class="swiper-button-next"></div>
        </div>
      </div> -->
      <div class="third_block">
        <h2 class="h2-text">Накидки из алькантары и меха</h2>
        <div class="cantra_content">
          <div class="row mob_products index__products">
            <product-card
              v-for="product in products"
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
            <span class="choosed_pag">1</span><span>2</span><span>3</span
            ><span>4</span><span>5</span>&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import axios from "axios";
import ProductCard from "~/components/product-card.vue";
import reviews from ".././components/layout/reviews.vue";

export default {
  components: {
    reviews,
    ProductCard,
  },
  setup() {
    return {
      // modules: [Pagination],
    };
  },
  data() {
    return {
      products: "",
      images: "",
      isModal: false,
      initial: 1,
      swiperImages: [],
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 50,
        initialSlide: this.initial,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      quest: "",
    };
  },
  methods: {
    handleSlideTo() {
      this.isModal = !this.isModal;
    },
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/quest").then((res) => {
      this.quest = res.data;
      this.quest.sertificat.forEach(element => {
        this.swiperImages.push({
          src: element,
          thumbnail: element,
          w: 600,
          h: 800 
        })
        console.log(element)
      });
    });
    axios
      .post("https://cantra.a-lux.dev/api/items", {
        id: "",
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
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
};
</script>
<style lang="scss" scoped >
.modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
}
.cantra_content {
  // display: flex;
  // justify-content: space-around;
}
.cantra_content img {
  width: 100%;
  max-width: 199px;
}
@media (max-width: 1250px) {
  .quest__middle-image img {
    width: 100%;
    max-width: 320px;
  }
}
.quest__body div {
  /* display: inline-block; */
}
.quest__body {
  justify-content: center;
  /* display: flex; */
  margin-top: 113px;
}
@media (max-width: 500px) {
  .quest__headerimage {
    height: 39vh !important;
  }
  #quest__conatiner {
    max-width: 500px !important;
  }
  #quest__headertitle {
    font-size: 4.6vw !important;
    padding: 0 !important;
    top: 55px !important;
    left: 2% !important;
    font-weight: 900 !important;
    width: 300px !important;
    line-height: 5vh !important;
  }
  #quest__headercontent {
    left: 6% !important;
    padding: 0 !important;
    top: 20vh !important;
    font-size: 4vw !important;
    width: 91vw;
    background: none !important;
  }
}
@media (max-width: 800px) {
  .quest__headerimage {
    height: 39vh;
  }
  .quest__conatiner {
    max-width: 500px !important;
  }
  .quest__headertitle {
    font-size: 4vw !important;
    top: -9px !important;
    left: 22% !important;

    font-weight: 900 !important;
    width: 356px !important;
    line-height: 5vh !important;
  }
  .quest__headercontent {
    left: 16% !important;
    top: 163px !important;
    font-size: 15px !important;
    background: none !important;
  }
}
.quest__middle-leftContent {
  margin-top: 22px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 25px;
}
.quest__middle-image {
}
.quest__middle-rightContent {
  margin-top: 22px;
  font-size: 16px;
  margin-left: 25px;
  color: rgba(0, 0, 0, 0.4);
  line-height: 25px;
}
@media (max-width: 1200px) {
  #quest__headertitle {
    font-size: 28px;
    top: -17%;
    left: 41%;
    width: 268px;
  }
  #quest__headercontent {
    left: 54%;
    top: 49%;
  }
  .quest__conatiner {
    max-width: 800px;
  }
}
@media (min-width: 1201px) {
  .quest__conatiner {
    max-width: 1220px;
  }
}
.quest__conatiner {
  width: 100%;
  margin: 0 auto;
}
.quest__headerimage {
  width: 100%;
}
.quest__header {
  position: relative;
}
.quest__headertitle {
  font-size: 48px;
  line-height: 50px;
  text-transform: uppercase;
  text-align: left;
  font-family: Lato-Bold, sans-serif;
  color: #ffffff;
  width: 415px;
  position: absolute;
  margin: 0 auto;
  padding-top: 87px;
  top: 17%;
  left: 43%;
}
.quest__headercontent {
  font-size: 18px;
  text-align: left;
  left: 59%;
  color: #ffffff;
  width: 336px;
  top: 63%;
  height: 118px;
  position: absolute;
  line-height: 23px;
  background: url(https://cantra.ru/images/framebord.png) no-repeat center
    center;
  padding-left: 30px;
  padding-top: 25px;
}

</style>
