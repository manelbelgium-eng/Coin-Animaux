import { useNavigate } from "react-router-dom"
import { useAnimalContext } from "../HooksPerso/useAnimalContext"



export default function ListeAnimal(){

    const {getAnimaux,deleteAnimal} = useAnimalContext()

    const navigate = useNavigate()

    const listeAnimals = getAnimaux()

    return (
        <>
            <h1>ListeAnimal</h1>

            <ul>

            {listeAnimals.map((a) => (
                <li key={a.id}>
                    <div>
                    <h2>{a.type}</h2>
                    <p>{a.description}</p>
                    <p>{a.type} </p>
                    <p>{a.race} </p>
                    <p>{a.age}</p>
                    <div>
                                <button onClick={() => navigate(`/details/${a.id}`)}>Details</button>
                                <button onClick={() => navigate(`/update/${a.id}`)}>Update</button>
                                <button onClick={() => deleteAnimal(a.id)}>Delete</button>
                            </div>
                      </div>   
                       <img src={a.image} alt={a.model} />   
                </li>

                
            ))}
            </ul>

        </>
    )
}