import { useAnimalContext } from "../hooksPerso/useAnimalContext"



export default function ListePage(){

    const {getAnimaux} = useAnimalContext()

    const listeAnimals = getAnimaux()

    return (
        <>
            <h1>ListePage</h1>

            <ul>

            {listeAnimals.map((a) => (
                <li>
                    <div>
                    <h2>{a.type}</h2>
                    <p>{a.description}</p>
                    <p>{a.type} </p>
                    <p>{a.race} </p>
                    <p>{a.age}</p>
                    <div>
                                <button>Details</button>
                                <button>Update</button>
                                <button onClick={() => deleteCar(a.id)}>Delete</button>
                            </div>
                      </div>   
                       <img src={a.image} alt={a.model} />   
                </li>

                
            ))}
            </ul>

        </>
    )
}