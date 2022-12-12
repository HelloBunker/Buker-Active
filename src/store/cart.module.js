// In Vuex store
import productService from "../services/product.service"
export const cart = {
 state: {
    cart: []
  },
  actions:{
    async single_add_cart({commit},item){
        return productService.get_single_product(item).then(
            item => {
                
            };
    }
  }
  mutations:{
    ADD_TO_CART(state, item) {
      state.cart.push(item);
    }
  }
  
};
  