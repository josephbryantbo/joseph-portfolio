import React from "react";
import Navbar from "./Navbar";
import emailIcon from "./assets/email.png"; // Replace with your email icon path
import linkedinIcon from "./assets/linkedin.png"; // Replace with your LinkedIn icon path

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.header}>Contact Me</h1>
          <p style={styles.text}>
            Feel free to reach out via email or connect with me on LinkedIn!
          </p>

          <div style={styles.contactMethods}>
            <div style={styles.contactCard}>
              <img src={emailIcon} alt="Email" style={styles.icon} />
              <a href="mailto:barragjo@kean.edu" style={styles.link}>
                barragjo@kean.edu
              </a>
            </div>

            <div style={styles.contactCard}>
              <img src={linkedinIcon} alt="LinkedIn" style={styles.icon} />
              <a
                href="https://www.linkedin.com/in/joseph-barragan/"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
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
    maxWidth: "700px",
    width: "100%",
    textAlign: "center",
  },
  header: {
    fontSize: "2.5rem",
    color: "#38bdf8",
    marginBottom: "25px",
  },
  text: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    marginBottom: "30px",
  },
  contactMethods: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "20px",
  },
  contactCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "15px",
    minWidth: "180px",
    transition: "transform 0.2s ease",
  },
  icon: {
    width: "60px",
    height: "60px",
    marginBottom: "15px",
  },
  link: {
    color: "#0ea5e9",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1rem",
    textAlign: "center",
  },
};

export default Contact;
