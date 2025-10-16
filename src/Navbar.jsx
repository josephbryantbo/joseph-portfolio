import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Joseph Barragan</h1>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About Me</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
        <Link to="/chatbot" style={styles.link}>Chatbot 🤖</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    padding: "15px 30px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
  },
  logo: {
    color: "#0ea5e9",
    fontWeight: "700",
    fontSize: "1.5rem",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#f1f5f9",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
};

export default Navbar;
