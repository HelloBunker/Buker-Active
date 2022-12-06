import ProdService from "../services/product.service";
const user = JSON.parse(localStorage.getItem("user"));
const products = {data:{
//     id: "1",
//     product_name: "prod name",
//     Link: "single_product/{id}",
//     description: "brand",
//    product_image: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//     normal_price: "500",
//     wholesale_price: "400",
//     quantity: "100",
//     product_unit: "l",
//     category:"oil",
//     created_at:"",
//     updated_at:""
  }
}



export const prod = {
  namespaced: true,
  state: products,

  actions: {
    fetch({ commit }) {
      return ProdService.getAllProduct().then(
        response => {
           let result = response.data;
          commit("FetchSuccess",result);
           
          return Promise.resolve(result);
        },
        error => {
          commit("FetchFailure", error);
          return Promise.reject(error);
        }
      );
    },
  },
mutations: {
    FetchSuccess(result){
       state.data = result;
        console.log('fetch success');
        console.log(result);   
    }, 
    FetchFailure(error){
        console.log('fetch failed');
        console.log('error');
    }
}

}
