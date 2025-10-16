import React from "react";
import Navbar from "./Navbar";
import githubLogo from "./assets/github.png"; // 🖼️ Make sure this image exists in src/assets/github.png

const About = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.header}>About Me</h1>
          <p style={styles.text}>
            Hey there! I’m <strong>Joseph Barragan</strong>, an IT & Cybersecurity student who enjoys
            combining technology, strategy, and creativity. I’m passionate about cybersecurity, risk
            management, and learning how innovation can make systems more secure and efficient.
          </p>

          <h2 style={styles.subHeader}>Hobbies & Interests</h2>
          <p style={styles.text}>
            Outside of tech, I’m a huge sports fan and love the teamwork, discipline, and
            problem-solving that sports teach. My favorite teams:
          </p>
          <ul style={styles.list}>
            <li><strong>🏈 Baltimore Ravens</strong></li>
            <li><strong>⚾ New York Yankees</strong></li>
            <li><strong>⚽ FC Barcelona</strong></li>
          </ul>

          {/* GitHub Profile Section */}
          <div style={styles.githubSection}>
            <a
              href="https://github.com/josephbryantbo"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubLink}
            >
              <img src={githubLogo} alt="GitHub" style={styles.githubIcon} />
              <span>Visit My GitHub Profile</span>
            </a>
          </div>

          <h2 style={styles.subHeader}>Professional Resume</h2>
          <p style={styles.text}>You can view or download my resume below:</p>

          <iframe
            src="/resume.pdf"
            title="My Resume"
            width="100%"
            height="600px"
            style={styles.iframe}
          ></iframe>
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
    display: "flex",
    justifyContent: "center",
    padding: "50px 20px",
    color: "#f1f5f9",
    fontFamily: "'Poppins', sans-serif",
  },
  card: {
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
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
  githubSection: {
    textAlign: "center",
    marginTop: "25px",
  },
  githubLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
    backgroundColor: "#0ea5e9",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "10px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  githubLinkHover: {
    backgroundColor: "#0284c7",
  },
  githubIcon: {
    width: "28px",
    height: "28px",
  },
};

export default About;
