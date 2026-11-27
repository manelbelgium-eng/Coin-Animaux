import { Link } from "react-router-dom"


/* ================================================================
   NAVBAR
   ================================================================ */
export default function Navbar() {
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
      
    </nav>

  );
}