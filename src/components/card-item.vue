<template>
  <div class="product-item">
    <img src="https://catfishes.ru/wp-content/uploads/2021/05/iguana1.jpg">
    <div class="product-list">
      <p class="product-name">Наименование товара</p>
      <p class="product-description">Какое-то описанрние товра лорывщшнрфщфыв шдгыфнг ыфвропа лг гныфв гны шнфы щ.</p>
      <span class="price">10000 ₽</span>
      <button class="btn-add">+</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "card-item"
};
</script>

<style lang="scss">

.product-item {
  width: 30%;
  text-align: left;
  margin: $margin 0px 0px $margin;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.product-item img {
  display: block;
  width: 100%;
}
.product-list {
  background: #fafafa;
  padding: 16px 16px 24px 16px;

}
.product-name {
  font-weight: 600;
  font-size: 20px;
  color:#3F3F3F
}
.product-description {
  font-weight: 400;
  font-size: 16px;
  color:#3F3F3F;
}
.price {
  font-weight: 600;
  font-size: 24px;
  float: left;
}
.btn-add {
  float: right;
}



</style>