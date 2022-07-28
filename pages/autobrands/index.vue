<template>
  
  <div class="container">
      <div class="brands-logos">
          <nuxt-link v-for="(auto, index) in autos" class="brands-logos__logo" :key="index" :to="'/autobrands/' + auto.id">
              <img :src="auto.logo">
          </nuxt-link>
      </div>
  </div>
</template>
<script>
export default {
    layout: 'default',
    data(){
        return{
            autos: '',
        }
    },
    mounted(){
        this.$axios.get('https://cantra.a-lux.dev/api/auto')
            .then(res=>{
                this.autos = res.data
            })
    }, 
}
</script>

<style lang="scss" scoped>
    .brands-logos{
        display: flex;
        flex-flow: wrap;
        justify-content: space-around;
        &__logo{
            margin: 20px;
        }
    }
</style>