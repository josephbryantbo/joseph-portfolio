import React, { useState } from "react";
import Navbar from "./Navbar";

// 🎨 Sporty + Tech Theme Styles
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
  chatContainer: {
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
    maxWidth: "600px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    width: "100%",
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
    width: "100%",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    color: "#000", // user text visible
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

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your AI assistant. Ask me anything about me or my projects." },
  ]);
  const [input, setInput] = useState("");

  // Knowledge base for portfolio chatbot
  const knowledgeBase = [
    { question: /(hi|hello|hey)/i, answer: "Hello! 👋 I'm your portfolio AI assistant. Ask me about Joseph and his projects." },
    { question: /(how are you|how's it going)/i, answer: "I'm just code, but ready to answer questions about Joseph's portfolio! 😄" },
    { question: /name/i, answer: "I'm Joseph Barragan, an IT & Cybersecurity student passionate about technology, risk management, and innovation." },
    { question: /(school|university|college)/i, answer: "I’m currently studying at Kean University, focusing on IT & Cybersecurity." },
    { question: /(study|major|focus)/i, answer: "I’m studying IT & Cybersecurity at Kean University, learning about systems, networking, and risk management." },
    { question: /projects?/i, answer: "I have projects like Security Risk Analysis, Interactive SWOT Website, and PCI DSS Compliance examples." },
    { question: /(hobbies|interests|sports)/i, answer: "Outside of tech, I enjoy sports. My favorite teams are the Ravens, Yankees, and FC Barcelona." },
    { question: /(class|course|project)/i, answer: "This portfolio project is for my Web Client-Side Programming class at Kean University." },
    { question: /(instructor|professor|teacher)/i, answer: "My instructor for this class is Professor Kumar." },
  ];

  const getAnswer = (userInput) => {
    const matched = knowledgeBase.find((item) => item.question.test(userInput));
    return matched ? matched.answer : "Hmm, I’m not sure about that. Try asking something else about my portfolio!";
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
    <div>
      <Navbar />
      <div style={styles.page}>
        <div style={styles.chatContainer}>
          <h1 style={styles.header}>AI Chat Assistant 🤖</h1>
          <div style={styles.chatBox}>
            {messages.map((msg, index) => (
              <div key={index} style={msg.sender === "bot" ? styles.botMessage : styles.userMessage}>
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
            <button onClick={handleSend} style={styles.button}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
