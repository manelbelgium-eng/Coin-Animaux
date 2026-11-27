/*export default function UpdatePAge(){

    return (
        <>
            <h1>UpdatePAge</h1>

            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia exercitationem laborum dolores officiis? Possimus et iusto nemo culpa expedita quaerat, sunt ad? Omnis, delectus temporibus. Iste sit eaque laudantium.</p>
            </div>

        </>
    )
}*/

import { useParams,useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useAnimalContext } from '../hooksPerso/useAnimalContext';

export default function UpdatePage() {
// récupération des methodes necessaires depuis le hookPerso
    const {getAnimalById,updateAnimal,deleteAnimal} = useAnimalContext()

    // useParams : permet de récupérer un paramètre dans la route ("update/:id")
    // Attention le paramètre récupérer depuis la route est de type "String"
    const {id} = useParams()

    // appel du contexte pour la récupération d'un véhicule
    const [Animal,SetAnimal] = useState(() => getAnimalById(id))

// methode qui permet de gérer les cas d'erreur avant d'effectuer la soumission
    const updateAnimalPage = () => {
        if(Animal.model.length > 3){
            updateAnimal(id,Animal)
            navigate('/liste')
        }
    }

    const navigate = useNavigate()

    return (
        <>
            <h1>UpdatePage</h1>

            <div>

                <div>
                    <label>type</label>
                    <input type="text" value={Animal.type} onChange={(e) => SetAnimal((prev) => ({ ...prev, type: e.target.value }))} />
                </div>

                <div>
                    <label>race</label>
                    <input type="text" value={Animal.race} onChange={(e) => SetAnimal((prev) => ({ ...prev, race: e.target.value }))} />
                </div>

                <div>
                    <label>couleur</label>
                    <input type="text" value={Animal.couleur} onChange={(e) => SetAnimal((prev) => ({ ...prev, couleur: e.target.value }))} />
                </div>
                
                <div>
                    <label>age</label>
                    <input type="number" value={Animal.age} onChange={(e) => SetAnimal((prev) => ({ ...prev, age: e.target.value }))} />
                </div>
                
                <div>
                    <label>maladiechronique</label>
                    <input type="text" value={Animal.maladiechronique} onChange={(e) => SetAnimal((prev) => ({ ...prev, maladiechronique: e.target.value }))} />
                </div>
                
                
                <div>
                    <label>image</label>
                    <input type="text" value={Animal.image} onChange={(e) => SetAnimal((prev) => ({ ...prev, image: e.target.value }))} />
                </div>
                
                {Animal.image.length > 0 ? <img src={Animal.image} alt="" width="200px" /> : null}

                <button onClick={() => updateAnimalPage()}>Update</button>
                <button onClick={() => deleteAnimal(Animal.id)}>Delete</button>

                <button onClick={() => navigate('/liste')}>retour</button>

            </div>
        </>
    )
}