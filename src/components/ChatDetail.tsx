import React from 'react';
import { ArrowLeft, MoreVertical, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChatDetail() {
  const navigate = useNavigate();

  const messages = [
    { id: 1, content: 'Hey, are we still meeting today?', sender: 'them', timestamp: '10:30 AM' },
    { id: 2, content: 'Yes, at 2 PM!', sender: 'me', timestamp: '10:31 AM' },
    { id: 3, content: 'Perfect, see you then!', sender: 'them', timestamp: '10:32 AM' },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4">
          <ArrowLeft />
        </button>
        <div className="flex-1">
          <h2 className="font-semibold">Alice Chen</h2>
        </div>
        <button>
          <MoreVertical />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === 'me'
                  ? 'bg-green-500 text-white'
                  : 'bg-white dark:bg-gray-700'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs mt-1 opacity-70">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-full px-4 py-2 bg-gray-100 dark:bg-gray-700 focus:outline-none"
          />
          <button className="p-2 rounded-full bg-green-500 text-white">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}