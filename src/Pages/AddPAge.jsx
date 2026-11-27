/*
import { useState } from "react";
import { useAnimalContext } from "../HooksPerso/useAnimalContext"

import {useNavigate} from 'react-router-dom'

const styles = {
  page: { maxWidth: "480px", margin: "0 auto", padding: "1rem" },
  title: { textAlign: "center", marginBottom: "1.5rem" },
  form: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
  },
  group: { display: "flex", flexDirection: "column", marginBottom: "1rem", textAlign: "left" },
  label: { fontWeight: 600, marginBottom: "0.3rem" },
  input: {
    padding: "0.6rem",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "1rem",
  },
  preview: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginTop: "0.5rem",
  },
  actions: { display: "flex", gap: "0.75rem", marginTop: "1.5rem" },
  btn: {
    flex: 1,
    padding: "0.7rem",
    borderRadius: "8px",
    border: "2px solid #e67e22",
    background: "#e67e22",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
  },
  btnSecondary: { background: "#fff", color: "#e67e22" },
}

// Description des champs : pour en ajouter/retirer, on modifie seulement cette liste
const champs = [
  { name: "type", label: "Type d'animal", type: "select", options: ["Chien", "Chat", "Lapin", "Poisson", "Autre"] },
  { name: "race", label: "Race", type: "text", placeholder: "ex : berger allemand" },
  { name: "couleur", label: "Couleur", type: "text", placeholder: "ex : noir et feu" },
  { name: "age", label: "Âge (en années)", type: "number", placeholder: "ex : 3" },
  { name: "maladiechronique", label: "Maladie chronique", type: "text", placeholder: "Aucune si rien à signaler" },
  { name: "remarques", label: "Traitement / remarques", type: "text", placeholder: "ex : médicament matin et soir" },
  { name: "image", label: "Photo (lien URL)", type: "url", placeholder: "https://..." },
]

const initial = {
  type: "Chien", race: "", couleur: "", age: "",
  maladiechronique: "", remarques: "", image: "",
}

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
                
                //ici on déclenche l'ajout 
                <button onClick={() => addCarToContext()}>Add</button>

                //redirection avec le navigate ( instance de useNavigate )
                <button onClick={() => navigate('liste')}>retour</button>
            </div>
        </>
    )
}*/

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAnimalContext } from "../HooksPerso/useAnimalContext"
/*
// ===== Styles =====
const styles = {
   // page: { maxWidth: "480px", margin: "0 auto", padding: "1rem" , },
    page: {
        maxWidth: "520px",
        margin: "1rem auto",
        padding: "1.5rem",
        background: "linear-gradient(135deg, #fdebd0, #f5cba7)",
        borderRadius: "16px",
    },
    title: { textAlign: "center", marginBottom: "1.5rem" },
    form: {
        background: "#fff",
        padding: "1.5rem",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    },
    group: { display: "flex", flexDirection: "column", marginBottom: "1rem", textAlign: "left" },
    label: { fontWeight: 600, marginBottom: "0.3rem" },
    input: { padding: "0.6rem", border: "1px solid #ccc", borderRadius: "6px", fontSize: "1rem" },
    preview: { width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px", marginBottom: "1rem" },
    error: { color: "#c0392b", marginBottom: "1rem" },
    actions: { display: "flex", gap: "0.75rem", marginTop: "1rem" },
    btn: {
        flex: 1, padding: "0.7rem", borderRadius: "8px", border: "2px solid #e67e22",
        background: "#e67e22", color: "#fff", fontWeight: 600, fontSize: "1rem", cursor: "pointer",
    },
    btnSecondary: { background: "#fff", color: "#e67e22" },
}*/

