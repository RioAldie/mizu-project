import React, { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";


const AuthCtxdeafultvalue = {
    isLogin: false,
    setIslogin: state => {}
}
export const AuthCtx = createContext(AuthCtxdeafultvalue);

const AuthContextProvider = ({children}) =>{
    
    const [isLogin, setIslogin] = useState(false);
    useEffect(()=>{
        //const user =JSON.parse(localStorage.getItem('user'));
        // console.log(isLogin)
        // if(user != null){
        //     setIslogin(true)
        // }
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            const item = localStorage.getItem('user')
            if(item != null){
                setIslogin(true);
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