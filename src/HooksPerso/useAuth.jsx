import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";


export function useAuth(){
    const context = useContext(AuthContext)

    if (!context){
        throw new Error("Le context n'est pas disponible sur cette page");     
    }

    return context
}