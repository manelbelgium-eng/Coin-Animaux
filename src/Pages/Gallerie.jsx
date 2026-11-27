import { useState, useEffect, useMemo } from "react";

const CATEGORIES = ["Tous", "Chiens", "Chats", "NAC"];

// Remplace plus tard "src" par tes vraies photos (ex: "/galerie/rex.jpg" dans public/galerie/)
const PHOTOS = [
  { id: 1, categorie: "Chiens", titre: "Rex en balade", src: "https://picsum.photos/seed/chien1/800/600" },
  { id: 2, categorie: "Chats", titre: "Mimi se détend", src: "https://picsum.photos/seed/chat1/800/600" },
  { id: 3, categorie: "Chiens", titre: "Séance de jeux", src: "https://picsum.photos/seed/chien2/800/600" },
  { id: 4, categorie: "NAC", titre: "Lapin curieux", src: "https://picsum.photos/seed/nac1/800/600" },
  { id: 5, categorie: "Chats", titre: "Sieste au soleil", src: "https://picsum.photos/seed/chat2/800/600" },
  { id: 6, categorie: "Chiens", titre: "Pause au jardin", src: "https://picsum.photos/seed/chien3/800/600" },
  { id: 7, categorie: "NAC", titre: "Cochon d'Inde", src: "https://picsum.photos/seed/nac2/800/600" },
  { id: 8, categorie: "Chats", titre: "Câlin du soir", src: "https://picsum.photos/seed/chat3/800/600" },
  { id: 9, categorie: "Chiens", titre: "Nouveaux amis", src: "https://picsum.photos/seed/chien4/800/600" },
];

const CSS = `
.galerie {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
}
.galerie-header {
  text-align: center;
  margin-bottom: 1.5rem;
}
.galerie-header h1 {
  margin: 0 0 0.4rem;
  font-size: 2.2rem;
}
.galerie-header p {
  margin: 0;
  opacity: 0.7;
}

/* Filtres */
.galerie-filtres {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.8rem;
}
.filtre {
  padding: 0.5rem 1.1rem;
  border: 2px solid #e07a3f;
  background: transparent;
  color: #e07a3f;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.filtre:hover,
.filtre.actif {
  background: #e07a3f;
  color: #fff;
}

/* Grille */
.galerie-grille {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.2rem;
}
.carte {
  position: relative;
  margin: 0;
  overflow: hidden;
  border-radius: 14px;
  aspect-ratio: 4 / 3;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}
.carte img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.carte:hover img {
  transform: scale(1.08);
}
.carte figcaption {
  position: absolute;
  inset: auto 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.5rem 0.9rem 0.8rem;
  color: #fff;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s;
}
.carte:hover figcaption {
  opacity: 1;
  transform: translateY(0);
}
.badge {
  align-self: flex-start;
  font-size: 0.7rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: #e07a3f;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.vide {
  text-align: center;
  opacity: 0.6;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.88);
  animation: fondu 0.2s ease;
}
.lb-contenu {
  margin: 0;
  max-width: 85vw;
  max-height: 85vh;
  text-align: center;
  color: #fff;
}
.lb-contenu img {
  max-width: 100%;
  max-height: 78vh;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}
.lb-contenu figcaption {
  margin-top: 0.7rem;
}
.lb-btn {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background 0.2s;
}
.lb-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}
.lb-close { top: 1.2rem; right: 1.2rem; }
.lb-prev  { left: 1.2rem; }
.lb-next  { right: 1.2rem; }

@keyframes fondu {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (max-width: 600px) {
  .galerie-grille { grid-template-columns: repeat(2, 1fr); gap: 0.7rem; }
  .carte figcaption { opacity: 1; transform: none; font-size: 0.8rem; }
  .lb-prev { left: 0.4rem; }
  .lb-next { right: 0.4rem; }
}
`;

export default function GaleriesPhotos() {
  const [categorie, setCategorie] = useState("Tous");
  const [index, setIndex] = useState(null); // index dans la liste filtrée

  const photos = useMemo(
    () =>
      categorie === "Tous"
        ? PHOTOS
        : PHOTOS.filter((p) => p.categorie === categorie),
    [categorie]
  );

  const fermer = () => setIndex(null);
  const precedent = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const suivant = () => setIndex((i) => (i + 1) % photos.length);

  // Clavier : Échap / flèches
  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowLeft") precedent();
      if (e.key === "ArrowRight") suivant();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length]);

  const photoActive = index !== null ? photos[index] : null;

  return (
    <section className="galerie">
      <style>{CSS}</style>

      <header className="galerie-header">
        <h1>Galerie photos</h1>
        <p>Les petits pensionnaires de Coin-Animaux en images.</p>
      </header>

      <div className="galerie-filtres">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`filtre ${c === categorie ? "actif" : ""}`}
            onClick={() => setCategorie(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="galerie-grille">
        {photos.map((p, i) => (
          <figure key={p.id} className="carte" onClick={() => setIndex(i)}>
            <img src={p.src} alt={p.titre} loading="lazy" />
            <figcaption>
              <span className="badge">{p.categorie}</span>
              <span>{p.titre}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {photos.length === 0 && <p className="vide">Aucune photo pour le moment.</p>}

      {photoActive && (
        <div className="lightbox" onClick={fermer}>
          <button className="lb-btn lb-close" onClick={fermer} aria-label="Fermer">
            ✕
          </button>
          <button
            className="lb-btn lb-prev"
            onClick={(e) => { e.stopPropagation(); precedent(); }}
            aria-label="Précédente"
          >
            ‹
          </button>

          <figure className="lb-contenu" onClick={(e) => e.stopPropagation()}>
            <img src={photoActive.src} alt={photoActive.titre} />
            <figcaption>
              {photoActive.titre} · {index + 1}/{photos.length}
            </figcaption>
          </figure>

          <button
            className="lb-btn lb-next"
            onClick={(e) => { e.stopPropagation(); suivant(); }}
            aria-label="Suivante"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}



/*const PHOTOS = [
  { id: 1, emoji: "🐶", alt: "Chien dans le jardin" },
  { id: 2, emoji: "🐱", alt: "Chat dans son panier" },
  { id: 3, emoji: "🐰", alt: "Lapin" },
  { id: 4, emoji: "🦜", alt: "Perroquet" },
  { id: 5, emoji: "🐕", alt: "Promenade" },
  { id: 6, emoji: "🐈", alt: "Sieste" },
];


export default function Gallerie(){
 const [selection, setSelection] = useState(null);


    return (
        <>
            <h1>Gallerie</h1>
  

           <section class="cards">

            <article class="card">
        <img src="https://www.countryliving.com/life/kids-pets/g3283/the-50-most-popular-dog-breeds/" alt="Chien">
        <div class="card-content">
          <h3>Chien</h3>
          <p>Entre les bonnes mains</p>
          <strong>20</strong>
          <a href="mailto:bonjour@muffindelice.be">Commander</a>
        </div>
      </article>
        </section>

        </>
    );

}*/