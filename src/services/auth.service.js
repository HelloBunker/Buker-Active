import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://test-api.hellobunker.xyz/api/user/";
const API_ADMIN = "https://test-api.hellobunker.xyz/api/admin/";

class AuthService {
  async login(user) {
    const response = await axios
      .post(API_URL + "login", {
        email: user.email,
        password: user.password
      });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  async adminLogin(user) {
    const response = await axios
      .post(API_ADMIN + "login", {
        email: user.email,
        password: user.password
      });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }


  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "register", {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_no: user.phone_no,
      password: user.password,
      password_confirmation: user.password_confirmation,
    });
  }
  user_profile_update(user) {
    return axios.put(API_URL + "user_profile_update", {
    id: user.user_id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone_no: user.phone_no,
    
    },{headers:authHeader()}
    
    );
  }
  password_update(user) {
    return axios.put(API_URL + "password_update", {
    
      OldPassword: user.OldPassword,
      NewPassword: user.NewPassword,
      NewPassword_confirmation: user.NewPassword_confirmation,
    
    },{headers:authHeader()}
    
    );
  }

  

 
}
export default new AuthService();
