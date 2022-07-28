<template>
  <div class="contacts__container" v-if="contactRes.length > 0">
    <div class="contacts__header-wrapper">
      <h1 class="contacts__header">Контакты</h1>
      <select
        id="contacts-select"
        v-model="routerId"
        @change="$router.push('/contacts/' + routerId)"
      >
        <option :value="1">
          <nuxt-link to="/contacts/"> Офис компании </nuxt-link>
        </option>
        <option
          v-for="contact in contactRes"
          :key="contact.id"
          :value="contact.id"
        >
          <nuxt-link :to="`/contacts/${contact.id}`">
            {{ contact.name }}
          </nuxt-link>
        </option>
      </select>
    </div>
    <div class="main-contacts__content-wrapper">
      <div class="main-contacts__content-left">
        <div v-for="map in contactIdRes" :key="map.id">
          <div v-if="map.type === 'content'" class="main-contacts__content">
            <h1 class="contacts__header-content">
              {{ map.content }}
            </h1>
            <div class="main-contacts__img-subcontent-wrapper">
              <p class="contacts__sub-content" v-html="map.subcontent"></p>
              <div
                v-if="map.content === 'Телефоны'"
                class="main-contacts__wts-img"
              >
                <img src="../../assets/img/wts.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="main-contacts__content-right">
        <div
          v-for="map in contactIdRes"
          :key="map.id"
          class="main-contacts__content-map"
        >
          <p
            v-if="map.type === 'map'"
            class="contacts__map-content"
            v-html="domDecoder(map.subcontent)"
          ></p>
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
      contactRes: [],
      routerId: 1,
      contactIdRes: "",
      // content: false,
      // j: [],
      map: false,
    };
  },
  methods: {
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        "<!doctype html><body>" + str,
        "text/html"
      );
      return dom.body.textContent;
    },
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/contact").then((res) => {
      this.contactRes = res.data;
      this.contactRes.shift();
    });

    axios
      .get(`https://cantra.a-lux.dev/api/contact/${this.routerId}`)
      .then((res) => {
        this.contactIdRes = res.data;
      });
  },
};
</script>
<style>
.contacts__header-content {
  font-size: 20px;
  line-height: 1.5em;
  font-weight: 600;
}
option {
  font-size: 25px;
  height: 10vh;
}
.main-contacts__wts-img img {
  width: 100%;
  margin: 17px -7px;
  width: 40px;
}
.main-contacts__content {
  width: 280px;
}
@media (min-width: 1201px) {
  .main-contacts__wts-img {
    float: inline-start;
    width: 30px;
    position: relative;
    top: -53px;
    left: 177px;
  }
  .main-contacts__content-wrapper {
    width: 1000px;
  }
}
@media (max-width: 1000px) {
  .contacts__content-wrapper {
    width: 600px;
    flex-flow: column;
    margin: auto;
  }
}

.main-contacts__content-left {
  /* width: 30vw; */
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 1fr 1fr;
}
.contacts__header-wrapper h1 {
  font-size: 40px;
  margin-left: 13px;
}
.main-contacts__content-map {
  margin-left: 15px;
}
.contacts__container {
  width: 100%;
  margin: 0 auto;
  height: auto;
}
@media (min-width: 1201px) {
  .contacts__header-wrapper {
    /* margin-left: 12px; */
    display: flex;
  }
  .contacts__container {
    max-width: 1200px;
  }
  .main-contacts__content-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
.canvas {
  max-width: 100%;
  height: 100%;
}
@media (max-width: 1200px) {
  .main-contacts__wts-img {
    float: inline-start;
    position: relative;
    width: 30px;
    top: -49px;
    left: 107px;
  }
  .contacts__map-content div iframe {
    margin: 0 auto;
    text-align: center;
    align-items: center;
    max-width: 250px !important;
  }
  .main-contacts__content-left {
    margin: 0px 15px;
  }
  .contacts__header-wrapper {
    justify-content: center;
  }
  .contacts__container {
    max-width: 750px;
  }
}
@media (max-width: 600px) {
  h1.contacts__header {
    margin-left: 12px;
  }
  .main-contacts__content-left {
    grid-template-columns: 1fr;
  }
  .contacts__header-wrapper {
    display: block;
  }
  #contacts-select {
    margin: 0;
  }
}

#contacts-select {
  font-size: 35px;
  width: 310px;
  border: none;
  background: transparent;
  border-bottom: 2px dashed #77afff;
  color: #2f75db;
  margin-top: 14px;
  margin-left: 8px;
  height: 53px;
}
</style>
