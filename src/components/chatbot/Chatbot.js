import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.scss";

const FAQ = [
  {
    question: "What are your core skills?",
    answer: "My core skills include Java, Spring Boot, Data Structures and Algorithms, SQL, and React."
  },
  {
    question: "Tell me about your projects.",
    answer: "I have built several projects including a Traffic Route Optimizer using Dijkstra's Algorithm, a full-stack Learning Management System, and various RESTful APIs using Spring Boot."
  },
  {
    question: "What are your recent achievements?",
    answer: "I am the President of the Sathyabama Math Club and recently received the Luminary Award for academic and coding excellence."
  },
  {
    question: "Do you have any blogs?",
    answer: "Yes! I write about Data Structures (like Dijkstra's Algorithm), Java OOP concepts, and my coding journey on CodeChef."
  },
  {
    question: "What is your education background?",
    answer: "I am currently pursuing a B.E. in Computer Science at Sathyabama University (2023 - 2027) with a CGPA of 8.65."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach out to me via email or connect with me on LinkedIn and GitHub. Check out the Contact section below!"
  },
  {
    question: "What coding platforms do you use?",
    answer: "I actively solve competitive programming problems on CodeChef, LeetCode, and HackerRank."
  },
  {
    question: "Are you open for job opportunities?",
    answer: "Yes, I am actively looking for software development internships and opportunities to collaborate!"
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm Krishna Teja's portfolio assistant. Ask me anything about his skills, projects, achievements, or contact information."
    }
  ]);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleQuestionClick = (qa) => {
    setMessages((prev) => [...prev, { sender: "user", text: qa.question }]);
    
    // Simulate slight delay for bot reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: qa.answer }]);
    }, 400);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Portfolio Assistant</h4>
            <button onClick={toggleChat} className="close-btn">✖</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message-wrapper ${msg.sender}`}>
                <div className={`message-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-options">
            <p className="options-title">Frequently Asked Questions:</p>
            <div className="options-container">
              {FAQ.map((qa, index) => (
                <button 
                  key={index} 
                  className="option-chip"
                  onClick={() => handleQuestionClick(qa)}
                >
                  {qa.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <button className="chat-fab" onClick={toggleChat}>
        <span role="img" aria-label="chat">💬</span>
      </button>
    </div>
  );
}
