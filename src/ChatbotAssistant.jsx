import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, ChevronRight, RefreshCw } from "lucide-react";

const KB = [
  {
    keys: ["kavach", "portal", "kya hai", "what is", "overview", "about", "project"],
    answer: "🛡️ **K.A.V.A.C.H. AI PORTAL** ka full form hai:\n\n**K** – Knowledge\n**A** – Automation\n**V** – Vision\n**A** – Analytics\n**C** – Command\n**H** – Hub\n\nYeh UP Police ka AI-powered Investigation & Operational Training Platform hai jisme 7 Phase ka Step Up Literacy Program, AI Course, MLOps, Advanced AI & Cyber Command, Police Functioning dashboards, District aur Thane Level management sab kuch ek jagah available hai."
  },
  {
    keys: ["step up", "literacy", "phases", "phase"],
    answer: "📚 **Step Up Literacy Software** mein **7 Phases** hain:\n\n**Phase 1** – Foundation & Requirements\n**Phase 2** – System Design & Architecture\n**Phase 3** – Frontend Development\n**Phase 4** – Backend & API Development\n**Phase 5** – AI/ML Integration\n**Phase 6** – Testing & QA\n**Phase 7** – Deployment & DevOps\n\nHar phase mein detailed requirements, tools, technologies aur learning outcomes shamil hain."
  },
  {
    keys: ["ai course", "artificial intelligence", "course"],
    answer: "🎓 **AI Course Dashboard** mein ye topics cover hote hain:\n\n• 🤖 AI Fundamentals & Machine Learning\n• 🧠 Deep Learning & Neural Networks\n• 👁️ Computer Vision (CCTV Analysis)\n• 💬 NLP & Language Models\n• 📊 Data Science & Analytics\n• 🔐 AI Ethics & Bias Detection\n• 🚀 MLOps & Model Deployment\n\nYeh course UP Police officers ke liye specifically designed hai."
  },
  {
    keys: ["masterclass", "software masterclass"],
    answer: "💻 **Software Masterclass** mein in topics par in-depth training di jaati hai:\n\n• 🏗️ SDLC Models & Software Architecture\n• ⚡ CI/CD Pipeline & DevSecOps\n• ☁️ Cloud Computing (AWS/GCP/Azure)\n• 🧪 Testing Frameworks & QA\n• 🔧 Frontend Development (React)\n• 📱 Modern Tech Stack\n• 🌐 Open Source & Git Collaboration\n• 🗂️ Project Management Tools"
  },
  {
    keys: ["mlops", "ai operations", "operations", "ml ops"],
    answer: "⚙️ **AI Operations – MLOps Dashboard** mein cover hota hai:\n\n• 📦 Model Training & Fine-Tuning\n• 🚀 Model Deployment Strategies\n• 📊 Monitoring & Drift Analysis\n• 🔄 Data Pipeline Processing\n• 🤖 LLMOps (Large Language Model Ops)\n• 🧬 Autonomous AI Agents\n• 📈 Performance Optimization"
  },
  {
    keys: ["advanced ai", "cyber", "cybersecurity", "command"],
    answer: "🌐 **Advanced AI & Cyber Command** mein shamil hain:\n\n• 🕵️ Dark Web Monitoring AI\n• 📹 CCTV Video Summarizer\n• 🔍 CDR Semantic Search\n• 👁️ Predictive Behavioral Analysis\n• 💻 Cyber Security Forensics\n• 🗣️ Lip Reading AI\n• 🚦 Crowd Meter System\n• 🔐 AI Ethics & Compliance"
  },
  {
    keys: ["police functioning", "police", "karyapranali"],
    answer: "🧠 **Police Functioning Dashboard** mein AI-powered police operations cover hote hain:\n\n• 🔫 Armoury AI Management\n• 🗃️ Malkhana Tracker\n• 📋 Digital Beat Book\n• 🤝 CCTNS Integration\n• 🌍 Field Policing Dashboard\n• 📊 Smart Surveillance\n• 🦺 Safety AI Systems\n• 📅 Smart Roster Management"
  },
  {
    keys: ["thane", "thana", "police station", "thane level"],
    answer: "🏛️ **Thane Level Dashboard** mein shamil hain:\n\n• 📋 Case Management System\n• 👥 Staff Roster & Attendance\n• 🗄️ Malkhana Digital Records\n• 🔗 CCTNS Live Integration\n• 📊 Crime Statistics (Local)\n• 🗺️ Beat Patrolling Map\n• ⚠️ Alert & Incident Reporting"
  },
  {
    keys: ["district", "sp", "ssp", "district level"],
    answer: "🏢 **District Level Dashboard (SP/SSP Office)** mein:\n\n• 📊 Multi-Thana Crime Analytics\n• 👮 Officer Performance Tracking\n• 🚗 Vehicle & Asset Management\n• 🔐 Security & Compliance Reports\n• 💰 Budget & Resource Allocation\n• 📈 District-wide KPI Dashboard\n• 🗺️ Geographic Crime Mapping"
  },
  {
    keys: ["ppt", "presentation", "project ppt"],
    answer: "🎯 **Project PPT Dashboard** mein K.A.V.A.C.H. project ki complete presentation hai:\n\n• 📑 Project Vision & Objectives\n• 🗺️ Technology Roadmap\n• 🏗️ System Architecture Diagrams\n• 📊 Implementation Timeline\n• 💡 Innovation Highlights\n• 🎯 Impact & Outcomes\n• 🔮 Future Scope & Scalability"
  },
  {
    keys: ["language", "hindi", "english", "translate", "bilingual"],
    answer: "🌐 **Bilingual Support (EN / Hindi)**:\n\nPortal mein Language Toggle feature hai jo header ke top-right corner mein available hai.\n\n• **EN** button → English mein portal\n• **Hindi** button → Google Translate se Hindi translation\n\nYeh preference automatically save hoti hai agli baar ke liye."
  },
  {
    keys: ["sidebar", "navigation", "menu", "navigate", "kaise", "how to"],
    answer: "📌 **Portal Navigation Guide**:\n\n**Sidebar Groups:**\n• 🏠 **Home** – Main overview page\n• 📚 **Education & IT Capacity** – Step Up, AI Course, Masterclass\n• ⚙️ **AI & Operations Command** – MLOps, Advanced AI, Police Functioning\n• 🏛️ **Administrative & Field** – Thane, District, Project PPT\n\n**Tips:**\n• Group headers click karein → sub-items expand honge\n• Active item glow karta hai\n• Mobile par menu button se sidebar khulta hai"
  },
  {
    keys: ["module", "modules", "details"],
    answer: "📦 **K.A.V.A.C.H. Key AI Modules**:\n\n1. 🔗 **Autonomous Linker** – Case connections automatically find karta hai\n2. 👁️ **Visual Auditor** – Video evidence analysis\n3. 🚦 **Crowd Meter** – Real-time crowd density AI\n4. 🌑 **Dark Web Monitor** – Underground threat detection\n5. 📞 **CDR Search** – Call record semantic search\n6. 💊 **Polygraph AI** – AI-assisted interrogation support\n7. 👄 **Lip Reading AI** – Silent video speech detection\n8. 🔮 **Predictive Behavioral** – Crime prediction engine"
  },
  {
    keys: ["technology", "tech stack", "react", "tools"],
    answer: "🛠️ **K.A.V.A.C.H. Technology Stack**:\n\n**Frontend:** React.js + Vite, Lucide Icons, CSS\n**AI/ML:** Python, TensorFlow, PyTorch, Scikit-learn\n**Backend:** Node.js / FastAPI / Django\n**Database:** PostgreSQL, MongoDB, Redis\n**Cloud:** AWS / GCP / Azure\n**DevOps:** Docker, Kubernetes, CI/CD\n**Security:** JWT Auth, OAuth 2.0, SSL/TLS"
  },
  {
    keys: ["help", "guide", "what can you do", "kya kar sakte"],
    answer: "🤖 **K.A.V.A.C.H. AI Assistant** – Help Guide:\n\nMain in topics par jankari de sakta hoon:\n\n• 🛡️ Portal overview (K.A.V.A.C.H. kya hai)\n• 📚 Step Up Literacy phases\n• 🎓 AI Course content\n• 💻 Software Masterclass topics\n• ⚙️ MLOps & AI Operations\n• 🌐 Advanced AI & Cyber tools\n• 🧠 Police Functioning modules\n• 🏛️ Thane & District dashboards\n• 🌐 Language toggle guidance\n• 📌 Navigation help\n• 🛠️ Technology stack info\n\nKoi bhi sawaal poochhen ya neeche Quick Questions use karein!"
  }
];

