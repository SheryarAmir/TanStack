"use client"

import { useState } from 'react';

export default function RAGChatInterface() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [sources, setSources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');
    setSources([]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (res.ok) {
        setAnswer(data.answer);
        setSources(data.sources || []);
      } else {
        setAnswer(`Error: ${data.error}`);
      }
    } catch (error) {
      setAnswer('Failed to connect to server.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
          📄 RAG PDF Assistant
        </h1>

        <div className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question about your PDF..."
              className="flex-1 px-4 py-3 rounded-lg border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none"
              disabled={loading}
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              {loading ? '...' : 'Ask'}
            </button>
          </div>
        </div>

        {answer && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              💡 Answer
            </h2>
            <p className="text-gray-700 leading-relaxed">{answer}</p>
          </div>
        )}

        {sources.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              📚 Sources (Retrieved Chunks)
            </h2>
            <div className="space-y-3">
              {sources.map((source, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <p className="text-sm text-gray-600">{source.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!answer && !loading && (
          <div className="text-center text-gray-500 mt-12">
            Ask a question to get started!
          </div>
        )}
      </div>
    </div>
  );
}