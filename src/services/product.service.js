import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://test-api.hellobunker.xyz/api/user/";
const API_ADMIN = "https://test-api.hellobunker.xyz/api/admin/";

class ProductService {
  getAllProduct() {
    return axios.get(API_URL + "fetch_guest_products");
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
  adminGetAllProduct() {
    return axios.get(API_ADMIN + "all_product", { headers: authHeader() });
  }
  delete_product(id) {
    return axios.delete(API_ADMIN + "delete_product/" + id, {
      headers: authHeader(),
    });
  }
  get_all_customers() {
    return axios.get(API_ADMIN + "getAllCustomers", { headers: authHeader() });
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
      { headers: authHeader() }
    );
  }
  get_single_customer(param) {
    return axios.get(API_ADMIN + "getAllCustomers/" + param, {
      headers: authHeader(),
    });
  }

  add_category(cate) {
    return axios.post(
      API_ADMIN + "add_category",
      {
        category: cate,
      },
      { headers: authHeader() }
    );
  }

  get_all_category() {
    return axios.get(API_ADMIN + "all_category", { headers: authHeader() });
  }
}

export default new ProductService();