function findAnswer(input) {
  const lower = input.toLowerCase();
  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = entry.keys.reduce((acc, k) => acc + (lower.includes(k) ? k.length : 0), 0);
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  if (bestScore > 0) return best.answer;
  return "🤔 Mujhe is sawaal ka seedha jawab nahi mila. Aap in topics ke baare mein pooch sakte hain:\n\n• K.A.V.A.C.H. portal overview\n• Step Up Literacy phases\n• AI Course content\n• Software Masterclass\n• MLOps & Operations\n• Advanced AI & Cyber\n• Police Functioning\n• Thane/District dashboards\n• Navigation help\n• Technology stack\n\nYa 'help' type karein! 😊";
}

function renderMarkdown(text) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1
        ? React.createElement("strong", { key: j, style: { color: "#1e40af" } }, part)
        : part
    );
    if (line.trim() === "") return React.createElement("br", { key: i });
    return React.createElement("span", { key: i, style: { display: "block", lineHeight: "1.7" } }, rendered);
  });
}

const QUICK_QUESTIONS = [
  "K.A.V.A.C.H. kya hai?",
  "Step Up Literacy phases?",
  "AI Course mein kya hai?",
  "MLOps kya cover karta hai?",
  "Advanced AI modules?",
  "Navigation kaise karein?",
  "Technology stack kya hai?",
];

