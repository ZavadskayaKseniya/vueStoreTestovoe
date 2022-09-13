<template>
  <div class="product-item">
    <img :src="product_data.image">
    <div class="product-list">
      <p class="product-name">{{product_data.name}}</p>
      <p class="product-description">{{product_data.description}}</p>
      <span class="price">{{product_data.price}} руб.</span>
      <button class="btn-add"
              @click="addToCart"
      >+</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "card-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return{};
    },
    computed: {},
    methods:{
        addToCart() {
            this.$emit("addToCart",this.product_data);
        }
    }

};
</script>

<style lang="scss">

.product-item {
  width: 30%;
  text-align: left;
  margin-bottom: $margin;
  margin-left: $margin;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  @media(max-width: 865px){
    width: 46%;
  }

  @media(max-width: 635px){
    width: 86%;
  }

}

.product-item img {
  display: block;
  width: 100%;
  height: 180px;


}
.product-list {
  background: #fafafa;
  padding: 16px 16px 24px 16px;

}
.product-name {
  font-weight: 600;
  font-size: 20px;
  color:#3F3F3F;

}
.product-description {
  font-weight: 400;
  font-size: 1em;
  color:#3F3F3F;
  height: 48px;
}
.price {
  font-weight: 600;
  font-size: 1.5em;

}
.btn-add {
  float: right;
}



</style>