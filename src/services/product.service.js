import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://test-api.hellobunker.xyz/api/user/";
const API_ADMIN= "https://test-api.hellobunker.xyz/api/admin/";



class ProductService {
   getAllProduct(){
    return axios.get(API_URL  + 'all_product') 
   }
   adminGetAllProduct(){
    return axios.get(API_ADMIN  + 'all_product',{headers:authHeader()}) 
   }

   get_all_customers() {
      return axios.get(API_ADMIN  + 'getAllCustomers',{headers:authHeader()})
   }
   get_single_customer(param) {
      return axios.get(API_ADMIN  + 'getAllCustomers/' + param ,{headers:authHeader()})
   }
}


export default new ProductService();