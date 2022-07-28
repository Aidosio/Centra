<template>
    <div class="container" v-if="fullItems.length <= 0" > 
        <div class="sale" v-for="(sale,index) in sales" :key="index">
            <h2> {{sale.title}}</h2>
            <div class="sale_label">АКЦИЯ</div>
            <!-- <pre>
                {{'https://cantra.a-lux.dev/storage/' + sale.image}}
            </pre> -->
            <div class="PB_image"><img :src="'https://cantra.a-lux.dev/storage/'+ sale.image" style="cursor: pointer" @click.prevent="openModal(index)" class="PB_options_image double_trouble"></div>
            <div class="sale-page-info"> 
                <div class="sale-page-info__price">
                    <strike class="oldprice">{{sale.oldprice}} р.</strike>
                    <p class="price">{{sale.newprice}} р. </p>
                </div>
                <div class="sale-page-info__button" @click.prevent="openModal(index)" style="cursor: pointer">
                    <span>Выбрать цвет</span> 
                </div>  
            </div>
            <form class="modal"  v-if="chosenColors.length != 0" @click.self="chosenColors = []" @submit.prevent="sendtoCart(fullItems[i], chosenColors)">
                <div class="modal__product" style="z-index: 99999;" >
                    <div class="modal__product-card" v-for="(item,index) in fullItems[i]" :key="item.id" >
                        <img class="modal__product-card__image"  v-if="item.images.length != 0"  :src="item.images[chosenColors[index].imageId].images[0]">
                        <div class="modal__product-card__title" style="display:flex; flex-flow:wrap"><div v-html="item.brand" style="margin: 0"></div>/{{item.name}}</div>
                        <div class="modal__product-card__color" v-if="item.colors.length != 0">
                            <h4 class="modal__product-card__color-title">Цвета накидок:</h4>
                            <h3 class="modal__product-card__color-description" >{{item.colors[chosenColors[index].colorId].name}}</h3>
                        </div>
                        <div class="modal__product-card__colors">
                            <img class="modal__product-card__colors-ball" v-for="(color, index) in item.colors" :key="index" @click="changeColor(index, item, color.id)" :src="color.logo">
                        </div>
                    </div>
                    <div class="modal__product-actions"> 
                        <div class="modal__product-actions__price">
                            {{totalPrice}} р.
                        </div>
                        <div class="modal__product-actions__button">
                            <input type="submit" value="Добавить в корзину"> 
                        </div> 
                    </div>
                </div>
            </form>
        </div> 
    </div>
</template>
<script>
import Vue from "vue"

