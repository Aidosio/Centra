<template>
  <div class="about__wrapper">
    <div class="about__container">
      <div class="about__header">
        <div class="about__header-content-item__left">
          <h1>{{ jobs.title }}</h1>
          <div class="about__header-content" v-html="jobs.headercontent"></div>
          <img :src="jobs.headerimage" alt="" />
          <p>
            {{ jobs.headerimagefooter }}
          </p>
        </div>
        <div class="about__header-content-item__right">
          <div class="about__header-content-item">
            <h2>Контакты оптового отдела</h2>
            <p>
              Российская Федерация Московская обл., п. Вёшки, ул.Выставочная 53.
              Офис 12.
            </p>
            <div class="about__header-content-item__contacts">
              <p>+7 (916) 775-91-54</p>
              <p cl>+7 (499) 967-84-41</p>
              <a href="mailto:opt@cantra.ru">opt@cantra.ru</a>
            </div>
          </div>
          <div class="about__header-content-item">
            <div class="wide-form recalling" v-if="!dataSent">
              <form
                class="form-horizontal"
                id="form-contactm_recall"
                @submit.prevent="formSend"
              >
                <h3 class="h3-text">
                  Оставьте заявку, мы свяжемся с Вами сами
                </h3>
                <div class="input-blocks">
                  <div class="input">
                    <input
                      class="form-control"
                      type="text"
                      name="recall-name"
                      v-model="name"
                      id="recall-name"
                      placeholder="Ваше имя"
                      required
                    />
                    <p class="hint">Как к Вам обращаться менеджеру</p>
                  </div>
                  <div class="input">
                    <the-mask
                      class="form-control"
                      v-model="email"
                      id="recall-name"
                      placeholder="Ваш E-mail "
                      required
                    />
                    <p class="hint">Ваш E-mail</p>
                  </div>
                  <div class="input">
                    <the-mask
                      class="form-control"
                      v-model="phone"
                      id="recall-name"
                      :mask="['+7 (###) ###-##-##']"
                      :masked="false"
                      placeholder="Введите номер телефона"
                      required
                    />
                    <p class="hint">Контактный телефон</p>
                  </div>
                  <div class="input policy_block_ask_again">
                    <input
                      type="checkbox"
                      id="pub_policy_ask_again"
                      name="pub_policy_ask_again"
                      checked=""
                    />
                  </div>
                </div>
                <div class="button_center">
                  <input
                    type="submit"
                    class="button light-red-button submit"
                    value="Отправить"
                  />
                </div>
                <div class="recall_danger"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div v-if="jobs" class="about__middle-content">
        <h1 class="about__middle-header">Мы гарантируем</h1>
        <div
          class="about__middle-content-inner"
          v-for="card in jobs.card"
          :key="card.index"
        >
          <img :src="card.logo" alt="" />
          <h3>{{ card.title }}</h3>
          <p v-html="card.content"></p>
        </div>
      </div>
      <div class="about__footer-content">
        <div class="about__footer-files">
          <a :href="jobs.event">Перечень рекомендуемых мероприятий</a>
        </div>
        <div class="about__footer-files">
          <a :href="jobs.event"
            >Сводная ведомость рез-ов проведения специальной оценки условий
            труда</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { TheMask } from "vue-the-mask";

export default {
  components: {
    TheMask,
  },
  data() {
    return {
      jobs: "",
      name: "",
      email: "",
      phone: "",
    };
  },
  methods: {
    formSend() {
      this.$axios.post("https://cantra.a-lux.dev/api/application", {
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
      this.dataSent = true;
    },
  },
  mounted() {
    axios.get("https://cantra.a-lux.dev/api/jobs").then((res) => {
      this.jobs = res.data;
    });
  },
};
</script>
<style scoped>
.about__header-content {
  line-height: 1.5em;
  margin: 1em 0;
  font-size: 18px;
}
.top-line__items {
  width: 100%;
  max-width: 92vw !important;
}
.about__middle-header {
  position: absolute;
  top: -80px;
}
.about__middle-content {
  margin-top: 150px;
  position: relative;
}
.about__middle-content {
  width: 100%;
  display: grid;
  padding: 10px;
  grid-column-gap: 77px;
  grid-template-columns: 1fr 1fr;
  max-width: 700px;
}
.wide-form {
  display: flex;
  /* justify-content: right; */
  /* align-items: center; */
  margin-right: 0;
}
.about__container {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
}
#form-contactm_recall #recall-name,
#form-contactm_recall #recall-ph {
  padding: 0;
}
#form-contactm_recall .input:nth-child(2) {
  margin: 0;
}
.hint {
  margin: 0;
  font-size: 12px !important;
}
.about__footer-files {
    font-size: 15px;
    padding: 5px;
}
@media (max-width: 750px) {
  .about__middle-content {
    grid-template-columns: 1fr;
  }
  #form-contactm_recall {
    height: 400px;
  }

  .about__container {
    max-width: 421px !important;
  }
  .about__header-content-item__right {
    display: block !important;
  }
  .about__header-content-item {
    margin: 0 auto;
  }
}
@media (min-width: 1201px) {
  #form-contactm_recall .button_center:nth-child(3) {
    margin-left: 47px;
    margin-top: 15px;
  }
  .about__header-content-item__left[data-v-d89446b8] {
    margin: 0;
  }
  .about__container {
    max-width: 1200px;
  }
  .about__header-content-item {
    text-align: left;
    width: 100%;
    max-width: 554px;
    margin-right: 40px !important;
  }
  .about__header {
    height: 350px;
    justify-content: space-between;
    display: flex;
  }
}
.about__header-content-item {
  width: 100%;
  max-width: 347px;
}
@media (max-width: 1200px) {
  .about__container {
    max-width: 751px;
  }
  .about__header-content-item__right {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  #form-contactm_recall {
  }
}
#form-contactm_recall .button_center:nth-child(3) {
  margin-left: 20px;
}
#form-contactm_recall {
  display: block;
  margin-top: 2em;
  width: 100%;
  max-width: 350px;
  background: #ffefe4;
  border-radius: 10px;
  padding: 10%;
  border: 1px solid #fbe0ce;
  box-shadow: 0px 4px 8px 1px #ccc;
}
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
.about__header-content-item__left {
  width: 100%;
  max-width: 747px;
  margin-right: 102px;
}
p {
  margin-bottom: 30px;
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
