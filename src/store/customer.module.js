import ProdService from "../services/product.service";
const user = JSON.parse( localStorage.getItem("user"));
const customers = {data:{

  }
}



export const customer = {
  namespaced: true,
  state:customers,

  actions: {
    get_all_customers({ commit }) {
      return ProdService.get_all_customers().then(
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
