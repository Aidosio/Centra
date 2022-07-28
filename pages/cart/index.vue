<template>
<div class="container" >
    <h1 class="header_cart">Оформление заказа</h1>
    <p v-if="cartEmpty" class="header__error">В корзине пока ничего нет. <nuxt-link to="/catalog/">Выберите накидки</nuxt-link></p> 
    <nuxt-link to="/catalog/" class="continue_shopping" href="/">Продолжить покупки</nuxt-link>
    <div class="row" v-if="!cartEmpty">
        <table class="table_design table table-bordered" style="border: none">
            <thead class="mob_cart_hide" style="border: none">
              <tr >
                <td class="text-left mob_cart_hide"></td>
				<td class="text-left">Товар</td>
				<td class="text-left" style="width: 100px">Кол-во</td>
				<td class="text-left" style="width: 110px">Цена</td>
                <td class="mob_cart_hide">Убрать</td>
              </tr>
            </thead>
            <tbody style="border: none">
                <tr v-for="(item, index) in sorted" :key="index">
                    <td class="text-center img_posit mob_cart_hide" style="border: none; ">
                        <img :src="item.image">
                    </td>
                    <td class="text-left mob_name_prod">
                        <div class="transform_mob">
                            <nuxt-link :to="'/product/' + item.id" class="on_prod_link">
                                <div v-html="item.name"></div>
                            </nuxt-link>
                            <p>
                                Цвета накидок: {{item.selectedColorName}}
                            </p>
                        </div>
                    </td>
                    <td class="text-left mob_prod_quantity" style="">
                        <div class="input-group btn-block" style="max-width: 200px;display: flex;">
                            <button class="minus" @click="ammMinus(item, index)">-</button>
                            <span class="form-control product_quantity">{{item.ammount}}</span>
                            <button class="plus" @click="ammPlus(item, index)">+</button>    
                        </div>
                    </td>
                    <td class="text-left price_format" v-if="item.colors[item.colors.indexOf(item.colors.find((obj)=>{return obj.id === item.selectedColor}))].type != 2">{{Number(item.price) * Number(item.ammount)}} р.</td>
                    <td class="text-left price_format" v-else>{{(Number(item.price) + Number(item.colors[item.colors.indexOf(item.colors.find((obj)=>{return obj.id === item.selectedColor}))].price)) * Number(item.ammount)}} р.</td>
                    <td class="mob_cart">
                        <div class="mob_cart-bin" @click="removeItem(index)">
                            <img src="@/assets/img/svg/clin.png">  
                        </div>
                        </td>
                </tr>
            </tbody>
        </table>
    </div>
        <form v-if="!cartEmpty" @submit.prevent="sendFormData()">
            <div class="forms">
                <div class="forms__titles"> 
                    <h1 class="forms__titles-title">
                        Клиент
                    </h1>
                    <h1 class="forms__titles-title">
                        Доставка или самовывоз
                    </h1>
                </div>
                <div class="forms__inputs">
                    <div class="forms__inputs__left">
                        <div class="forms__inputs__block">
                            <h1 class="forms__inputs__block-title">Ф.И.О.</h1>
                            <input type="text" class="forms__inputs__block-input" v-model="name">
                        </div>
                        <div class="forms__inputs__block">
                            <h1 class="forms__inputs__block-title">Телефон</h1>
                            <the-mask :mask="['+7 (###) ###-##-##']" :masked="false" type="text" v-model="phone" class="forms__inputs__block-input"/>
                        </div>
                        <div class="forms__inputs__block">
                            <h1 class="forms__inputs__block-title">Эл. почта</h1>
                            <input type="text" class="forms__inputs__block-input" v-model="email">
                        </div>
                    </div>
                    <div class="forms__inputs__right">
                        <div class="forms__inputs__block forms__inputs__block-checkboxes">
                            <div class="forms__inputs__block-checkbox">
                                <input type="radio" v-model="delivery" :checked='delivery === 1' value="1" id="delivery" >
                                <label for="delivery">Доставка</label>
                            </div>
                            <div class="forms__inputs__block-checkbox">
                                <input type="radio" v-model="delivery" :checked='delivery === 2' value="2" id="delivery">
                                <label for="selfservice">Самовывоз</label>
                            </div>
                        </div>
                        <div class="forms__inputs__block">
                            <h1 class="forms__inputs__block-title">Город доставки</h1>
                            <input type="text" v-model="deliveryCity" class="forms__inputs__block-input">
                        </div>
                        <div class="forms__inputs__block">
                            <h1 class="forms__inputs__block-title">Адрес доставки</h1>
                            <input type="text" v-model="deliveryAddress" class="forms__inputs__block-input">
                        </div>
                    </div>
                </div>
                <div class="forms__biginput">
                    <h1 class="forms__biginput-title">Ваше сообщение</h1>
                    <input type="text" class="forms__biginput-input" v-model="message">
                </div>
                <!-- <di> -->
            </div>
    <div class="payment" >
        <h2 class="payment__title">Выберите способ оплаты </h2>
        <div class="payment__inputs">
            <div class="payment__input">
                <input type="radio" id="money1" v-model="payment" :checked='payment === 1' value="1" class="payment__input-checkbox"> 
                <label for="money1" class="payment__input-text">
                    <img src="@/assets/img/png/cash.png">
                    <p>Наличными курьеру</p>
                </label>
            </div>        
            <div class="payment__input">
                <input type="radio" id="money2" v-model="payment" :checked='payment === 2' value="2" class="payment__input-checkbox"> 
                <label for="money2" class="payment__input-text">
                    <img src="@/assets/img/png/cards.png">
                    <p>Сейчас онлайн</p>
                </label>
            </div>
            <div class="payment__input">
                <input type="radio" id="money3" v-model="payment" :checked='payment === 3' value="3" class="payment__input-checkbox"> 
                <label for="money3" class="payment__input-text">
                    <img src="@/assets/img/png/paypal.png">
                    <p>PayPal</p>
                </label>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="form__agreement">
            <div class="input policy_block">
                <input class="checkout_pub_policy" type="checkbox" id="custom_field[address][1][]" name="custom_field[address][1][]" v-model="isAgreed" value="1" checked="">
                <label class="tick_label" for="custom_field[address][1][]"><div class="tick"></div></label>
                <span class="policy_text">Я согласен(-а) с <a href="/policy" target="_blank">политикой обработки персональных данных</a></span>
            </div>
        </div>
    </div>
    <div class="promo" v-if="!couponActive" @click="couponActive = !couponActive">Есть промокод?</div>
    <div class="for_promo">
        <input type="submit" value="Оформить заказ" id="tmdbuttonorder" class="btn btn-primary">
        <span class="totalitazer"><span>Итого:</span> {{finalPrice}} р.</span>
        <div class="form-group coupan" style="display: block;" @click="couponActive = !couponActive" v-if="couponActive">
            <div class="input-group">
                <input type="text" name="coupon" value="" placeholder="У Вас есть промокод?" id="input-coupon" class="form-control">
                <span class="input-group-btn">
                    <input type="button" value="Применить" id="button-coupon" class="btn btn-primary">
                </span>
            </div>
        </div>
    </div>
        </form>
