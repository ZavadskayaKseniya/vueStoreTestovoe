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
      <button class="btn-submit" type="submit">Submit</button>

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
   align-items: center;
   margin-top:50px;

   background: $form-backgraund;
   box-shadow: $form-shadow;
   border-radius: 4px;


 }
 .form-group{
   float: left;
 }
 label {
   font-size:0.625rem;
   display: block;
   float: left;
   margin-left: 8%;
   margin-bottom: 0.25rem;

 }
 .form-js{
   margin-top: $margin;
 }
 .input {
   width: 84%;
   height: 2.25rem;;
   padding: 0 10px;
   outline: 0;
   margin: 0px $margin $margin;
   background: $form-backgraund;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 4px;
   border: solid $form-backgraund;
 }
 .input.input-description {
   height: 6.75rem;
 }

 .input.error {
   border-color: $error-color;
 }
 .input::placeholder{
   color: #B4B4B4;
   font-size: 12px;
 }
 .input.input-description::placeholder{

   margin-top: 0px;
   position: absolute;
   z-index: 1;
   //display: block;

 }
 .btn-submit{
   font-family: 'Inter', sans-seriff;
   background: #EEEEEE;
   border-radius: 10px;
   width: 84%;
   height: 2.25rem;
   border: solid $form-backgraund;
   padding: 0;
   font-size: 12px;
   font-weight: 600;
   color: #B4B4B4;


 }

</style>