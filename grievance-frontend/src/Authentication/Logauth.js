//is Logged in
export const isLoggedIn = () =>{
    let data = localStorage.gatItem("data");
    if(data != null)
        return true;
    else
        return false;
    
};


//doLogin
export const doLogin=(data,next) => {
    localStorage.setItem("data", JSON.stringify(data));
    next()
};


//doLogout

export const doLogout = (next) =>{
    localStorage.removeItem("data");
    next()
};

//get currentUser

export const getCurrentUserDetail = () =>{
    if (isLoggedIn){
        return JSON.parse(localStorage.getItem("data"));
    }else{
        return false;
    }

};