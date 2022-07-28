<template>
  <div class="container" v-if="marks.length != 0">
      <div class="marks">
       <vue-picture-swipe :items="items"/>
      </div>
  </div>
</template>

<script>
export default {

    layout: 'default',
    data(){
        return{
            marks: [],
            items: [],
        }
    },
    mounted(){
        let url = 'https://cantra.a-lux.dev/api/auto/mark/' + window.location.pathname.split("/").pop();
        this.$axios.get(url)
            .then(res=>{
                this.marks = res.data
                res.data.images.forEach(element => {
                    this.items.push({
                        src: element,
                        thumbnail: element,
                        w: 1000,
                        h: 1000
                    },)
                });
            })
    },
}
</script>

<style lang="scss">
    .marks{
        width: 100%;
        display: flex;
        flex-flow: wrap;
    }
</style>