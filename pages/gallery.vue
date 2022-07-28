<template>
 <div> 
    <div class="cantra_content">
        <!-- <img v-for="(image, index) in images" @click="handleSlideTo(index)" :key="index" :src="image"> -->
        <vue-picture-swipe v-if="swiperImages && swiperImages.length > 0" :items="swiperImages" class="imgimg"/>
    </div> 
 </div>
</template>

<script >
import Swiper from "swiper"
import Vue from "vue"

export default  Vue.extend({
    layout: "default",
    setup(){
        return{
            modules: [Pagination],
        }
    },
    data(){
        return{
            swiperImages:[],
            images: '',
            isModal: false,
            initial: 1,
            swiperOptions: {
                slidesPerView: 1,
                // loop: true,
                spaceBetween:50,

                initialSlide: this.initial, 
                // centeredSlides: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
                //   swiper: null,
        }
    },
    mounted(){
        this.$axios.get('https://cantra.a-lux.dev/api/gallery')
            .then(res=>{
                this.images = res.data.image
                this.images.forEach(element => {
                    this.swiperImages.push({
                        src: element,
                        w: 1400,
                        h: 1000,
                        thumbnail: element
                    })
                });
            })
    },
    methods: {
        // onSwiper(swiper) {
        //     console.log(swiper)
        //     this.swiper = swiper;
        // },

        handleSlideTo() {
            this.isModal = !this.isModal
        },
    }
})
</script>

<style >
.cantra_content{
    max-width: 1200px;
    /* display: flex;
    flex-flow: wrap; */
    height: 100%;
    /* justify-content; */
}
.gallery-thumbnail img {
    max-width: 700px !important;
    max-height: 400px !important;
    margin: 20px;
}
.my-gallery{
    display: flex;
    width: 100%;
    flex-flow: wrap;
    /* justify-content: space-between; */
    height: 100%;
}
.gallery-thumbnail{
    display: flex !important;
    max-width: 500px !important;
    max-height: 400px;
}
.gallery-thumbnail img{
    width: 100%;
}
.modal {
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
}
.bigswiper{
    margin: auto;
    position: relative;
    /* max-height: 600px; */
    max-width: 900px;
    width: 100%;
    /* max-height: 800px; */
}
.swiper{
    max-height: 800px;
}
.slide-img{
    width: 100%;
    height: 100%;
}

.swiper-button-prev, .swiper-button-next{
    margin: 0;
    top: 50% !important;
    transform: translateY(-50%) !important;
    /* display: none; */
    color: white;
    background: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 70px;
}
.swiper-button-prev{
    left: -60px;
}
.swiper-button-next{
    right: -60px;
}
@media (max-width: 1000px) {
    /* .cantra_content img{
        width: 100%;
    } */
}
</style>