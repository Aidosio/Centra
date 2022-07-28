<template>
  <div>
    <aside id="column-left" class="col-sm-3 hidden-xs">
      <div
        class="ask_danger_success"
        :class="{ active: dataSent }"
        v-if="dataSent"
      >
        <div class="text_success_green">Спасибо, ваша заявка принята</div>
        <div class="text_success_recall">
          В ближайшее время с вами свяжется менеджер и уточнит детали заказа.
        </div>
        <div class="button_ok" @click="dataSent = !dataSent">OK</div>
      </div>
      <div class="wide-form recalling" v-if="!dataSent">
        <h3 class="h3-text">Оставьте заявку, мы свяжемся с Вами сами</h3>
        <form
          class="form-horizontal"
          id="form-contactm_recall"
          @submit.prevent="formSend"
        >
          <div class="input-blocks">
            <div class="input">
              <input
                class="form-control"
                type="text"
                name="recall-name"
                v-model="name"
                id="recall-name"
                placeholder="Имя (Как к вам обращаться)"
                required
              />
              <!--<p class="hint">Как к Вам обращаться менеджеру</p>-->
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
              <!--<p class="hint">Контактный телефон</p>-->
            </div>
            <div class="input policy_block_ask_again">
              <input
                type="checkbox"
                id="pub_policy_ask_again"
                name="pub_policy_ask_again"
                checked=""
              />
              <label class="tick_label_ask_again" for="pub_policy_ask_again"
                ><div class="tick_ask_again"></div
              ></label>
              <span class="policy_text_ask_again"
                >Я согласен(-а) с
                <a href="/policy" target="_blank"
                  >политикой обработки персональных данных</a
                ></span
              >
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
    </aside>
  </div>
</template>

<script>
import Vue from "vue";
import { TheMask } from "vue-the-mask";
export default Vue.extend({
  components: {
    TheMask,
  },
  data() {
    return {
      name: "",
      phone: "",
      dataSent: false,
    };
  },
  methods: {
    formSend() {
      this.$axios.post("https://cantra.a-lux.dev/api/application", {
        name: this.name,
        phone: this.phone,
      });
      this.dataSent = true;
    },
  },
});
</script>

<style>
.text_success_green {
  font-size: 27px;
}
#recall-name {
  width: 240px;
}
.wide-form .recalling {
  text-align: center;
  display: block;
}
input#recall-name {
  font-size: 16px !important;
}
.active {
  display: block;
  height: 100px;
}
.ask_danger_success {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
@media (max-width: 1100px) {
  .second_block .cantra_content #column-left {
    height: 100%;
  }
  .button_center {
    width: 100%;
  }
  #form-contactm_recall .light-red-button {
    position: unset;
    margin: auto;
    margin-top: 15px;
    max-width: 250px;
    width: 100%;
    /* display: none !important; */
    margin-bottom: 15px;
  }
}
.second_block .cantra_content #column-left {
  display: flex;
  justify-content: center;
}
.wide-form {
  display: flex;
  justify-content: center;
  align-items: center;
}
.second_block .cantra_content #column-left h3.h3-text {
  margin: 0;
}
#form-contactm_recall {
  /* width: 460px; */
  display: flex;
  align-items: center;
  justify-content: center;
}
#form-contactm_recall {
  margin: 0;
  display: flex;
}
#form-contactm_recall .light-red-button {
  position: inherit;
}
@media (max-width: 768px) {
  #form-contactm_recall {
    flex-flow: column;
    padding-top: 20px;
  }
  .wide-form {
    flex-flow: column;
    /* justify-content: space-between; */
  }
}
</style>
