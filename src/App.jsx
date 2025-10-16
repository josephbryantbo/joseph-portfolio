import React from "react";
import Navbar from "./Navbar";
import keyImg from "./assets/key.png"; // Make sure this path is correct

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.header}>Welcome to My Portfolio</h1>
          <img src={keyImg} alt="Cybersecurity Key" style={styles.image} />
          <p style={styles.text}>
            Hi, I’m <strong>Joseph Barragan</strong>, an IT & Cybersecurity student at Kean University. Explore my projects, learn about me, and see my work in cybersecurity, risk management, and web development.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#f1f5f9",
  },
  card: {
    backgroundColor: "rgba(15,23,42,0.9)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
  },
  header: {
    fontSize: "2.5rem",
    color: "#38bdf8",
    marginBottom: "30px",
  },
  image: {
    width: "120px",
    height: "120px",
    margin: "0 auto 25px auto",
    display: "block",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.7",
  },
};

export default App;
