<template>
  <div>
    <Header />
    <product />
    <product-detail />
  </div>
</template>

<script>
import product from './product.vue'
import productDetail from './product-detail/_slug.vue'
export default {
  components: { product, productDetail },
  name: 'IndexPage'
}
</script>
