import axios from "axios";
import authHeader from "./auth-header";
import adminAuthHeader from "./admin-header";
const API_URL = "https://bunker-api.hellobunker.com/api/user/";
const API_ADMIN = "https://bunker-api.hellobunker.com/api/admin/";

class ProductService {
  getAllProduct() {
    return axios.get(API_URL + "fetch_guest_products");
  }
  get_users_order() {
    return axios.get(API_URL + "user_order_list", { headers: authHeader() });
  }
  get_single_product(param) {
    return axios.get(API_URL + "single_guest_product/" + param);
  }
  single_add_to_cart(id) {
    return axios.post(
      API_URL + "add_cart",
      {
        product_id: id.toString(),
        quantity: "1",
      },
      { headers: authHeader() }
    );
  }
  add_to_cart(items,qty) {
    return axios.post(
      API_URL + "add_cart",
      {
        product_id: items.toString(),
        quantity: qty.toString( ),
      },
      { headers: authHeader() }
    );
  }

  view_cart() {
    return axios.get(API_URL + "user_cart", { headers: authHeader() });
  }
  update_cart(id,val) {
    return axios.put(
      API_URL + "cart_update/" + id,
      {
        quantity: val.toString(),
      },
      { headers: authHeader() }
    );
  }
  delete_cart_item(id){
    return axios.delete(API_URL + "delete_cart/" + id, {
      headers: authHeader()});
  }

  checkOut(){
    return axios.post(API_URL + "add_order", '', {headers:authHeader()});
  }

  Pay(details){
    return axios.post(API_URL + "add_order", 
    
    {
      payment_method: details.payment_method,
      reciever:details.name,
      phone_no:details.phone_no,
      address:details.address
    }
    , {headers:authHeader()});
  }






  
  adminGetAllProduct() {
    return axios.get(API_ADMIN + "all_product", { headers: adminAuthHeader() });
  }
  admin_get_single_product(param) {
    return axios.get(API_ADMIN + "single_product/" + param , {headers:  adminAuthHeader()});
  }
  delete_product(id) {
    return axios.delete(API_ADMIN + "delete_product/" + id, {
      headers:  adminAuthHeader(),
    });
  }
  get_all_customers() {
    return axios.get(API_ADMIN + "getAllCustomers", { headers: adminAuthHeader() });
  }
  get_all_orders() {
    return axios.get(API_ADMIN + "all_transactions", { headers: adminAuthHeader() });
  }
  add_product(prods) {
    return axios.post(
      API_ADMIN + "add_product",
      {
        product_name: prods.name,
        normal_price: prods.nprice,
        wholesale_price: prods.wprice,
        description: prods.description,
        product_unit: prods.unit,
        category: prods.cate,
        quantity: prods.quantity,
        product_image: prods.img,
      },
      { headers:  adminAuthHeader() }
    );
  }
  update_product(prods) {
    return axios.post(
      API_ADMIN + "product_update/"+ prods.id,
      {
        product_name: prods.product_name.toString(),
        normal_price: prods.normal_price.toString(),
        wholesale_price: prods.wholesale_price.toString(),
        // description: prods.description.toString(),
        product_unit: prods.product_unit.toString(),
        category: prods.category.toString(),
        quantity: prods.quantity.toString(),
        product_image: prods.product_image.toString(),
      },
      { headers:  adminAuthHeader() }
    );
  }
  get_single_customer(param) {
    return axios.get(API_ADMIN + "getAllCustomers/" + param, {
      headers:  adminAuthHeader(),
    });
  }

  add_category(cate) {
    return axios.post(
      API_ADMIN + "add_category",
      {
        category: cate,
      },
      { headers:  adminAuthHeader() }
    );
  }

  get_all_category() {
    return axios.get(API_ADMIN + "all_category", { headers:  adminAuthHeader() });
  }
  // get_all_orders() {
  //   return axios.get(API_ADMIN + "all_category", { headers:  adminAuthHeader() });
  // }
}

export default new ProductService();
