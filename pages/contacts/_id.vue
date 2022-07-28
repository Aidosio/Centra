<template>
  <div
    v-if="contactRes2.length > 0 || contactRes.length > 0"
    class="contacts__container"
  >
    {{ id }}
    <div class="contacts__header-wrapper">
      <h1 class="contacts__header">Контакты</h1>
      <select
        id="contacts-select"
        v-model="routerId"
        @change="$router.push('/contacts/' + routerId)"
      >
        <option :value="'mainContacts'">
          <nuxt-link to="/contacts/mainContent"> Офис компании </nuxt-link>
        </option>
        <option v-for="contact in j" :key="contact.id" :value="contact.id">
          <nuxt-link :to="`/contacts/${contact.id}`">
            {{ contact.name }}
          </nuxt-link>
        </option>
      </select>
    </div>
    <div class="contacts-id__content-wrapper">
      <div
        v-for="contact in contactRes"
        :key="contact.id"
        class="contacts__content-item"
      >
        <div v-if="contact.type === 'map'" class="contacts__content">
          <h3 class="contacts__header">{{ contact.content }}</h3>
          <p
            class="contacts__content"
            v-html="domDecoder(contact.subcontent)"
          ></p>
        </div>

        <div
          v-bind:class="{ contacts__content_active: isActive }"
          v-if="contact.type === 'popup'"
        >
          <a class="popup-btn" @click="(isActive = !isActive), isActiveBtn()">
            {{ isActiveText }}
          </a>
          <h3 class="contacts__header_content">{{ contact.content }}</h3>
          <p v-html="contact.subcontent"></p>
        </div>
        <div
          v-bind:class="{ contacts__content_active: isActive }"
          v-if="contact.type === 'content'"
        >
          <!-- <a class="popup-btn" @click="(isActive = !isActive), isActiveBtn()"> 
            {{ isActiveText }}
          </a> -->
          <h3 class="contacts__header_content">{{ contact.content }}</h3>
          <p v-html="contact.subcontent"></p>
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
      isActiveText: "",
      isActive: true,
      contactRes: "",
      contactRes2: "",
      j: [],
      routerId: null,
    };
  },
  computed: {
    id() {
      this.routerId = Number(this.$route.params.id);
    },
  },
  methods: {
    isActiveBtn() {
      if (this.isActiveText === "Открыть полностью") {
        this.isActiveText = "Скрыть";
      } else {
        this.isActiveText = "Открыть полностью";
      }
    },
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
    // this.routerId = Number(this.$route.params.id);
    this.routerId = window.location.pathname.split("/").pop();
    if (this.isActiveText === "") {
      this.isActiveText = "Открыть полностью";
    }
    axios.get("https://cantra.a-lux.dev/api/contact").then((res) => {
      this.contactRes2 = res.data;
      this.j = res.data;
      this.j.shift();
    });
    axios
      .get(`https://cantra.a-lux.dev/api/contact/${this.routerId}`)
      .then((res) => {
        this.contactRes = res.data;
      });
  },
};
</script>
<style>
.contacts__container {
  max-width: 100%;
}
h3.contacts__header_content {
  font-weight: 700;
}
.contacts__content-wrapper {
  /* display: flex; */
  /* flex-direction: column-reverse; */
}
.contacts__content-item {
  padding-left: 5px;
  display: flex;
  justify-content: space-between;
}
@media (min-width: 1001px) {
  .contacts__content-item {
    width: 1000px;
  }
}
@media (max-width: 1000px) {
  .contacts__content-item {
    width: 300px;
  }
}
.contacts__content_active {
  height: 20vh;
  /* position: static; */
  overflow: hidden;
}
.contacts__container {
  width: 100%;
  margin: 0 auto;
  height: auto;
}
@media (min-width: 1201px) {
  .contacts__header-wrapper {
    width: 300px !important;
    display: flex;
  }
  #contacts-select {
    margin-left: 16px;
  }
  .contacts__container {
    max-width: 1200px;
  }
}
@media (max-width: 1200px) {
  .contacts__content div iframe {
    width: 250px !important;
  }
  .contacts__header {
    width: 300px !important;
  }
  .contacts__content {
    width: 300px;
    /* padding-left: 5px; */
  }
  .contacts__container {
    width: 750px;
  }
}
#contacts-select {
  font-size: 40px;
  border: none;
  background: transparent;
  border-bottom: 2px dashed #77afff;
  color: #2f75db;
  margin-top: 14px;
  width: 300px;
  height: 53px;
}
</style>
