/*import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage';
import Tarifs from './Pages/Tarifs';
import Gallerie from './Pages/Gallerie';

/*

================================================================
   CSS (injecté via <style>, donc aucun fichier .css à créer)
   ================================================================ */
/*const CSS = `
.site { background:#fff8f0; color:#3b2a1e; line-height:1.6; text-align:left; min-height:100vh; }
.site h1, .site h2, .site h3 { color:#c2571a; margin:0 0 .75rem; }
.site a { color:#c2571a; }
.site section { padding:3rem 1.5rem; }
.contenu { max-width:1000px; margin:0 auto; }
.page { max-width:1000px; margin:0 auto; padding:2rem 1.5rem; }

.navbar { display:flex; flex-wrap:wrap; gap:1rem; padding:1rem 1.5rem; background:#fff; border-bottom:2px solid #e8731f; }
.navbar a { text-decoration:none; font-weight:600; }
.navbar a.active { border-bottom:2px solid #e8731f; }

.btn { display:inline-block; background:#e8731f; color:#fff !important; padding:.6rem 1.3rem; border-radius:999px; text-decoration:none; font-weight:600; border:none; cursor:pointer; font-size:1rem; }
.btn:hover { background:#c2571a; }
.btn-sec { background:transparent; color:#c2571a !important; border:2px solid #e8731f; }
.btn-sec:hover { background:#e8731f; color:#fff !important; }
.btn-danger { background:#d63b3b; }

.hero .contenu { display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center; }
.hero-image { background:#ffe3c8; border-radius:24px; min-height:280px; display:grid; place-items:center; font-size:6rem; }
.cartes { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; margin-top:1.5rem; }
.carte { background:#fff; border-radius:16px; padding:1.25rem; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.carte .icone { font-size:2rem; }
.dispo { background:#ffe9d4; }
.dispo ul { list-style:none; padding:0; margin:1rem 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:.75rem; }
.dispo li { background:#fff; border-radius:12px; padding:.75rem 1rem; }
.badge { display:inline-block; padding:.1rem .6rem; border-radius:999px; font-size:.8rem; font-weight:700; color:#fff; }
.badge.libre { background:#2e9b4f; }
.badge.complet { background:#d63b3b; }
.contact { background:#3b2a1e; color:#fff8f0; }
.contact h2, .contact a { color:#ffb37a; }

.tableau { width:100%; border-collapse:collapse; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.tableau th, .tableau td { padding:.75rem 1rem; text-align:left; border-bottom:1px solid #f0dfcf; }
.tableau th { background:#e8731f; color:#fff; }

.galerie { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:1rem; }
.galerie button { border:none; background:#ffe3c8; border-radius:16px; min-height:160px; font-size:4rem; cursor:pointer; padding:0; }
.galerie button:hover { transform:scale(1.03); }
.fond-agrandi { position:fixed; inset:0; background:rgba(0,0,0,.8); display:grid; place-items:center; font-size:10rem; cursor:pointer; z-index:10; }

.liste { list-style:none; padding:0; display:grid; gap:.75rem; }
.liste li { background:#fff; border-radius:12px; padding:1rem; box-shadow:0 2px 8px rgba(0,0,0,.08); display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; justify-content:space-between; }
.actions { display:flex; gap:.5rem; align-items:center; }

.formulaire { display:grid; gap:.6rem; max-width:360px; }
.formulaire input, .formulaire select, .formulaire textarea { padding:.5rem; border:1px solid #d9c3ae; border-radius:8px; font-size:1rem; background:#fff; color:#3b2a1e; }
.erreur { color:#d63b3b; margin:0; }

@media (max-width:700px) { .hero .contenu { grid-template-columns:1fr; } }
`;
*/
/* ================================================================
   CONTEXT : le store partagé (CRUD sur l'entité Gardiennage)
   ================================================================ */
// const GardiennagesContext = createContext(null);

// const DONNEES_INITIALES = [
//   {
//     id: 1,
//     nomAnimal: "Rex",
//     espece: "Chien",
//     proprietaire: "Sophie Martin",
//     service: "Pension",
//     dateDebut: "2026-12-20",
//     dateFin: "2026-12-27",
//     notes: "Mange deux fois par jour, aime les balades.",
//   },
//   {
//     id: 2,
//     nomAnimal: "Misty",
//     espece: "Chat",
//     proprietaire: "Luc Dupont",
//     service: "Garde à domicile",
//     dateDebut: "2026-12-24",
//     dateFin: "2026-12-26",
//     notes: "Médicament le matin.",
//   },
// ];

// function reducer(state, action) {
//   switch (action.type) {
//     case "ADD":
//       return [...state, { ...action.payload, id: Date.now() }];
//     case "UPDATE":
//       return state.map((g) => (g.id === action.payload.id ? action.payload : g));
//     case "DELETE":
//       return state.filter((g) => g.id !== action.payload);
//     default:
//       return state;
//   }
// }

// function charger(init) {
//   try {
//     const saved = localStorage.getItem("gardiennages");
//     return saved ? JSON.parse(saved) : init;
//   } catch {
//     return init;
//   }
// }

// function GardiennagesProvider({ children }) {
//   const [gardiennages, dispatch] = useReducer(reducer, DONNEES_INITIALES, charger);

//   useEffect(() => {
//     localStorage.setItem("gardiennages", JSON.stringify(gardiennages));
//   }, [gardiennages]);