// ===== Styles =====
const styles = {
    page: {
        maxWidth: "520px",
        margin: "1rem auto",
        padding: "1.5rem",
        background: "linear-gradient(135deg, #fdebd0, #f5cba7)",
        borderRadius: "16px",
    },
    title: { textAlign: "center", marginBottom: "1.5rem", color: "#b9600f" },
    form: {
        background: "#fff7ee",
        padding: "1.5rem",
        borderRadius: "12px",
        borderTop: "6px solid #e67e22",
        boxShadow: "0 4px 12px rgba(230,126,34,0.25)",
    },
    group: { display: "flex", flexDirection: "column", marginBottom: "1rem", textAlign: "left" },
    label: { fontWeight: 600, marginBottom: "0.3rem", color: "#b9600f" },
    input: {
        padding: "0.6rem",
        border: "2px solid #fdebd0",
        borderRadius: "8px",
        fontSize: "1rem",
        background: "#fff",
    },
    preview: {
        width: "100%", height: "180px", objectFit: "cover",
        borderRadius: "8px", marginBottom: "1rem",
        border: "3px solid #e67e22",
    },
    error: { color: "#c0392b", fontWeight: 600, marginBottom: "1rem" },
    actions: { display: "flex", gap: "0.75rem", marginTop: "1rem" },
    btn: {
        flex: 1, padding: "0.7rem", borderRadius: "8px", border: "2px solid #e67e22",
        background: "#e67e22", color: "#fff", fontWeight: 600, fontSize: "1rem", cursor: "pointer",
    },
    btnSecondary: { background: "#fff", color: "#e67e22" },
}


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
        remarques: "",
        image: "",
    })

    // message d'erreur affiché sous le formulaire
    const [erreur, setErreur] = useState("")

    // import et utilisation du useNavigate qui permet de rediriger l'utilisateur
    const navigate = useNavigate()

    // une seule fonction pour tous les champs : le "name" de l'input sert de clé
    const handleChange = (e) => {
        const { name, value } = e.target
        setNewAnimal((prev) => ({ ...prev, [name]: value }))
    }

    // methode qui appel l'ajout du context ce qui permet une gestion des erreurs avant la soumission
    const addAnimalToContext = () => {
        if (newAnimal.type.trim() === "" || newAnimal.race.trim() === "") {
            setErreur("Le type et la race sont obligatoires.")
            return
        }
        setErreur("")
        addAnimal({ ...newAnimal, age: Number(newAnimal.age) })
        navigate('/liste')
    }

    return (
        <div style={styles.page}>
            <h1 style={styles.title}>Déposer un animal</h1>

            <div style={styles.form}>
                <div style={styles.group}>
                    <label style={styles.label}>Type</label>
                    <input style={styles.input} type="text" name="type"
                        placeholder="ex : Chien" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Race</label>
                    <input style={styles.input} type="text" name="race"
                        placeholder="ex : berger allemand" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Couleur</label>
                    <input style={styles.input} type="text" name="couleur"
                        placeholder="ex : noir et feu" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Âge (en années)</label>
                    <input style={styles.input} type="number" name="age" min="0"
                        placeholder="ex : 3" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Maladie chronique</label>
                    <input style={styles.input} type="text" name="maladiechronique"
                        placeholder="Aucune si rien à signaler" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Traitement / remarques</label>
                    <input style={styles.input} type="text" name="remarques"
                        placeholder="ex : médicament matin et soir" onChange={handleChange} />
                </div>

                <div style={styles.group}>
                    <label style={styles.label}>Photo (lien URL)</label>
                    <input style={styles.input} type="text" name="image"
                        placeholder="https://..." onChange={handleChange} />
                </div>

                {newAnimal.image.length > 0 ? (
                    <img src={newAnimal.image} alt="Aperçu" style={styles.preview}
                        onError={(e) => (e.target.style.display = "none")}
                        onLoad={(e) => (e.target.style.display = "block")} />
                ) : null}

                {erreur && <p style={styles.error}>{erreur}</p>}

                <div style={styles.actions}>
                    {/* redirection avec le navigate ( instance de useNavigate ) */}
                    <button style={{ ...styles.btn, ...styles.btnSecondary }}
                        onClick={() => navigate('/liste')}>Retour</button>

                    {/* ici on déclenche l'ajout */}
                    <button style={styles.btn} onClick={addAnimalToContext}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}