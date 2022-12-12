export default function adminAuthHeader(){  

    // let user = JSON.parse(localStorage.getItem('user'));  
    let admin = JSON.parse(localStorage.getItem('admin'));  


if(admin && admin.token){
    return {Authorization: 'Bearer ' + admin.token};
}else{  
    return {};
}
}