import React,{useContext, useEffect, useState} from "react";
import auth from "../Firebase/Firebase";

export const AuthContext=React.createContext(
    // name:'Nischal',
    // setName:'setname',
);
export const useAuth=()=>useContext(AuthContext);
export const Provider=(props)=>{
    const [name,setName]=useState('')
    return(
        <AuthContext.Provider value={{name,setName}}>
            {props.children}
        </AuthContext.Provider>
        
    )
}