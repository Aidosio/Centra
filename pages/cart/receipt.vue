<template>
  <div class="cantra_content">
      <div id="content">
            <div class="thankyou_text">
                <div class="left_thankyou">
                    <div>
                        <img class="thank_img" src="/images/call-center-2.png">
                        <div class="thank_heading">
                            <h1 style="font-family: 'Lato', sans-serif;">Спасибо за заказ!</h1>
                            <p>В ближайшее время с вами свяжется наш оператор для подтверждения заказа</p>                        </div>
                    </div>
                    <div>
                        <h2 style="font-weight: unset;">А пока полистайте наш инстаграм <a class="insta_ico" href="https://www.instagram.com/cantra.ru/" target="_blank"></a></h2>
                        <div class="insta_four_block">
                            <a href="https://www.instagram.com/cantra.ru/" target="_blank"><img src="@/assets/img/inst/1.jpg"></a>
                            <a href="https://www.instagram.com/cantra.ru/" target="_blank"><img src="@/assets/img/inst/2.jpg"></a>
                            <a href="https://www.instagram.com/cantra.ru/" target="_blank"><img src="@/assets/img/inst/3.jpg"></a>
                        </div>
                    </div>
               
                </div>
                <div class="right_thankyou" v-if="products.length != 0">
                    <h3>Детали заказа</h3>
                    <h4>Номер заказа</h4>
                    <div>№{{products.Order.id}}</div>
                    <h4>Наименование товара</h4>
                    <div></div>
                    <h4>Цвет товара</h4>
                    <div></div>
                                        <h4>Способ оплаты</h4>
                    <div v-if="products.Order.type_payment === 1">Наличными курьеру</div>
                    <div v-if="products.Order.type_payment === 2">Картой</div>
                    <div v-if="products.Order.type_payment === 3">PayPal</div>
                    <h3>Контактные данные и информация</h3>
                    <h4>Адрес доставки</h4>
                    <div>{{products.Order.fio}}</div>
                    <h4>Контактный телефон</h4>
                    <div>{{products.Order.phone}}</div>
                </div>

                                <div id="print" style="display: none">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <td class="text-left" colspan="2">Детали заказа</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-left" style="width: 50%;">                                <b>Номер заказа:</b> #19380<br>
                                <b>Дата заказа:</b> 24.06.2022</td>
                            <td class="text-left">                                <b>Способ оплаты:</b> Наличными курьеру<br>
                                                                                                <b>Способ доставки:</b> Самовывоз из магазина                                </td>
                        </tr>
                        </tbody>
                    </table>
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <td class="text-left" style="width: 50%;">Адрес получателя</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-left">testt<br>test<br>321321321321321<br>Russian Federation</td>
                        </tr>
                        </tbody>
                    </table>
               
                    
				<!-- /*XML Starts Starts */ -->
						 <!-- /*XML Starts Ends */ -->
			
			
                    <div class="buttons">
                        <div class="pull-left"><a id="ProductBundlesOptionsSubmitButton" href="/" class="btn btn-primary">Продолжить</a></div>
                    </div>
                </div>
                
            </div>
            <div></div></div>
  </div>
</template>

<script>
export default {
    layout: 'default',
    data(){
        return{
            products: [],
        }
    },
    mounted(){
        this.products = JSON.parse(localStorage.getItem('cartData'))
        console.log(JSON.parse(JSON.stringify(this.products)))
    },
}
</script>

<style>

</style>