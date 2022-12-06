import { createStore } from "vuex";
import {auth} from "./auth.module.js"
import {AdminAuth} from "./AdminAuth.module.js"
import {prod} from "./prod.module.js"
import {customer} from "./customer.module.js"

const store = createStore({
    modules: {
        auth,
        prod,
        AdminAuth,
        customer,
    },
});
export default store;