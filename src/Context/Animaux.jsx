import {createContext,useState} from 'react'


// implémentation 

// création d'un context
export const AnimalContext = createContext(null)

// Provider : fournisseur d'informations et d'actions
export function AnimalProvider({children}){
    // données
  const [Animaux, setAnimaux] = useState([
    {
      id: 1,
      type: "Chien",
      race: "berger",
      couleur: "marron",
      age: 2,
      maladiechronique: "rien",
      image: "https://placedog.net/500/300?id=12",
    },
    {
      id: 2,
     type: "Chat",
      race: "bengal",
      couleur: "gris",
      age: 1,
      maladiechronique: "rien",
      image: "https://cataas.com/cat?width=500&height=300",
    },
    {
      id: 3,
      type: "Lapin",
      race: "Rex",
      couleur: "jaune",
      age: 3,
      maladiechronique: "rien",
      image: "https://media.gettyimages.com/id/1772951926/fr/photo/white-rabbit.jpg?s=612x612&w=0&k=20&c=cxGABSCypAbdw_8bMb7x41dtRSLmwnXBui3cHga3YLc=",
    },
    {
      id: 4,
      type: "Poisson",
      race: "Combattant",
      couleur: "bleu",
      age: 1,
      maladiechronique: "Rien",
      image: "https://www.thesprucepets.com/thmb/YNnDeLTuwTUTYQ-9eMyTR8dmTaA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(2880x0:2882x2):format(webp)/siamese-fighting-fish-bettas-1378308-hero-f459084da1414308accde7e21001906c.jpg",
    },
  ]);

// actions

const addAnimal = (newAnimal) => {
    newAnimal.id = Animaux[Animaux.length - 1].id + 1
    setAnimaux((prev) => [...prev,newAnimal])
}

const getAnimaux = () => {
    return Animaux
}

const getAnimalById = (id) => {
    const index = Animaux.findIndex((c) => c.id === Number(id))
    return Animaux[index]
}


const updateAnimal = (id,Animal) => {
    setAnimaux((prev) => 
        prev.map((c) => c.id === id ? {...c,brand:Animal.band} : c))
}


const deleteAnimal = (id) => {
    setAnimaux((prev) => prev.filter((c) => c.id !== id))
}


// renvoyer certains éléments

return(
    <AnimalContext.Provider value={{Animaux,addAnimal,getAnimaux,getAnimalById,updateAnimal,deleteAnimal}}>
        {children}
    </AnimalContext.Provider>
)

}