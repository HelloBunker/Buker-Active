// In Vuex store
import productService from "../services/product.service";
export const cart = {
 state: {
    cart: [],
    cartCount:0,
  },
  actions:{
     add_cart( {commit},item){
        return productService.single_add_to_cart(item).then(
            item => {
              commit('ADD_TO_CART',item);
              return  Promise.resolve(item);  
            },
            error => {
              return  Promise.reject(error); 
            }
    );
  },

  view_cart( {commit}){
    return productService.view_cart()
    .then(
      data => {
        commit('CART',data);
        return  Promise.resolve(data);  
      },
      error => {
        return  Promise.reject(error); 
      }
);


},


delete_cart_item({commit},id){
  return productService.delete_cart_item(id)
  .then(
    data => {
      commit('DELETE_CART', data);
      return  Promise.resolve(data);  
    },
    error => {
      return  Promise.reject(error); 
    }

  )
},
checkOut({commit}){
  return productService.checkOut()
  .then(
    data => {
      commit('CheckOut', data);
      return Promise.resolve(data);
    },
    error => {
      return Promise.reject(data);
    }
  )
},

Pay({commit},details){
  return productService.Pay(details)
  .then(
    data => {
      commit('Pay', data);
      return Promise.resolve(data);
    },
    error => {
      return Promise.reject(data);
    }
  )  
}

},
  mutations:{
    ADD_TO_CART(state, item) {

      
      state.cart.push(item);
      // console.log(state.cart);
    },

    CART(state,data){
      state.cart == data.data.data;
      state.countCart = data.data.data.length;
      console.log(state.cart );
      // console.log(data.data.length);

    },

      DELETE_CART(state,data){

      },
      
      CheckOut(state,data){
        console.log(data);
      },
      Pay(state,data){
        console.log(data);
      }
  }
  
};
  