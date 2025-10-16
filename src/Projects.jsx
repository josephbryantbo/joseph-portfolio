import React from "react";
import Navbar from "./Navbar";

// Import images from src/assets
import shieldIcon from "./assets/shield.png";
import swotIcon from "./assets/swot.png";
import cardIcon from "./assets/card.png";

const Projects = () => {
  const projects = [
    {
      title: "Security Risk Analysis",
      icon: shieldIcon,
      description:
        "Performed a comprehensive Security Risk Analysis, identifying potential vulnerabilities and recommending mitigation strategies. Tools used: NIST Cybersecurity Framework, risk assessment templates, and documentation tools.",
    },
    {
      title: "Interactive SWOT Website",
      icon: swotIcon,
      description:
        "Developed an interactive SWOT analysis website that allows users to explore company strengths, weaknesses, opportunities, and threats. Tools used: HTML, CSS, JavaScript, and React.",
    },
    {
      title: "PCI DSS Compliance",
      icon: cardIcon,
      description:
        "Assisted in ensuring PCI DSS compliance for merchant systems, including credit card transaction security and policy enforcement. Tools used: PCI DSS guidelines, security checklists, and risk management software.",
    },
  ];

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.header}>My Projects</h1>
        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.card}>
              <img src={project.icon} alt={project.title} style={styles.icon} />
              <h2 style={styles.title}>{project.title}</h2>
              <p style={styles.description}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 🎨 Sporty + Tech Theme
const styles = {
  page: {
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0ea5e9)",
    minHeight: "100vh",
    padding: "50px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#f1f5f9",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#38bdf8",
    marginBottom: "50px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "1.5rem",
    color: "#0ea5e9",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
  },
};

export default Projects;
