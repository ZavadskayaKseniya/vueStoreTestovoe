<template>
  <div class="product-item">
    <img src="https://catfishes.ru/wp-content/uploads/2021/05/iguana1.jpg">
    <div class="product-list">
      <h3>Игуана</h3>
      <span class="price">₽ 1999</span>
      <a href="" class="button">В корзину</a>
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
  width: 285px;
  height: 310px;
  text-align: center;
  margin: 16px 0px 0px 16px;
  border-bottom: 2px solid #F5F5F5;
  background: rgba(255, 255, 255, 0.98);
  transition: .3s ease-in;
}

.product-item img {
  display: block;
  width: 100%;
}
.product-list {
  background: #fafafa;
  padding: 15px 0;
}
.product-list h3 {
  font-size: 15px;
  font-weight: 400;
  color: #444444;
  margin: 0 0 10px 0;
}
.price {
  font-size: 13px;
  color: #fc5a5a;
  display: block;
  margin-bottom: 12px;
}
.button {
  text-decoration: none;
  display: inline-block;
  padding: 0 12px;
  background: rgba(68, 68, 68, 0.94);
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 28px;
  transition: .3s ease-in;
}

</style>