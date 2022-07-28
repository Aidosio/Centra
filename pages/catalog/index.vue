<template>
  <div class="cantra_content">
    <h2 class="catalog_header_category">Каталог</h2>
    <div class="filters">
      <select class="item" v-model="price" @change="selectedPrice(price)">
        <option value="">По умолчанию</option>
        <option v-for="(filter, index) in prices" :value="filter" :key="index">
          {{ filter }}
        </option>
      </select>
      <select class="item" v-model="type" @change="selectedType(type)">
        <option value="">По типу</option>
        <option v-for="(filter, index) in types" :value="filter" :key="index">
          {{ filter }}
        </option>
      </select>
      <select class="item" v-model="season" @change="selectedType(season)">
        <option value="">По сезону</option>
        <option v-for="(filter, index) in seasons" :value="filter" :key="index">
          {{ filter }}
        </option>
      </select>
    </div>
    <div class="catalog__items featured_line">
      <div
        class="product_list product-layout"
        v-for="product in products"
        :key="product.id"
      >
        <div class="product-thumb transition">
          <!-- <img style="position: absolute; top: 0; height: 0; width: 100%; height: 100%" src="@/assets/img/png/logo.png" class="img-responsive"> -->
          <div style="position: relative" class="image">
            <nuxt-link :to="'/product/' + product.id"
              ><img :src="product.image" alt="" class="img-responsive" />
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
              />
            </nuxt-link>
          </div>
          <div class="caption">
            <p class="price">
              <span>{{ product.price }} руб.</span>
              <span class="price-tax"></span>
            </p>
            <nuxt-link :to="'/product/' + product.id"
              ><h4>
                <a style="display: flex; align-items: center" href="">
                  <!-- <div
                    v-html="product.brand"
                    class="descriptionCat-item"
                    style="height: 100%"
                  ></div> -->

                  <div class="productName" v-html="product.name"></div
                ></a></h4
            ></nuxt-link>
          </div>
          <div class="more_group">
            <span class="count_colors" v-if="product.colors.length != 0"
              >{{ product.colors.length }} цветов</span
            >
            <div class="button-group">
              <nuxt-link :to="'/product/' + product.id"
                ><p class="color-bl">
                  <a class="color">Подробнее</a>
                </p></nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      products: "",
      prices: ["По возрастанию цены", "По убыванию цены", "По новинкам"],
      types: [],
      seasons: [],
      price: "",
      type: "",
      season: "",
      filterData: [],
      filterings: {
        price: "",
        type: "",
        season: "",
      },
      savedData: "",
    };
  },
  mounted() {
    this.$axios
      .post("https://cantra.a-lux.dev/api/items", {
        id: "",
        order: "",
        type: "",
        season: "",
      })
      .then((res) => {
        this.products = res.data;
        this.savedData = this.products.slice();
        this.products.forEach((element) => {
          if (!this.types.includes(element.type)) {
            this.types.push(element.type);
          }
          if (!this.seasons.includes(element.season)) {
            this.seasons.push(element.season);
          }
        });
      });
  },
  methods: {
    selectedPrice(a) {
      this.filterings.price = a;
      switch (a) {
        case "По возрастанию цены":
          this.products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "По убыванию цены":
          this.products.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        default:
          this.products = this.savedData;
          break;
      }
    },
    selectedType(a) {
      this.filterings.type = a;
      this.$axios
        .post("https://cantra.a-lux.dev/api/items", {
          id: "",
          order: "",
          type: this.type,
          season: this.season,
        })
        .then((res) => {
          this.products = res.data;
        });
    },
  },
};
</script>

<style lang="css">
img.img-responsive {
  object-fit: contain;
  min-height: 218px;
  width: 100% !important;
  max-height: 171px !important;
}
/* .productName {
  white-space: normal;
  width: 67px;
} */
a:hover {
  color: red !important;
}
/* .product_list product-layout{
  display: flex;
  flex-flow: column;
  justify-content: space-between;
} */
.catalog__items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.product_list .product-thumb {
  border: none;
}
.product_list img {
  max-height: 300px;
  width: 301px;
}
.more_group {
  width: 90%;
  margin: auto;
}
.product_list .price {
  font-size: 20px;
  display: inline-block;
  color: #292929;
}
.product_list h4 {
  display: block;
  text-align: left;
}
.product_list h4 a {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  line-height: 27px;
  font-size: 12px;
  color: #5e5e5e;
}
.product_list .caption {
  text-align: center;
  min-height: 38px;
}
.product_list .button-group {
  width: 142px;
  height: 39px;
  display: inline-block;
  border: 1px solid #db2c29;
  background: transparent;
  float: right;
}
.product_list .color-bl {
  text-align: center;
  margin-top: 4px;
}
html body .product_list .color {
  font-family: "Lato", sans-serif;
  color: #db2c29;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  border: none;
  text-decoration: none;
}
.product_list h4 a {
  /* cursor: text; */
  text-decoration: none;
  white-space: unset;
  line-height: 15px;
}
.product_list h4:hover a {
  color: red !important;
}

.product_list h4 {
  height: 27px;
}
.product_list .product-thumb {
  overflow: hidden;
}
.third_block .product_list .price,
.featured_line .product_list .price {
  display: block;
  text-align: left;
  font-weight: normal;
  line-height: 27px;
  font-size: 16px;
  color: #5e5e5e;
}
.filters {
  width: 100%;
  flex-flow: wrap;
  margin-bottom: 60px;
  display: flex;
}
.item {
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: unset;
  font-size: 16px;
  width: 213px;
  margin-right: 40px;
  height: 34px;
  border-radius: 0;
  background: white;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
@media (max-width: 1100px) {
  .catalog__items {
    display: flex;
    flex-flow: wrap;
    justify-content: space-around;
  }
  .item {
    margin-right: 14px;
  }
}
@media (max-width: 700px) {
  .item {
    width: 100%;
  }
}
.descriptionCat-item p {
  margin: 0;
}
</style>
>