//   const ajouter = (g) => dispatch({ type: "ADD", payload: g });
//   const modifier = (g) => dispatch({ type: "UPDATE", payload: g });
//   const supprimer = (id) => dispatch({ type: "DELETE", payload: id });

//   return (
//     <GardiennagesContext.Provider value={{ gardiennages, ajouter, modifier, supprimer }}>
//       {children}
//     </GardiennagesContext.Provider>
//   );
// }

// function useGardiennages() {
//   return useContext(GardiennagesContext);
// }

// function nombreJours(debut, fin) {
//   const diff = new Date(fin) - new Date(debut);
//   return Math.max(1, Math.round(diff / 86400000));
// }



/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
*/

/*
function App(){
  return (
    <>
      <Router>

        <Navbar/>
        
        <Routes>
          <Route path="" element={<Homepage/>} />
          <Route path="tarifs" element={<Tarifs/>}/>
          <Route path="galerie" element={<Gallerie/>}/>

        </Routes>

      </Router>
    </>
  )
}
export default */

import Navbar from "./components/Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx";


import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import { AnimalProvider } from "./Context/Animaux.jsx";
import ListeAnimal from "./Pages/ListeAnimal.jsx";
import UpdatePAge from "./Pages/UpdatePage.jsx";
import DetailsPAge from "./Pages/DetailsPAge.jsx";
import AddPAge from "./Pages/AddPAge.jsx";
//import ListeAnimal from "./Pages/ListeAnimal.jsx";


const CSS = `
.site { background:#fff8f0; color:#3b2a1e; line-height:1.6; text-align:left; min-height:100vh; }
.site h1, .site h2, .site h3 { color:#c2571a; margin:0 0 .75rem; }
.site a { color:#c2571a; }
.site section { padding:3rem 1.5rem; }
.contenu { max-width:1000px; margin:0 auto; }
.page { max-width:1000px; margin:0 auto; padding:2rem 1.5rem; }

.navbar { display:flex; flex-wrap:wrap; gap:1rem; padding:1rem 1.5rem; background:#fff; border-bottom:2px solid #e8731f; }
.navbar a { text-decoration:none; font-weight:600; }
.navbar a.active { border-bottom:2px solid #e8731f; }

.btn { display:inline-block; background:#e8731f; color:#fff !important; padding:.6rem 1.3rem; border-radius:999px; text-decoration:none; font-weight:600; border:none; cursor:pointer; font-size:1rem; }
.btn:hover { background:#c2571a; }
.btn-sec { background:transparent; color:#c2571a !important; border:2px solid #e8731f; }
.btn-sec:hover { background:#e8731f; color:#fff !important; }
.btn-danger { background:#d63b3b; }

.hero .contenu { display:grid; grid-template-columns:1fr 1fr; gap:2rem; align-items:center; }
.hero-image { background:#ffe3c8; border-radius:24px; min-height:280px; display:grid; place-items:center; font-size:6rem; }
.cartes { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1rem; margin-top:1.5rem; }
.carte { background:#fff; border-radius:16px; padding:1.25rem; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.carte .icone { font-size:2rem; }
.dispo { background:#ffe9d4; }
.dispo ul { list-style:none; padding:0; margin:1rem 0 0; display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:.75rem; }
.dispo li { background:#fff; border-radius:12px; padding:.75rem 1rem; }
.badge { display:inline-block; padding:.1rem .6rem; border-radius:999px; font-size:.8rem; font-weight:700; color:#fff; }
.badge.libre { background:#2e9b4f; }
.badge.complet { background:#d63b3b; }
.contact { background:#3b2a1e; color:#fff8f0; }
.contact h2, .contact a { color:#ffb37a; }

.tableau { width:100%; border-collapse:collapse; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,.08); }
.tableau th, .tableau td { padding:.75rem 1rem; text-align:left; border-bottom:1px solid #f0dfcf; }
.tableau th { background:#e8731f; color:#fff; }

.galerie { display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:1rem; }
.galerie button { border:none; background:#ffe3c8; border-radius:16px; min-height:160px; font-size:4rem; cursor:pointer; padding:0; }
.galerie button:hover { transform:scale(1.03); }
.fond-agrandi { position:fixed; inset:0; background:rgba(0,0,0,.8); display:grid; place-items:center; font-size:10rem; cursor:pointer; z-index:10; }

.liste { list-style:none; padding:0; display:grid; gap:.75rem; }
.liste li { background:#fff; border-radius:12px; padding:1rem; box-shadow:0 2px 8px rgba(0,0,0,.08); display:flex; flex-wrap:wrap; gap:.75rem; align-items:center; justify-content:space-between; }
.actions { display:flex; gap:.5rem; align-items:center; }

.formulaire { display:grid; gap:.6rem; max-width:360px; }
.formulaire input, .formulaire select, .formulaire textarea { padding:.5rem; border:1px solid #d9c3ae; border-radius:8px; font-size:1rem; background:#fff; color:#3b2a1e; }
.erreur { color:#d63b3b; margin:0; }

@media (max-width:700px) { .hero .contenu { grid-template-columns:1fr; } }
`;

export default function App(){

  return (
    <AnimalProvider>


      <Router>

        <Navbar/>

        <Routes>
            <Route path="" element={<Homepage/>}  />
            <Route path="add" element={<AddPAge/>} />
            <Route path="liste" element={<ListeAnimal/>} />
            <Route path="update/:id" element={<UpdatePAge/>} />
            <Route path="details/:id" element={<DetailsPAge/>} />


        </Routes>

      </Router>
    </AnimalProvider>

  )
}

