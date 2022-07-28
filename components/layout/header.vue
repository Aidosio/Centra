<template>
  <div>
    <top-line />
    <header>
      <div class="cantra_content">
        <a
          class="menu-btn"
          style="position: absolute; right: 10px"
          :class="{ opennav: !burgerActive, closenav: burgerActive }"
          @click="burgerActive = !burgerActive"
          href="#"
          ><img src="@/assets/img/svg/burger.svg"
        /></a>
        <a class="menu-btn closenav" href="#"></a>
        <nuxt-link to="/" class="logo"
          ><img src="@/assets/img/svg/logo.svg"
        /></nuxt-link>
        <nav :class="{ active: burgerActive }">
          <!--<div class="mobile-basket">
        <a href="/checkout/"><span></span>Перейти в корзину</a>
      </div>-->
          <div class="nav-wrapper">
            <ul class="menu rightnav">
              <li class="login-nav">
                <a href="/index.php?route=account/account">Войти</a>
              </li>
              <li class="contacts" @click.prevent="activeForm = !activeForm">
                <a href="#"><span>Связаться с нами</span></a>
              </li>
            </ul>
            <ul class="menu leftnav">
              <li><a href="/catalog">Каталог</a></li>
              <li><a href="/partnership">Партнерство</a></li>
              <li><a href="/gallery">Фотогалерея</a></li>
              <li><a href="/certify">Отличия от подделок</a></li>
              <li>
                <nuxt-link class="color" to="/contacts/mainContacts"
                  >Контакты</nuxt-link
                >
              </li>
            </ul>
          </div>
        </nav>

        <div class="clear"></div>
      </div>
      <headerform v-if="activeForm" />
    </header>
  </div>
</template>

<script>
import TopLine from "./top-line.vue";
import Vue from "vue";
import Headerform from "./headerform.vue";
export default Vue.extend({
  components: { TopLine, Headerform },
  data() {
    return {
      activeForm: false,
      burgerActive: false,
    };
  },
});
</script>

<style lang="scss">
.menu-btn {
  right: 20px !important;
}
// @media (min-width: 769px) {
//   .logo{
//     display: none;
//   }
// }
@media (max-width: 768px) {
  .logo {
    cursor: pointer;
  }
  .active {
    right: 0 !important;
    z-index: 999999999999999999999999999;
    background: white;
    height: auto;
  }
}
</style>
