<template>
  <div class="container py-5">
    <div class="row d-flex">
      <div class="col-md-3 mb-4" v-for="(product, p) in productList" :key="p">
        <nuxt-link class="text-decoration-none" :to="`/product-detail/${product.id}`">
          <product-single :product="product" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductSingle from '~/components/ProductSingle.vue'
export default {
  components: { ProductSingle },
  name: 'SamplePage',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      productList: (state) => state.products,
    }),
  },  
  async fetch() {
    const { data } = await this.$axios.get('/products')
    this.$store.dispatch('setProducts', data)
  },
}
</script>
<style lang="scss" scoped></style>
