// src/pages/Chat.tsx
import { useState, useRef, useEffect } from "react";
import "./Chat.css";

export function Chat() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    // adiciona a mensagem do usuário
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // simula resposta do "bot"
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Obrigado por sua mensagem! Em breve responderemos. 😊", sender: "bot" },
      ]);
    }, 800);
  };

  // envia com Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") sendMessage();
  };

  // scroll automático
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <main className="chat-page">
      <h1 className="chat-title">Nosso Chat</h1>

      <div className="chat-box">
        {messages.length === 0 && (
          <p className="empty-chat">Nenhuma mensagem ainda. Envie algo! 💬</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </main>
  );
}
