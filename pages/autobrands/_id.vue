<template>
  <div class="container" v-if="brands.length != 0">
      <div class="brand__links" >
            <nuxt-link 
                v-for="(link,index) in brands.mark" 
                :key="index" 
                v-html="link.name" 
                :to="'/autobrands/auto/' + link.id">
            </nuxt-link>
      </div>
      <div class="brand__text" v-html="brands.content"> 
      </div>
  </div> 
</template>

<script>
export default {
    layout: 'default',
    data(){
        return{
            brands: [],
        }
    },
    mounted(){
        let url = 'https://cantra.a-lux.dev/api/auto/' + window.location.pathname.split("/").pop();
        this.$axios.get(url)
        .then(res=>{
            this.brands = res.data
        })
    },
}
</script>

<style lang="scss" >

    .brand{
        &__links{
            font-size: 18px;
            display: block;
            line-height: 28px;
            color: #000 !important; 

            margin-bottom: 20px;
            a{ color: #000 !important;}
        }
    }
</style>