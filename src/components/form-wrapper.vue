<template>
  <div class="form-wrapper"  >
    <form action="#"
          class="form-js"
          novalidate
          @submit.prevent="addFromForm"

    >
      <div class="form-group">
        <label for="product">Название товара</label>
        <input type="text"
               class="input input-label"
               placeholder="Название продукта"
               id="product"
               v-model.trim="name"

        />

        <label for="description">Описание товара</label>
        <input type="text"
               class="input input-description"
               placeholder="Описание продукта"
               id="description"
               v-model.trim="description"

        />

        <label for="myURL">Адресс картинки</label>
        <input type="url"
               class="input input-url"
               id="myURL" name="myURL"
               placeholder="http://www.example.com"
               v-model.trim="image"

        >

        <label for="price">Цена товара</label>
        <input type="number"
               class="input input-price"
               id="price"
               v-model.trim="price"


        >
      </div>
      <button class="btn-submit" type="submit"  >Submit</button>

    </form>
  </div>

</template>

<script>
import {mapActions} from "vuex";
import useVuelidate from "@vuelidate/core"
import {required, minLength,minValue} from "@vuelidate/validators"
import {reactive} from "vue";

export default {
    name: "form-wrapper",
    components:{},

    data() {
        return{
          name: "",
          description: "",
          image:"",
          price: 0,
        };
    },

    computed: {
      // eslint-disable-next-line
      ...mapActions([
          "ADD_TO_PRODUCT"
      ])
    },
    methods: {
    addFromForm() {
      let task = {
            id: Math.random(),
            image: this.image,
            name: this.name,
            price:  this.price,
            description: this.description,
            available: true
      }
      console.log
      this.ADD_TO_PRODUCT(task);

    }
    },
    watch: {},
};
const formData = reactive({
  name: "",
  description: "",
  image:"",
  price: 0,
    }
);

const rules = {
  name: {required, minLength: minLength(6)},
  description: {required},
  image: {required},
  price: {required, minValue: minValue(1)},
};

const v$ = useVuelidate(rules, formData);
</script>

<style lang="scss">
 .form-wrapper {
   width: 30%;
   height: 27.5rem;
   display: flex;
   justify-content: start;
   align-items: center;
   margin-top: 3.125rem;

   background: $form-backgraund;
   box-shadow: $form-shadow;
   border-radius: 4px;
   @media(max-width: 635px){
     width: 40%;
   }
   @media(max-width: 400px){
     width: 73%;
   }


 }
 .form-group{
   float: left;
 }
 label {
   font-size:0.75em;
   display: block;
   float: left;
   margin-left: 8%;
   margin-bottom: 0.25em;

 }
 .form-js{
   margin-top: $margin;
 }
 .input {
   width: 84%;
   height: 2.25rem;;
   padding: 0 0.625rem;
   outline: 0;
   margin: 0px $margin $margin;
   background: $form-backgraund;
   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
   border-radius: 0.25em;
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
   font-size: 0.75em;
 }
 .input.input-description::placeholder{

   //position: absolute;
   //z-index: 1;
   //display: block;

 }
 .btn-submit{
   font-family: 'Inter', sans-seriff;
   background: #EEEEEE;
   border-radius: 0.652rem;
   width: 84%;
   height: 2.25rem;
   border: solid $form-backgraund;
   padding: 0;
   font-size:0.75em;
   font-weight: 600;
   color: #B4B4B4;


 }

</style>