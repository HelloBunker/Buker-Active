import AuthService from '../services/auth.service';
const admin = JSON.parse(localStorage.getItem('admin'));
const adminInitialState = admin
? {status: {loggedIn:true}, admin}
:{status:  {loggedIn:false }, admin:null};


export const AdminAuth = {
    namespaced: true,
    state: adminInitialState,
    actions: {
        adminlogin({commit},admin){
            return AuthService.adminLogin(admin).then(
                admin => {
                    commit('loginSuccess', admin);
                    return  Promise.resolve(admin); 
                },
                error  =>  {
                    commit('loginFailure');
                    return  Promise.reject(error); 
                }
            );
        },
        adminlogout({commit}){
            AuthService.admin_logout();
            commit('logout');
        },
       
       admin_profile_update({commit},admin){
            return AuthService.admin_update_profile(admin).then(
                response => {
                    commit('updateSuccess');
                    return  Promise.resolve(response.data); 
                },
                error  =>  {
                    commit('updateFailure');
                    return  Promise.reject(error); 
                }
            );
        },
        password_update({commit},admin){
            return AuthService.password_update(admin).then(
                response => {
                    commit('updateSuccess');
                    return  Promise.resolve(response.data); 
                },
                error  =>  {
                    commit('updateFailure');
                    return  Promise.reject(error); 
                }
            );
        },
    },
    mutations: {
        loginSuccess(state,admin){
            state.status.loggedIn = true;
            state.admin = admin;

        },
        loginFailure(state){
            state.status.loggedIn = false;
            state.admin  = null;
        },
        logout(state){
            state.status.loggedIn = false;
            state.admin  = null;
        },
        registerSuccess(state){
            state.status.loggedIn = false;
        },
        updateSuccess(state){
            state.status.loggedIn = true;
        },
        registerFailure(state){
            state.status.loggedIn = false;
        },
        updateFailure(state){
            state.status.loggedIn = true;
        }
    }
}