</div>
</template>


<script>
import Vue from 'vue'
import {TheMask} from 'vue-the-mask'
import Input from '~/components/input.vue'

export default Vue.extend({
    layout: 'default',
    components:{
        TheMask,
    },    
    data(){
        return{
            unsorted: '',
            sorted: [],
            name: '',
            couponActive: false,
            cartItems: '',
            payment: 1,
            cartEmpty: false,
            phone: '',
            delivery: 1,
            message: '',
            isAgreed: 1,
            email: '',
            deliveryCity: '',
            deliveryAddress: '',
            finalPrice: 0,
        }
    },
    methods:{

        sendFormData(){
            let dataSent = []
            let cartItems = JSON.parse(localStorage.getItem('cartItems'))
            cartItems.forEach(element => {
                while (element.ammount) {
                    dataSent.push({
                        id: element.id,
                        color: element.color
                    })
                    element.ammount--
                }
            });
            this.$axios.post('https://cantra.a-lux.dev/api/order/create', {
                fio: this.name,
                phone: this.phone,
                email: this.email,
                message: this.message,
                promo: '',
                type_payment: Number(this.payment),
                city: this.deliveryCity,
                address: this.deliveryAddress,
                delivery_type: Number(this.delivery),
                paid: "1",
                items: dataSent,
                api_token: "", 
            }).then(res=>{
                localStorage.setItem('cartData', JSON.stringify(res.data))
                this.$router.push('/cart/receipt')
            })
        },

        removeItem(a){
            this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
            this.cartItems.splice(a, 1)
            this.sorted.splice(a, 1)
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
            if(this.cartItems.length === 0){
                this.cartEmpty = true
            }
        },
        ammMinus(a, b){
            this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
            this.cartItems[b].ammount--
            if(this.cartItems[b].ammount > 0){
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
                this.sorted[b].ammount = this.cartItems[b].ammount
                console.log(this.sorted[b].ammount)
            }
            else{
                this.cartItems.splice(b, 1)
                this.sorted.splice(b, 1)
                localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
                if(this.cartItems.length === 0){
                    this.cartEmpty = true
                }
            }
        },
        ammPlus(a, b){
            this.cartItems = JSON.parse(localStorage.getItem('cartItems'))
            this.cartItems[b].ammount++
            this.sorted[b].ammount++
            localStorage.setItem('cartItems', JSON.stringify(this.cartItems))
        }
    },
    mounted(){
        let cartItems = JSON.parse(localStorage.getItem('cartItems'))
        if(cartItems && cartItems.length != 0){
            this.$axios.post('https://cantra.a-lux.dev/api/items', {

            }).then(res=>{
                this.unsorted = res.data
                let cartItems = JSON.parse(localStorage.getItem('cartItems'))
                let cartId = [];
                let cartColorId = [];
                cartItems.forEach(element => {
                    cartId.push(element.id)
                    cartColorId.push(element.colorId)
                });
                cartId.forEach((element,index) => {
                    let unsortedVariable = this.unsorted.find((obj)=>{ 
                        return obj.id === element
                    });
                    let cartAmmount = Number(cartItems[index].ammount)
                    let cartColor = cartItems[index].color
                    let cartColorName = cartItems[index].colorName
                    let a = Object.assign( {}, unsortedVariable, {ammount: cartAmmount, selectedColor: cartColor, selectedColorName: cartColorName})
                    this.sorted.push(a)
                });
                console.log(this.sorted,)
            })
            setInterval(() => {
                this.finalPrice = 0 
                this.sorted.forEach(element => {
                    this.finalPrice += (element.price*element.ammount)
                });
            }, 1500);
        }
        else{
            this.cartEmpty = true
        }
    },

})
</script>
<style lang="scss">

