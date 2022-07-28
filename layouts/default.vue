<template>
    <div> 
        <Header/>
        <Nuxt/>
        <Footer/>
    </div>
</template>

<script>
import topLine from "~/components/layout/top-line.vue";
import Vue from 'vue'
import Header from "~/components/layout/header.vue";
import Footer from "~/components/layout/footer.vue";
export default Vue.extend({
    components: {Header, Footer,  topLine},

})
</script>

<style lang="scss" >

</style>