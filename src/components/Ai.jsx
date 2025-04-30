import React, { useState } from "react";
import "./Ai.css";
import { GoogleGenAI } from "@google/genai";
import logo from "../images/logo.png";
import brain from "../images/brain.png";

function Ai() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const ai = new GoogleGenAI({
        apiKey: "AIzaSyDJERrXWV4Mn6ZCK3e9MVxfpVNdxMHLlRE", // Replace with your actual API key
      });

      const config = {
        responseMimeType: "text/plain",
        systemInstruction: [
          {
            text: `Please ensure that your responses are exclusively focused on academic subjects that are part of the Saudi Arabian educational curriculum. You are expected to assist students with learning and answering questions strictly related to the following domains:

Arabic Language and Literature:

Grammar, syntax, and morphology (Nahw, Sarf)

Arabic literature (classical and modern poetry, prose, novels, short stories)

Linguistics and phonetics

Islamic Studies:

Quranic studies (Tafseer, Tajweed)

Fiqh (Islamic jurisprudence) and Aqeedah (Islamic creed)

Seerah (Prophet Muhammad's biography) and Islamic history

Islamic ethics and social teachings

Mathematics:

Arithmetic, Algebra, Geometry, and Calculus

Probability, Statistics, and Applied Mathematics

Mathematical logic and set theory

Sciences:

Physics: Mechanics, Thermodynamics, Electromagnetism

Chemistry: Organic and Inorganic Chemistry, Stoichiometry, Reaction Mechanisms

Biology: Cell Biology, Genetics, Human Anatomy, Ecology, and Environmental Science

Social Studies:

History: The history of the Arabian Peninsula, the Kingdom of Saudi Arabia, and the Arab world

Geography: Geography of Saudi Arabia, the Middle East, and the world

Civics and National Identity: Saudi governance, culture, and civic responsibilities

English Language and Literature:

Language skills (Grammar, Writing, Reading comprehension)

English literature (Classic and contemporary works)

Language acquisition and communication strategies

Computer Science:

Programming languages (Python, Java, C++)

Algorithms and data structures

Cybersecurity, Databases, and Software Engineering

Business and Economics:

Microeconomics, Macroeconomics

Business ethics, marketing, finance

Economic policies and their impact on Saudi Arabia and the global economy

Education and Pedagogy:

Learning theories and educational methodologies

Curriculum development in the Saudi context

Teaching strategies and assessments

Please ensure that you only provide responses that are academically valid and appropriate for students studying these subjects within the context of the Saudi Arabian curriculum. If a question falls outside of these domains, or involves a non-academic topic, kindly respond with: 'I am only able to assist with academic questions related to the Saudi Arabian educational system.' Do not provide opinions, personal views, or information unrelated to these subjects.`,
          },
        ],
      };

      const model = "gemini-2.5-flash-preview-04-17";
      const contents = [
        {
          role: "user",
          parts: [
            {
              text: input,
            },
          ],
        },
      ];

      const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
      });

      let aiResponse = "";
      for await (const chunk of response) {
        aiResponse += chunk.text;
      }

      const aiMessage = { sender: "ai", text: aiResponse };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        sender: "ai",
        text: "Error communicating with the AI API.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <header className="navbar" style={{ direction: "rtl" }}>
        <nav>
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li
              style={{
                backgroundColor: "#105A5D",
                borderRadius: "50%",
                padding: "10px",
                color: "white",
              }}
            >
              نايف
            </li>
            <li
              style={{
                backgroundColor: "#105A5D",
                borderRadius: "50%",
                padding: "10px",
                color: "white",
              }}
            >
              الصفحة الرئيسية
            </li>
            <li>مقرنا</li>
            <li>درجات طلابنا</li>
            <li>تواصل معنا</li>
          </ul>
        </nav>
      </header>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="left-menu">
          <ul>
            <li>أسأل حسام</li>
            <li>النماذج</li>
            <li>الشروحات</li>
            <li>الاختبارات</li>
          </ul>
        </div>
        <div className="ai-container">
          <h4>اهلا نايف كيف اقدر اعاونك ؟</h4>
          <div className="ai-icon">
            <img src={brain} alt="AI Icon" />
          </div>
          <div className="ai-chat">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`ai-message ${
                  message.sender === "user" ? "user-message" : "ai-message"
                }`}
              >
                <p>{message.text}</p>
              </div>
            ))}
            {loading && (
              <div className="ai-message ai-loading">جاري التحميل...</div>
            )}
          </div>
          <div className="ai-input">
            <button onClick={handleSubmit} disabled={loading}>
              إرسال
            </button>
            <input
              type="text"
              placeholder="تأكد من أن أسئلتك تتعلق بالمواد الأكاديمية فقط."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ai;