.forms{
    max-width: 900px !important;
    width: 100%;

    &__biginput{
        &-input{
            width: 85%;
            height: 150px;
        }
    }
    &__titles{
        margin-top: 40px;
            margin-bottom: 30px;
        display: flex;
        width: 100%;
        &-title{
            width: 100%;

                margin: 0 !important; 
                color: #090909;
                font-weight: 900;
                font-size: 20px;

        }
    }
    &__inputs{
        width: 100%;
        display: flex;
        &__left, &__right{
            width: 100%;
        }
        &__block{
            margin-top: 8px;
                &-checkboxes{
                    display: flex;
                    max-width: 316px;
                    height: 60px;
                    margin-top: 13px;
                    align-items: flex-end;
                }
                &-checkbox{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    input{
                        width: 26px;
                        height: 26px;
                        border: 1px solid rgba(0, 0, 0, 0.5);
                        border-radius: 50% !important;
                        position: relative;
                        margin: 0 10px 0 0;
                    }
                }
            &-title{
                margin: 0;
                font-size: 15px;
                margin-bottom: 8px;
            }
            &-input{
                max-width: 316px;
                height: 40px;
                width: 100%;
                border-radius: 3px;
                background-color: #ffffff;
                border: solid 1px #bdbdbd;
                box-shadow: none;
                font-size: 15px;
            }


        }
    }
}
.on_prod_link{
    display: flex;
}
@media (max-width: 768px) {
    .price_format{
        vertical-align: bottom !important;
    }
}
.panel-heading{
    font-weight: 900;
    font-size: 20px;

}
.custom_textarea{
    max-width: 800px;
    width: 100%;
    height: 100px !important;
}
.row_big{
    /* max-width: 900px; */
}

.payment{
    // display: flex;
    &__inputs{
        max-width: 1000px;
        display: flex;
    }
    &__input{
        width: 100%;
        display: flex;
        &-text{
            margin-left: 20px;
            max-width: 100px;
        }
    }
}
.img_posit{
    img{
        width: 100%;
    }
}
.mob_cart_hide-bin{
    width: 100%;
    height: 100%;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
}
.header__error{
    margin: 30px 0;
    min-height: 300px;
}
@media (max-width: 768px) {
    .mob_cart-bin{
        position: absolute;
         left: 0;
         margin-right: 20px;
    }
    .transform_mob{
        padding-left: 20px;
    }
    .forms__inputs{
        flex-flow: column;
        text-align: center;
    }
    .forms__biginput{
        max-width: 310px;
        margin: auto;
    }
    .forms__biginput-input{
        width: 100%;
        height: 75px;
    }
    .payment{
        max-width: 310px;
        margin: auto;
        &__input{
            width: 50%;
        }
        &__inputs{
            flex-flow: wrap;
        }
    }
    .form__agreement{
        text-align: center;
    }
    .forms__inputs__block-checkboxes{
        margin: auto;
    }
}
</style>