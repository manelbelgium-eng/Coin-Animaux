
import {useParams} from 'react-router-dom'
import { useAnimalContext } from "../HooksPerso/useAnimalContext"


export default function DetailsPAge(){
const {getAnimalById} = useAnimalContext()

    // useParams : permet de récupérer un paramètre dans la route ("update/:id")
    // Attention le paramètre récupérer depuis la route est de type "String"
    const {id} = useParams()

    // appel du contexte pour la récupération d'un véhicule
    const Animal = getAnimalById(id)

    

    return(
        <>
            <h1>DetailsPage</h1>

            <div>
                <p>{Animal.type}</p>
                <p>{Animal.race}</p>
                <img src={Animal.image} alt={Animal.type} width="200"/>
            </div>
        </>
    )
}