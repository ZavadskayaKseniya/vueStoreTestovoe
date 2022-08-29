<template>
  <div class="form-wrapper" >
    <form action="#" class="form-js" novalidate>
      <div class="form-group">
        <label for="product">Название товара</label>
        <input type="text" class="input input-label" placeholder="Название продукта" id="product"/>

        <label for="description">Описание товара</label>
        <input type="text" class="input input-description" placeholder="Описание продукта" id="description"/>

        <label for="myURL">Адресс картинки</label>
        <input type="url" class="input input-url" id="myURL" name="myURL"  placeholder="http://www.example.com">

        <label for="price">Цена товара</label>
        <input type="number" class="input input-price" id="price" value="42">
      </div>
      <button class="btn btn-secondary btn-submit" type="submit">Submit</button>

    </form>
  </div>

</template>

<script>
export default {
    name: "form-wrapper",
    components:{},
    data() {
        return{
            title: "Order form"
        };
    },
};
</script>

<style lang="scss">
 .form-wrapper {
   width: 332px;
   height: 440px;
   display: flex;
   justify-content: start;
   margin-top:$margin;

   background: $form-backgraund;
   box-shadow: $form-shadow;
   border-radius: 4px;


 }
 .form-js{
   margin-top: $margin;
 }
 .input {
   width: 100%;
   height: 30px;
   padding: 0 10px;
   border: 1px solid #ccc;
   outline: 0;
   margin-bottom: $margin;
 }
 .input.error {
   border-color: $error-color;
 }
 .input::placeholder{
   color:#ccc;
 }

</style>