export default function ChatbotAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{
    id: 1, from: "bot", time: new Date(),
    text: "🛡️ **Namaste! Main K.A.V.A.C.H. AI Assistant hoon.**\n\nMain aapko UP Police AI Portal ke baare mein poori jankari de sakta hoon:\n\n• Portal modules & navigation\n• Step Up Literacy phases\n• AI Course & Masterclass content\n• MLOps & Cyber tools\n• Police dashboards\n• Technology stack\n\nKuch bhi poochhen! Neeche Quick Questions bhi use kar sakte hain. 👇"
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) { setUnread(0); setTimeout(() => inputRef.current?.focus(), 100); }
  }, [isOpen]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, isTyping]);

  const sendMessage = (text) => {
    const q = (text || input).trim();
    if (!q) return;
    setInput("");
    setMessages(prev => [...prev, { id: Date.now(), from: "user", text: q, time: new Date() }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now() + 1, from: "bot", text: findAnswer(q), time: new Date() }]);
      setIsTyping(false);
      if (!isOpen) setUnread(p => p + 1);
    }, 800 + Math.random() * 500);
  };

  const clearChat = () => {
    setMessages([{ id: Date.now(), from: "bot", time: new Date(), text: "🔄 Chat reset ho gayi! Main phir se ready hoon.\n\nKuch bhi poochhen K.A.V.A.C.H. portal ke baare mein! 😊" }]);
  };

  const fmtTime = (d) => d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  const S = {
    fab: {
      position: "fixed", bottom: "2rem", right: "2rem", zIndex: 9999,
      width: "62px", height: "62px", borderRadius: "50%", border: "none",
      background: "linear-gradient(135deg, #1e40af, #3b82f6)", color: "white",
      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 8px 25px rgba(37,99,235,0.5)", transition: "all 0.3s",
    },
    window: {
      position: "fixed", bottom: "6.5rem", right: "2rem", zIndex: 9998,
      width: "400px", maxWidth: "calc(100vw - 2rem)",
      height: "580px", maxHeight: "calc(100vh - 8rem)",
      background: "#fff", borderRadius: "20px",
      boxShadow: "0 25px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(59,130,246,0.15)",
      display: "flex", flexDirection: "column", overflow: "hidden",
      animation: "kavachSlideUp 0.3s ease",
    },
  };

  return (
    <>
      <button onClick={() => setIsOpen(o => !o)} title="K.A.V.A.C.H. AI Assistant" style={S.fab}>
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
        {!isOpen && unread > 0 && (
          <span style={{ position: "absolute", top: "-4px", right: "-4px", background: "#ef4444", color: "white", borderRadius: "50%", width: "22px", height: "22px", fontSize: "0.7rem", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>
            {unread}
          </span>
        )}
      </button>

      {isOpen && (
        <div style={S.window}>
          {/* Header */}
          <div style={{ background: "linear-gradient(135deg, #0f2042, #1e3a8a)", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.75rem", borderBottom: "2px solid #d97706", flexShrink: 0 }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 15px rgba(59,130,246,0.5)", flexShrink: 0 }}>
              <Bot size={22} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "#f59e0b", fontWeight: "800", fontSize: "0.8rem", letterSpacing: "0.08em" }}>K.A.V.A.C.H. AI ASSISTANT</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "2px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e" }} />
                <span style={{ color: 'var(--text-muted)', fontSize: "0.72rem", fontWeight: "600" }}>Online • UP Police Portal Expert</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={clearChat} title="Clear chat" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px", color: 'var(--text-muted)', cursor: "pointer", padding: "0.35rem", display: "flex" }}>
                <RefreshCw size={15} />
              </button>
              <button onClick={() => setIsOpen(false)} style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "8px", color: "#f87171", cursor: "pointer", padding: "0.35rem", display: "flex" }}>
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.85rem", background: "linear-gradient(180deg, #f8faff 0%, #fff 100%)" }}>
            {messages.map(msg => (
              <div key={msg.id} style={{ display: "flex", flexDirection: msg.from === "user" ? "row-reverse" : "row", alignItems: "flex-end", gap: "0.5rem" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0, background: msg.from === "bot" ? "linear-gradient(135deg, #1e40af, #3b82f6)" : "linear-gradient(135deg, #d97706, #f59e0b)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {msg.from === "bot" ? <Bot size={15} color="white" /> : <User size={15} color="white" />}
                </div>
                <div style={{ maxWidth: "78%" }}>
                  <div style={{ padding: "0.65rem 0.9rem", borderRadius: msg.from === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px", background: msg.from === "user" ? "linear-gradient(135deg, #1e40af, #2563eb)" : "#fff", color: msg.from === "user" ? "white" : "#1e293b", fontSize: "0.82rem", lineHeight: "1.65", boxShadow: msg.from === "bot" ? "0 2px 10px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)" : "0 2px 10px rgba(37,99,235,0.2)" }}>
                    {msg.from === "bot" ? renderMarkdown(msg.text) : msg.text}
                  </div>
                  <div style={{ fontSize: "0.65rem", color: 'var(--text-muted)', marginTop: "3px", textAlign: msg.from === "user" ? "right" : "left", padding: "0 0.5rem" }}>
                    {fmtTime(msg.time)}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "50%", background: "linear-gradient(135deg, #1e40af, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Bot size={15} color="white" />
                </div>
                <div style={{ background: 'var(--card-bg)', borderRadius: "18px 18px 18px 4px", padding: "0.65rem 1rem", boxShadow: "0 2px 10px rgba(0,0,0,0.07)", display: "flex", gap: "4px", alignItems: "center" }}>
                  {[0, 1, 2].map(i => <div key={i} style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#3b82f6", animation: `kavachDot 1.2s infinite ${i * 0.2}s` }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Questions */}
          <div style={{ padding: "0.6rem 0.75rem 0.4rem", borderTop: "1px solid #f1f5f9", background: "#fafbff", flexShrink: 0 }}>
            <div style={{ fontSize: "0.65rem", color: 'var(--text-muted)', fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>⚡ Quick Questions</div>
            <div style={{ display: "flex", gap: "0.4rem", overflowX: "auto", paddingBottom: "0.25rem" }}>
              {QUICK_QUESTIONS.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)} style={{ flexShrink: 0, background: "#eef2ff", border: "1px solid #c7d2fe", borderRadius: "20px", padding: "0.3rem 0.7rem", fontSize: "0.7rem", color: "#3730a3", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "3px" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "#3b82f6"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#eef2ff"; e.currentTarget.style.color = "#3730a3"; e.currentTarget.style.borderColor = "#c7d2fe"; }}>
                  <ChevronRight size={11} />{q}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div style={{ padding: "0.75rem", background: "#fff", borderTop: '1px solid var(--card-border)', flexShrink: 0, display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input ref={inputRef} value={input} onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder="Portal ke baare mein kuch bhi poochhen..."
              style={{ flex: 1, border: "1.5px solid #e2e8f0", borderRadius: "12px", padding: "0.6rem 0.9rem", fontSize: "0.82rem", outline: "none", fontFamily: "inherit", color: 'var(--text-main)', background: "#f8faff" }}
              onFocus={e => { e.target.style.borderColor = "#3b82f6"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)"; }}
              onBlur={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.boxShadow = "none"; }}
            />
            <button onClick={() => sendMessage()} disabled={!input.trim() || isTyping}
              style={{ width: "42px", height: "42px", borderRadius: "12px", border: "none", background: input.trim() && !isTyping ? "linear-gradient(135deg, #1e40af, #3b82f6)" : "#e2e8f0", color: input.trim() && !isTyping ? "white" : "#94a3b8", cursor: input.trim() && !isTyping ? "pointer" : "not-allowed", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: input.trim() && !isTyping ? "0 4px 12px rgba(37,99,235,0.3)" : "none" }}>
              <Send size={17} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes kavachSlideUp { from { opacity:0; transform:translateY(20px) scale(0.97); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes kavachDot { 0%,60%,100% { transform:translateY(0); opacity:0.5; } 30% { transform:translateY(-6px); opacity:1; } }
      `}</style>
    </>
  );
}
