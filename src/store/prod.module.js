import ProdService from "../services/product.service";
const user = JSON.parse(localStorage.getItem("user"));
const products = {data:{

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
