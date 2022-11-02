<template>
  <div class="position-relative">
    <b-navbar type="light" variant="white" sticky>
      <div class="container">
        <b-navbar-nav>
          <b-nav-item href="#">
            <b-avatar rounded variant="primary" text="PC"></b-avatar>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown menu-class="p-0" class="p-0" right no-caret>
            <template #button-content>
              <b-avatar :badge="cartItemCount ? cartItemCount.toString() : '0'" badge-top variant="light" badge-variant="primary">
                <template><span class="material-icons">shopping_cart</span></template>
              </b-avatar>
            </template>
            <b-dropdown-form form-class="cart">
              <template v-if="cart.length">
                <div
                  class="cart-item"
                  v-for="(cartProduct, c) in cart"
                  :key="c"
                >
                  <div class="cart-image">
                    <img :src="cartProduct.product.image" alt="" srcset="" />
                  </div>
                  <div class="cart-item-detail">
                    <h6>{{ cartProduct.product.title.substring(0, 30) }}</h6>
                    <p class="d-block">                      
                      <strong>{{`$${cartProduct.quantity * cartProduct.product.price}`}}</strong> 
                      <span>{{`(${cartProduct.quantity} X $${cartProduct.product.price})`}}</span>
                    </p>
                  </div>
                  <div class="remove-link">
                    <b-link class="text-danger"
                      ><span class="material-icons">delete</span></b-link
                    >
                  </div>
                </div>
                <b-dropdown-item-button>
                  <span>Clear Cart</span></b-dropdown-item-button
                >
              </template>
              <template v-else>
                <div class="px-3">
                  <h5 class="text-muted m-0">No item in the cart</h5>
                </div>
              </template>
            </b-dropdown-form>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapState({
      cart: (state) => state.cart,
    }),
    ...mapGetters(['cartItemCount']),
  },
}
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  padding: 0;
  @media screen and (min-width: 768px) {
    min-width: 430px;
  }
}
.cart-item {
  position: relative;
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid #efefef;
  .cart-image {
    position: relative;
    display: block;
    width: 75px;
    height: 75px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .cart-item-detail {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 15px;
    h6 {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
    }
    p {
      font-size: 14px;
      color: #646464;
      margin: 0;
    }
  }
  .remove-link {
    a {
      font-size: 12px;
    }
  }
}
</style>