export default Vue.extend({
    layout: 'default',
    data(){
        return{
            i: 0,
            chosenColors: [],
            totalPrice: 0,
            sales: [],
            fullItems: [],
            products: '',
        }
    },
    mounted(){
        this.$axios.get('https://cantra.a-lux.dev/api/sale').then(res=>{
            this.sales = res.data
            this.$axios.post('https://cantra.a-lux.dev/api/items',{})
                .then(res=>{
                    this.products = res.data
                    console.log(this.products)
                    this.sales.forEach(element => {
                        var items = []
                        element.items.forEach(e => {
                            items.push(this.products.find((obj) => {
                                return obj.id === e.itemid
                            }))
                        });
                        this.fullItems.push(items)
                    });
                    console.log(this.fullItems);
                })

        })

    },
    methods: {
        sendtoCart(product, color){
            console.log(color);

            if(localStorage.cartItems){
                product.forEach(prod => { 
                let isExist = false
                let colorExist = false
                let cartItems = JSON.parse(localStorage.getItem("cartItems"))
                    cartItems.forEach((element, index) => {
                        if(element.id === Number(prod.id)){
                            isExist = index+1
                        }
                        else{
                            return false
                        }
                        if(element.color === prod.colors[color.find((obj)=>{return obj.itemId === prod.id}).colorId].id){
                            colorExist = true
                        }
                        else{
                            return false
                        }
                    })
                    if(isExist && colorExist){
                        cartItems[isExist-1].ammount++   
                        localStorage.setItem('cartItems', JSON.stringify(cartItems))
                    }
                    else{
                        cartItems.push({
                            id: prod.id,
                            ammount: 1,
                            color: prod.colors[color.find((obj)=>{return obj.itemId === prod.id}).colorId].id,
                            colorName: prod.colors[color.find((obj)=>{return obj.itemId === prod.id}).colorId].name
                        })
                        localStorage.setItem('cartItems', JSON.stringify(cartItems))
                }});
            }
            else{
                let cartItems = []
                product.forEach(prod => { 
                    cartItems.push({
                        id: prod.id,
                        ammount: 1, 
                        color: prod.colors[color.find((obj)=>{return obj.itemId === prod.id}).colorId].id,
                        colorName: prod.colors[color.find((obj)=>{return obj.itemId === prod.id}).colorId].name
                    })
                })

                localStorage.setItem('cartItems', JSON.stringify(cartItems))
                }
        },



        changeColor(a, b, colors){
            let id = this.chosenColors.indexOf(this.chosenColors.find((obj) => {
                return obj.itemId === b.id
            }))
            let idimg = b.images.indexOf(b.images.find((obj=>{
                return obj.id === colors
            })))
            this.chosenColors[id].colorId = a
            this.chosenColors[id].imageId = idimg
            
        },
        openModal(a){
            this.chosenColors = []
            this.totalPrice = 0
            this.fullItems[a].forEach(item => {
                let imageIndex = item.images.indexOf(item.images.find((obj)=>{
                    return obj.id === item.colors[0].id 
                }))
                this.totalPrice += item.price
                    this.chosenColors.push({
                        colorId: 0,
                        itemId: item.id,
                        imageId: imageIndex
                    })
            });
            this.i = a
        },
    },  
})
</script>
<style lang="scss">
.modal{
    &__product{
        max-width: 1120px;
        width: 100%;
        max-height: 700px;
        background: #fff;
        position: absolute;
        left: 50%;
        border-radius: 5px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        top: 50%;
        display: flex;
        overflow-y: auto;
        flex-flow: wrap;
        transform: translate(-50%, -50%);
        &-card{
            width: 49%;
            margin-bottom: 80px;
            &__image{
                max-width: 300px;
                width: 100%;
            }
            &__title{  
                color: #000 !important;
                font-size: 20px;
                width: 90%;
                // font-weight: bold;
                text-decoration: none;
                padding-bottom: 5px;
                line-height: 24px;
                margin: auto;
                text-align: left;
                margin-bottom: 15px;
                align-items: center;
                // display: block;
                p{
                    margin: 0 !important;
                }
            }
            &__title:hover{
                text-decoration: underline;
            }
            &__color{
                text-align: left;
                width: 90%;
                margin: auto;
                &-title{
                    font-size: 15px;
                    color: #000000;
                    text-transform: none;
                    font-weight: 300;
                }
                h4{
                    margin: 0;
                    font-size: 15px;
                    color: #000000;
                    text-transform: none;
                    font-weight: 300;
                }
                h3{
                    margin: 0 0 20px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #000000;
                }
            }
            &__colors{
                width: 90%;
                display: flex;
                // max-width: 371px;
                margin: auto;
                flex-flow: wrap;
                img{
                    margin: 5px;
                    cursor: pointer;
                }
            }
        }
        &-actions{
            width: 90%;
            max-height: 50px;
            height: 50px;
            position: relative;
            display: flex;
            margin: auto;
            margin-bottom: 25px;
            &__price{
                width: 100%;
                text-align: center;
                font-family: Lato-Bold, sans-serif;
                font-size: 25px;
                color: #000000;
            }
            &__button{
                position: absolute;
                right: 0;
                top: 0;
                input{
                    width: 210px;
                    height: 44px;
                    border-radius: 100px;
                    background: #f42f2f;
                    border: none;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                    line-height: 1.5;
                    box-shadow: 0 1px 6px 0 rgba(213, 51, 51, 0.36), inset 0 -2px 0 0 rgba(159, 36, 36, 0.5);
                }
            }
        }   
    }
}



.sale{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: column   ;
    text-align: center;
    h2{
        text-align: center;
        margin-top: 25px;
        margin-bottom: 85px;
        color: #000000;
    }
    &-page-info{
        max-width: 700px;
        width: 100%;
        display: flex;
        margin: auto;
        margin-top: 15px;
        justify-content: space-between;
        .price{
            font-family: Lato-Bold, sans-serif;
            font-size: 25px;
            color: #000000;
            margin: 0;
        }
        .oldprice{
            line-height: 15px;
            font-size: 20px;
            color: #000000;
            margin-right: 10px;
        }
        &__button{
            display: flex;
            align-items: flex-end;
            span{
                // width: 20%;
                margin: 0 auto;
                font-size: 15px;
                line-height: 1.53;
                text-align: center;
                color: #de2828;
                background: none;
                border: none;
                box-shadow: none;
                text-decoration: underline;
                padding: 0;
                display: inline-block;
                text-shadow: none;
                margin-bottom: 5px;
                float: right;
                margin-right: 16px;
            }
        }
    }

    .PB_image{
        max-width: 700px;
        margin: auto;
        img{
            width: 100%;
        }
    }
}
</style>