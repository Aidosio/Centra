<template>
  <div class="cantra_content partnership">
    <div
      class="partnership_top_block"
      v-bind:style="{
        'background-image':
          'url(' +
          'https://cantra.a-lux.dev/storage/partner-mains/May2022/HifaBGucT7rx6DchZzFP.jpg' +
          ')',
      }"
    >
      <div class="partnership_top_block_left">
        <div class="partnership__top__content" v-html="main.content"></div>
        <div>
          <a
            href="https://www.instagram.com/cantra.ru/"
            target="_blank"
            class="partnership_insta"
            ><img src="../assets/img/instagram.svg" alt=""
          /></a>
          <a
            href="https://www.youtube.com/channel/UCZDI20Z_t1Q76Z3xrwHPz_Q"
            target="_blank"
            class="partnership_ytb"
            ><img src="../assets/img/yt.svg" alt=""
          /></a>
          <a
            href="https://www.facebook.com/cantra.ru"
            target="_blank"
            class="partnership_fb"
            ><img src="../assets/img/facebook.svg" alt="" />
          </a>
          <a
            href="https://vk.com/cantrarf"
            target="_blank"
            class="partnership_vk"
            ><img src="../assets/img/vk.svg" alt="" />
          </a>
        </div>
      </div>
    </div>

    <div class="partnership_second_block">
      <h1>Что такое CANTRA?</h1>
      <div class="partnership_red_stripe"></div>
      <div>
        Компания CANTRA - лидер по производству премиальных автонакидок на
        территории СНГ.
      </div>
    </div>
    <div
      class="partnership_third_block"
      v-bind:style="{
        'background-image':
          'url(' +
          'https://cantra.a-lux.dev/storage/partner-bios/May2022/FIsi2SqmEsmt7yPU3Vjm.jpg' +
          ')',
      }"
    >
      <div>
        <div class="success_years">
          <h4>{{ bio.step1 }}</h4>
          <ul class="success_years-item" v-html="bio.step1_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step2 }}</h4>
          <ul class="success_years-item" v-html="bio.step2_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step3 }}</h4>
          <ul class="success_years-item" v-html="bio.step3_content"></ul>
        </div>
        <div class="success_years">
          <h4>{{ bio.step4 }}</h4>
          <ul class="success_years-item" v-html="bio.step4_content"></ul>
        </div>
      </div>
    </div>
    <div class="partnership_fifth_block">
      <h2>cantra в цифрах</h2>
      <div class="partnership_red_stripe"></div>
      <div class="cantra_numbers">
        <!-- <pre>
            {{cards[0].title}}
        </pre> -->
        <div v-for="item in cards" :key="item.id">
          <img :src="item.background" />
          <div class="cantra_numbers_text">
            <span>{{ item.title }}</span>
            <span>{{ item.content }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="partnership_sixth_block">
      <div>
        <h2>{{ benefit.title }}</h2>
        <div class="partnership_red_stripe"></div>
        <ul class="parnership_sixth-item" v-html="benefit.content"></ul>
      </div>
      <div>
        <img :src="benefit.image" />
      </div>
    </div>
    <div class="partnership__reviews">
      <Reviews />
    </div>
    <div class="partnership_ninth_block">
      <h2>наша команда</h2>
      <div class="partnership_red_stripe"></div>
      <div class="our_team">
        <img :src="team.image" v-for="team in team" :key="team.id" />
      </div>
      <div class="red_mystery"></div>
    </div>
    <div class="partnership_fourth_block">
      <h2>Оставьте заявку</h2>
      <div class="partnership_red_stripe"></div>
    </div>
    <div class="callback-contactm_partnership">
      <form
        class="form-horizontal"
        id="form-contactm_partnership"
        @submit.prevent="sendData"
      >
        <input
          type="text"
          name="request_name"
          v-model="name"
          value=""
          id="input-name"
          class="form-control"
          placeholder="Имя"
        />

        <input
          type="text"
          name="request_email"
          v-model="email"
          value=""
          id="input-mail"
          class="form-control"
          placeholder="Email"
        />

        <the-mask
          type="text"
          :mask="['+7 (###) ###-##-##']"
          :masked="false"
          v-model="phone"
          class="form-control"
          placeholder="Телефон"
        />

        <input
          type="submit"
          class="button submit-contactm_partnership"
          value="Отправить заявку"
        />
      </form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TheMask } from "vue-the-mask";
import Reviews from "~/components/layout/reviews.vue";
export default Vue.extend({
  layout: "default",
  data() {
    return {
      main: "",
      mainImage: "",
      benefit: "",
      bio: "",
      cards: "",
      team: "",
      name: "",
      email: "",
      phone: "",
    };
  },
  components: {
    Reviews,
    TheMask,
  },
  mounted() {
    this.$axios.get("https://cantra.a-lux.dev/api/partner").then((res) => {
      this.main = res.data.main;
      this.mainImage = this.main.image;
      this.bio = res.data.bio;
      this.cards = res.data.card;
      this.benefit = res.data.benefit;
      this.team = res.data.command;
    });
  },
  methods: {
    sendData() {
      this.$axios.post("https://cantra.a-lux.dev/api/applicationjob", {
        name: this.name,
        email: this.email,
        phone: this.phone,
      });
    },
  },
});
</script>

<style lang="scss">
.Reviews {
  margin-top: 100px;
}
ul.parnership_sixth-item p {
  font-size: 14px !important;
}
.partnership_third_block > div {
  padding-right: 26px;
}
p {
  font-size: 1.1em;
}
.partnership__top__content {
  //   font-size: 16px;
  //   line-height: 19px;
  width: 372px;
}
@media (max-width: 768px) {
  .partnership_top_block {
    background: url("@/assets/img/bigimagemobile.jpg") !important;
    &_left {
      font-size: 16px !important;
      line-height: 19px !important;
    }
  }
  .partnership_third_block {
    background: url("@/assets/img/chronology_mob.jpg") !important;
  }
  .success_years {
    margin: 0 !important;
    height: auto;
    h4 {
      font-size: 14px !important;
    }
    &-item {
      margin: 0 !important;
      line-height: 12px !important;
      li {
        font-size: 12px !important;
        margin: 0 !important;
        line-height: 14px !important;
      }
      p {
        font-size: 12px !important;
        margin: 0 !important;
        line-height: 14px !important;
      }
    }
    ul {
      line-height: 12px !important;
      li {
        font-size: 12px !important;
        line-height: 12px !important;
      }
      p {
        font-size: 12px !important;
        line-height: 12px !important;
      }
    }
  }
  .success_years > ul > p,
  .success_years ul li {
    font-size: 12px !important;
    line-height: 14px !important;
  }
}
</style>
