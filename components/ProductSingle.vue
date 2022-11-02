<template>
  <div class="card h-100 product-cart" tag="article">
    <div class="card-body d-flex flex-column">
      <div class="product-image mb-3">        
        <img :src="product.image" :alt="product.title" srcset="" />        
      </div>
      <h5 class="card-title d-block mt-auto">
        {{ product.title.substring(0, 15) }}
      </h5>
      <div class="card-text mb-3">
        {{ product.description.substring(0, 100) }}
      </div>
      <div class="mt-auto">
        <b-button
          href="#"
          size="sm"
          variant="primary"
          @click="addToCart(product)"
          >Add to Cart</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:{
        product: {
            type: Object,
            default: {}
        },
    },
    methods: {
        ...mapActions(['addProductToCart']),
        addToCart(product) {
            this.addProductToCart({
                product: product,
                quantity: 1,
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variable.scss";
.product-cart {
  position: relative;
  background: #ffffff;
  transition: all ease-in-out 0.2s;
  border-radius: 10px;
  &:hover {
    background: #f8f9fa;
    box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 15%);
  }
  .product-image {
    position: relative;
    display: block;
    width: 150px;
    height: 150px;
    margin: 0 auto;
    img {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
