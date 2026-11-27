
import { useState } from "react";
import { useAnimalContext } from "../HooksPerso/useAnimalContext"

import {useNavigate} from 'react-router-dom'

export default function AddPAge(){
     // récupération d'une des methode du context grace au hookPerso
    const { addAnimal } = useAnimalContext()

   // instance pour la récupération des valeurs du formulaires
    const [newAnimal, setNewAnimal] = useState({
        type: "",
        race: "",
        couleur: "",
        age: 0,
        maladiechronique: "",
        image: "",
    })

// import et utilisation du useNavigate qui permet de rediriger l'utilisateur 
    const navigate = useNavigate()

 // methode qui appel l'ajout du context ce qui permet une gestion des erreurs avant la soumission
    const addAnimalToContext = () => {
        if (newAnimal === null) {
            console.log();

        } else {
            addAnimal(newAnimal)
            navigate('/liste')
        }
    }


    return (
        <>
            <h1>AddPAge</h1>
            <div>
            <div>
                <label>type</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, type: e.target.value }))} />
                
            </div>
            <div>
                <label>race</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, race: e.target.value }))} />
            </div>
                <label>couleur</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, couleur: e.target.value }))} />
                
            <div>
                <label>age</label>
                    <input type="number" onChange={(e) => setNewAnimal((prev) => ({ ...prev, age: e.target.value }))} />
                
            </div>
             <div>
                <label>maladiechronique</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, maladiechronique: e.target.value }))} />
                
            </div> 
            <div>
                <label>maladiechronique</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, maladiechronique: e.target.value }))} />
                
            </div> 
            <div>
                    <label>image</label>
                    <input type="text" onChange={(e) => setNewAnimal((prev) => ({ ...prev, image: e.target.value }))} />
                </div>
                {newAnimal.image.length > 0 ? (<img src={newAnimal.image} alt="" width="200px" />) : null }
                
                {/*ici on déclenche l'ajout */}
                <button onClick={() => addCarToContext()}>Add</button>

                {/*redirection avec le navigate ( instance de useNavigate )*/}
                <button onClick={() => navigate('liste')}>retour</button>
            </div>
        </>
    )
}