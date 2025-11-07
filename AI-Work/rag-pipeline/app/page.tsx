// app/chat/page.tsx
"use client";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );

  const sendMessage = async () => {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: data.reply },
    ]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="space-y-4 mb-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "text-blue-600" : "text-green-700"}
          >
            <b>{m.role === "user" ? "You:" : "Bot:"}</b> {m.text}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Ask something about Formula 1..."
      />
      <button
        onClick={sendMessage}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}
