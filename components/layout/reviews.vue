<template>
   <div class="insta_slick_slider " v-if="reviews.length > 0">
       <swiper
        class="swiper"
        :slides-per-view="4"
        :space-between="1"
        :pagination="pagination"
        :options="swiperOption">
            <swiper-slide v-for="item in reviews" :key="item.id" class="swiper-slide">
               <div class="insta_slider_block">
                    <div class="photo_with_cover">
                        <img :src="item.image">
                    </div>
                    <div>
                        <img :src="item.logo">
                        <div class="insta_nickname">{{item.name}}<br>
                            <a rel="nofollow" :href="item.url" target="_blank" tabindex="0">{{item.tag}}</a>
                        </div>
                        <div class="insta_feedback" :class="{'insta_feedback_open': feedopen === item.id}">
                            {{item.content}}
                            <div class="insta_feedback_toggle"></div>
                        </div>
                        <a class="insta_toggle-btn" @click.prevent="feedopen = item.id" v-if="feedopen != item.id">Раскрыть</a>
                        <a class="insta_toggle-btn" @click.prevent="feedopen = 0" v-if="feedopen === item.id">Скрыть</a>
                    </div>
                </div>
            </swiper-slide>
       </swiper>
       <div class="swiper-pagination"> </div>
   </div>

</template>

<script>
import axios from 'axios';
import Vue from 'vue'
export default Vue.extend({
    data(){
        return{
            reviews: '',
            feedopen: 0,
            pagination: {
            clickable: true,
            renderBullet: function (index, className) {
            console.log(index, className);
            return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },

        }
    },
    mounted(){
        axios.get('https://cantra.a-lux.dev/api/index  ')
            .then(res=>{
                this.reviews = res.data.review
            })
    },
    computed: {
        swiperOption() {
      return {
                slidesPerView: 1,
                spaceBetween: 10,
                breakpoints:{
                    900: {
                        slidesPerGroup: 3,
                        slidesPerView: 3, 
                    },
                    1000: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                    }
                },
                slidesPerGroup: 1,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: 'true',
                },


      }
    }
  },
}) 
</script>

<style>
.insta_toggle-btn{
    cursor: pointer;
}
/* .swiper-slide {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
  width: 40% !important;
  margin: 0 30%;
  font-size: 24px;
  font-weight: 700;
} */
.swiper-pagination-bullet {
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #000;
  opacity: 1;
  margin:  0 5px;
  background: rgba(0, 0, 0, 0.2);
  width: 20px !important;
  height: 20px !important;
}
.swiper-pagination-bullet-active {
  color: #fff;
  opacity: .75 !important; 
  background: black !important;
}
.swiper-pagination {
  position: unset !important;
  margin-bottom: 3%;
}
.swiper-pagination{
    width: 100%;
}
</style>