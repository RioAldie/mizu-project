import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";


const AuthCtxdeafultvalue = {
    isLogin: false,
    setIslogin: state => {}
}
export const AuthCtx = createContext(AuthCtxdeafultvalue);

const AuthContextProvider = ({children}) =>{
    const [isLogin, setIslogin] = useState(AuthCtxdeafultvalue.isLogin);
    // const CurrentUserLclStorage = localStorage.getItem("user");
    useEffect(()=>{
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            console.log(isLogin)
            const item = localStorage.getItem('user')
            if(item != null){
                console.log('login berhasil')
                setIslogin(true);
                console.log(isLogin)
            }
          }
    },[isLogin,setIslogin])
    return(
        <AuthCtx.Provider value={{isLogin, setIslogin}}>
            {children}
        </AuthCtx.Provider>
    )
}
export default AuthContextProvider;