// src/pages/Chat.tsx
import { useState } from "react";

export function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages((prev) => [...prev, input]);
      setInput("");
    }
  };

  return (
    <main className="chat-page">
      <h1>Nosso Chat</h1>

      <div className="chat-box">
        {messages.length === 0 && (
          <p className="empty-chat">Nenhuma mensagem ainda.</p>
        )}
        {messages.map((msg, i) => (
          <div key={i} className="chat-message">
            {msg}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </main>
  );
}
