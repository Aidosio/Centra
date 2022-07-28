<template>
  <div class="product_list product-layout col-lg-4 col-md-3 col-sm-6 col-xs-12">
    <div class="product-thumb transition">
      <div class="image" style="position: relative">
        <nuxt-link :to="'/product/' + id"
          ><img :src="image" alt="" title="" class="img-responsive" />
          <img
            style="
              position: absolute;
              top: 0;
              height: 0;
              width: 100%;
              height: 100%;
            "
            src="@/assets/img/png/logo.png"
            class="img-responsive"
        /></nuxt-link>
      </div>
      <div class="caption">
        <p class="price" style="margin: 0">{{ price }} рублей.</p>

        <a
          href=""
          class="productNameAll"
          style="
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;
          "
        >
          <!-- <div v-html="brand" class="testItem"></div> -->
          <!-- <div class="slash">/</div> -->
          <div class="productName" v-html="name"></div>
        </a>
      </div>
    </div>
    <div class="more_group">
      <span class="count_colors">{{ color }} цветов</span>
      <div class="button-group">
        <p class="color-bl">
          <nuxt-link class="color" :to="'/product/' + id"
            >Подробнее &gt;</nuxt-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    name: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    color: {
      type: Number,
      require: true,
    },
    id: {
      type: Number,
      require: true,
    },
  },
});
</script>

<style>
.productName {
  white-space: normal;
  text-align: left;
  font-weight: normal;
  line-height: 15px;
  font-size: 11px;
  color: #5E5E5E;
  width: 100%;
  /* width: 167px; */
}
img.img-responsive {
  object-fit: contain;
  min-height: 218px;
  width: 100%;
  max-height: 171px;
}
.slash {
  margin: 0 5px;
}
.testItem p {
  margin: 0;
}
.productNameAll {
  white-space: nowrap;
}
.productName {
  /* font-size: 13px; */
}
@media (max-width: 800px) {
  .productName {
    font-size: 11px;
  }
}
.productCardImage::before {
  background: url("@/assets/img/png/logo.png") center no-repeat;
}
</style>
