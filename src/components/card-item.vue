<template>
  <div class="product-item">
    <img :src="product_data.image">
    <div class="product-list">
      <p class="product-name">{{product_data.name}}</p>
      <p class="product-description">{{product_data.description}}</p>
      <span class="price">{{product_data.price}} руб.</span>
      <button class="btn-add">+</button>
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
    }

};
</script>

<style lang="scss">

.product-item {
  width: 30%;
  height: 20%;
  text-align: left;
  margin: $margin 0px 0px $margin;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
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
  //height: 48px;

}
.product-description {
  font-weight: 400;
  font-size: 16px;
  color:#3F3F3F;
  height: 48px;
}
.price {
  font-weight: 600;
  font-size: 24px;

}
.btn-add {
  float: right;
}



</style>