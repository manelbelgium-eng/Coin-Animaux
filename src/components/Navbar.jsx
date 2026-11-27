import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../HooksPerso/useAuth";


/* ================================================================
   NAVBAR
   ================================================================ */
export default function Navbar() {

  const {login ,logout , getUserState} = useAuth()

  // booléen pour l'état de connection
  const [user, setUser] = useState(null)

  // action connection
  const loginPage = () => {
    setUser(
    login(loginForm.email,loginForm.password)
  )

  }

  const logoutPage = () => {
    logout()
    setUser(null)
  }
  

  // affiche ou non le formulaire login
  const [isOpen, setIsOpen] = useState(false)

  // valeur pour récupérer les informations des inputs
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  })




  return (
    /* <nav className="navbar">
       <Link to="/" end>Accueil</Link>
       <Link to="/tarifs">Tarifs</Link>
       <Link to="/galerie">Galerie photos</Link>
       <Link to="/gardiennages" end>Réservations</Link>
       <Link to="/gardiennages/nouveau">Réserver une garde</Link>
     </nav>*/
    <nav className="navbar">
      <Link to="/" >Homepage</Link>
      <Link to="/add" >AddPAge</Link>
      <Link to="/liste">ListePage</Link>
      {user ? 
        <Link to="/liste">Profil</Link>
      :
      null
      }


      {user === null ?
        <>
          <button className={!isOpen ? "visible" : "hidden"} onClick={() => setIsOpen(true)}>Login</button>

          <div className={isOpen ? "visible" : "hidden"}>
            <div>
              <label>Email</label>
              <input type="text" onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
            </div>
            <button onClick={() => loginPage()}>Login</button>
          </div>
        </>
        :
        <button onClick={() => logoutPage()}>logout</button>

      }
    </nav>

  );
}