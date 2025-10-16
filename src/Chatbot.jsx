import React, { useState } from "react";
import Navbar from "./Navbar";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything about me or my projects." },
  ]);
  const [input, setInput] = useState("");

  // Knowledge base including resume, projects, skills, and personal info
  const knowledgeBase = [
    // Greetings
    {
      question: /(hi|hello|hey)/i,
      answer: "Hello! 👋 I'm Joseph's portfolio AI assistant. Ask me about Joseph and his projects.",
    },
    {
      question: /(how are you|how's it going)/i,
      answer: "I'm just code, but I'm ready to answer questions about Joseph's portfolio! 😄",
    },
    // Personal info
    {
      question: /name/i,
      answer: "I'm Joseph Barragan, an IT & Cybersecurity student passionate about technology, risk management, and innovation.",
    },
    {
      question: /(school|university|college)/i,
      answer: "I’m currently studying at Kean University, pursuing a B.S. in Information Technology - Cybersecurity (Expected July 2026).",
    },
    {
      question: /(study|major|focus)/i,
      answer: "I’m studying IT & Cybersecurity at Kean University, focusing on systems, networking, risk management, and cybersecurity compliance.",
    },
    {
      question: /(projects?|portfolio)/i,
      answer:
        "Joseph has completed projects like Risk Scenario Analysis & Mitigation Proposal (Risk Management), Interactive SWOT Analysis Website (IT Foundations), and PCI DSS Compliance tasks.",
    },
    {
      question: /(hobbies|interests|sports)/i,
      answer: "Outside of tech, Joseph enjoys sports. Favorite teams: Ravens, Yankees, and FC Barcelona.",
    },
    // Class info
    {
      question: /(class|course|project)/i,
      answer: "This portfolio project is for Joseph's Web Client-Side Programming class at Kean University.",
    },
    {
      question: /(instructor|professor|teacher)/i,
      answer: "Instructor: Professor Kumar.",
    },
    // Resume: education
    {
      question: /(education|schooling|degree)/i,
      answer: "Joseph studied A.A. in Business - Liberal Arts at Middlesex County College (Graduated May 2020) and is pursuing a B.S. in IT - Cybersecurity at Kean University.",
    },
    // Resume: skills
    {
      question: /(skills|abilities|expertise|competencies)/i,
      answer:
        "Skills include: PCI DSS compliance, risk management, fraud detection, NIST Cybersecurity Framework, Java, HTML, SQL, Microsoft Excel (VLOOKUP, PivotTables), Access, PowerPoint, Word, analytical thinking, problem solving, team leadership, customer service, bilingual English/Spanish.",
    },
    // Resume: work experience
    {
      question: /(experience|work|job|employment)/i,
      answer:
        "Work experience includes: Technical Support Specialist II at Slice Merchant Services, Sales/Customer Service Agent at Lithia & Driveway, and General Merchandise Team Leader at Target. Responsibilities involved PCI DSS compliance, troubleshooting, risk analysis, and team management.",
    },
    // Resume: projects
    {
      question: /risk scenario analysis/i,
      answer:
        "Risk Scenario Analysis & Mitigation Proposal: Developed a comprehensive risk assessment using NIST standards, addressing vulnerabilities in a mock organization's infrastructure. Report includes operational, compliance, and reputational risk mitigation strategies.",
    },
    {
      question: /swot analysis website/i,
      answer:
        "Interactive SWOT Analysis Website: Built an HTML website showcasing SWOT analysis of Google. Focused on responsive design, navigation, and presenting business insights clearly.",
    },
    {
      question: /pci dss compliance/i,
      answer:
        "PCI DSS Compliance: Ensured small business clients adhere to Visa/Mastercard regulatory standards, investigated risk issues, and created technical documentation for fraud scenarios and compliance exceptions.",
    },
  ];

  const getAnswer = (userInput) => {
    const matched = knowledgeBase.find((item) => item.question.test(userInput));
    return matched
      ? matched.answer
      : "Hmm, I’m not sure about that. Try asking something else about Joseph's portfolio or resume!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    const botReply = getAnswer(input);
    setMessages([...newMessages, { sender: "bot", text: botReply }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.chatContainer}>
        <h1 style={styles.header}>AI Chat Assistant 🤖</h1>
        <div style={styles.chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={msg.sender === "bot" ? styles.botMessage : styles.userMessage}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Ask me something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            style={styles.input}
          />
          <button onClick={handleSend} style={styles.button}>
            Send
          </button>
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
    alignItems: "center",
    padding: "50px 20px",
    fontFamily: "'Poppins', sans-serif",
    color: "#f1f5f9",
    flexDirection: "column",
  },
  chatContainer: {
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    maxWidth: "600px",
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#38bdf8",
    marginBottom: "20px",
  },
  chatBox: {
    backgroundColor: "#1e293b",
    padding: "20px",
    borderRadius: "15px",
    maxHeight: "400px",
    overflowY: "auto",
    marginBottom: "15px",
  },
  botMessage: {
    backgroundColor: "#0ea5e9",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#38bdf8",
    color: "#000",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    textAlign: "right",
    maxWidth: "80%",
    marginLeft: "auto",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    color: "#000",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#0ea5e9",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Chatbot;
