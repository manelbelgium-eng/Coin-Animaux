import { useContext } from "react";
import { AnimalContext } from "../Context/Animaux";


export function useAnimalContext(){
    const context = useContext(AnimalContext)

    if (!context){
        throw new Error("Le context n'est pas disponible sur cette page");     
    }

    return context
}