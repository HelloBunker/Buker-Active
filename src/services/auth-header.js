export default function authHeader(){  

    let user = JSON.parse(localStorage.getItem('user'));  
    let admin = JSON.parse(localStorage.getItem('admin'));  

    if(user && user.token){
        return {Authorization: 'Bearer ' + user.token};
    }else{  
        return {};
    }
    if(admin && admin.token){
        return {Authorization: 'Bearer ' + admin.token};
    }else{  
        return {};
    }
}