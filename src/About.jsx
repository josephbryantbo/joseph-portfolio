import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.header}>About Me</h1>
          <p style={styles.text}>
            Hey there! I’m <strong>Joseph Barragan</strong>, an IT & Cybersecurity student who enjoys combining technology, strategy, and creativity.
          </p>

          <h2 style={styles.subHeader}>Hobbies & Interests</h2>
          <p style={styles.text}>
            Outside of tech, I love sports! My favorite teams:
          </p>
          <ul style={styles.list}>
            <li>🏈 Baltimore Ravens</li>
            <li>⚾ New York Yankees</li>
            <li>⚽ FC Barcelona</li>
          </ul>

          <h2 style={styles.subHeader}>Professional Resume</h2>
          <p style={styles.text}>You can view or download my resume below:</p>
          <iframe src="/resume.pdf" title="My Resume" width="100%" height="600px" style={styles.iframe}></iframe>
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
    padding: "50px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#f1f5f9",
  },
  card: {
    backgroundColor: "rgba(15,23,42,0.9)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    maxWidth: "900px",
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#38bdf8",
    marginBottom: "15px",
  },
  subHeader: {
    marginTop: "35px",
    fontSize: "1.5rem",
    color: "#0ea5e9",
  },
  text: {
    lineHeight: "1.7",
    fontSize: "1.1rem",
  },
  list: {
    listStyle: "none",
    paddingLeft: "0",
    marginTop: "10px",
  },
  iframe: {
    border: "2px solid #38bdf8",
    borderRadius: "10px",
    marginTop: "20px",
  },
};

export default About;
