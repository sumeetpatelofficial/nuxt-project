export default {
    state:()=>({
        products:[],
        cart:[]
    }),
    mutations:{
        SET_PRODUCTS(state, payload){
            state.products = payload;
        },
        ADD_TO_CART(state, {product, quantity}){
            let productInCart = state.cart.find(item => {
                return item.product.id === product.id;
            });
        
            if (productInCart) {
                productInCart.quantity += quantity;
                return;
            }
            
            state.cart.push({
                product, quantity
            })
        }
    },
    actions:{
        setProducts({commit}, payload){   
            commit('SET_PRODUCTS', payload);
        },
        addProductToCart({commit}, {product, quantity}){
            commit('ADD_TO_CART', {product, quantity})
        }
    },
    getters:{
        cartItemCount(state) {
            return state.cart.length;
        }
    }
}