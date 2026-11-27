
/*
export default function Homepage(){


    return (
        <>
            <h1>Homepage</h1>

        </>
    ) 
}*/

import { Link } from "react-router-dom"
import { useAnimalContext } from "../HooksPerso/useAnimalContext"

// ===== Styles =====
const styles = {
  hero: {
    textAlign: "center",
    padding: "4rem 1rem",
    background: "linear-gradient(135deg, #fdebd0, #f5cba7)",
    borderRadius: "16px",
    margin: "1rem 0 2rem",
  },
  heroTitle: { fontSize: "3rem", margin: "0 0 0.5rem", color: "#a36617" },
  heroText: { fontSize: "1.2rem", color: "#a36617" },
  actions: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "1.5rem",
  },
  btn: {
    display: "inline-block",
    padding: "0.7rem 1.4rem",
    borderRadius: "8px",
    background: "#e67e22",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    border: "2px solid #e67e22",
  },
  btnSecondary: {
    background: "#fff",
    color: "#e67e22",
  },
  btnSmall: { padding: "0.4rem 0.9rem", fontSize: "0.9rem" },
  section: { margin: "2.5rem 0", textAlign: "center" },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  step: { padding: "1.5rem", borderRadius: "12px", background: "#faf6f0" },
  stepNum: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.2rem",
    height: "2.2rem",
    borderRadius: "50%",
    background: "#e67e22",
    color: "#fff",
    fontWeight: 700,
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
    background: "#fff",
  },
  cardImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover", // photos uniformes, jamais déformées
    display: "block",
  },
  cardBody: { padding: "1rem" },
  cardMeta: { color: "#666", fontSize: "0.9rem" },
  more: { marginTop: "1.5rem" },
}

// ===== Données des étapes =====
const etapes = [
  { titre: "Remplissez le formulaire", texte: "Type, race, âge, besoins particuliers : dites-nous tout sur votre animal." },
  { titre: "Ajoutez une photo", texte: "Une photo nous aide à le reconnaître et à bien l'accueillir." },
  { titre: "Suivez sa fiche", texte: "Consultez, modifiez ou supprimez la fiche à tout moment." },
]

export default function Homepage() {
  const { getAnimaux } = useAnimalContext()
  const apercu = getAnimaux().slice(0, 4)

  return (
    <>
      {/* Bannière */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Coin Animaux</h1>
        <p style={styles.heroText}>
          Un centre d'accueil pour déposer votre animal en toute confiance.
        </p>
        <div style={styles.actions}>
          <Link to="/add" style={styles.btn}>Déposer un animal</Link>
          <Link to="/liste" style={{ ...styles.btn, ...styles.btnSecondary }}>
            Voir les animaux
          </Link>
        </div>
      </section>

      {/* Comment ça marche */}
      <section style={styles.section}>
        <h2>Comment ça marche ?</h2>
        <div style={styles.stepsGrid}>
          {etapes.map((e, i) => (
            <div key={e.titre} style={styles.step}>
              <span style={styles.stepNum}>{i + 1}</span>
              <h3>{e.titre}</h3>
              <p>{e.texte}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Aperçu des animaux */}
      <section style={styles.section}>
        <h2>Nos pensionnaires</h2>
        <div style={styles.cardGrid}>
          {apercu.map((a) => (
            <article key={a.id} style={styles.card}>
              <img style={styles.cardImg} src={a.image} alt={a.type} />
              <div style={styles.cardBody}>
                <h3>{a.type}</h3>
                <p style={styles.cardMeta}>{a.race}</p>
                <Link
                  to={`/details/${a.id}`}
                  style={{ ...styles.btn, ...styles.btnSmall }}
                >
                  Voir la fiche
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p style={styles.more}>
          <Link to="/liste">Voir tous les animaux →</Link>
        </p>
      </section>
    </>
  )
}