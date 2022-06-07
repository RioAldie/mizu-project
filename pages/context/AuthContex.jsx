import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";


const AuthCtxdeafultvalue = {
    isLogin: true,
    setIslogin: state => {}
}
export const AuthCtx = createContext(AuthCtxdeafultvalue);

const AuthContextProvider = ({children}) =>{
    const [isLogin, setIslogin] = useState(AuthCtxdeafultvalue.isLogin);
    // const CurrentUserLclStorage = localStorage.getItem("user");
    // useEffect(()=>{
        
    //     if(CurrentUserLclStorage != null){
    //         setIslogin(true);
    //     }
    // },[CurrentUserLclStorage,setIslogin])
    return(
        <AuthCtx.Provider value={{isLogin, setIslogin}}>
            {children}
        </AuthCtx.Provider>
    )
}
export default AuthContextProvider;