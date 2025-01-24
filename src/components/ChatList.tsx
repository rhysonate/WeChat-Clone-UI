import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Chat } from '../types';

const mockChats: Chat[] = [
  {
    id: '1',
    participants: [{
      id: '2',
      name: 'Alice Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    }],
    lastMessage: {
      id: '1',
      senderId: '2',
      content: 'Hey, are we still meeting today?',
      timestamp: new Date(),
      type: 'text',
    },
    unreadCount: 2,
    isGroup: false,
  },
  {
    id: '2',
    participants: [{
      id: '3',
      name: 'Team Project',
      avatar: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac',
    }],
    lastMessage: {
      id: '2',
      senderId: '3',
      content: 'Meeting notes have been shared',
      timestamp: new Date(),
      type: 'text',
    },
    unreadCount: 0,
    isGroup: true,
  },
];

export default function ChatList() {
  const navigate = useNavigate();

  return (
    <div className="h-full">
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">WeChat</h1>
      </div>
      
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {mockChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
            className="flex items-center p-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
          >
            <img
              src={chat.participants[0].avatar}
              alt={chat.participants[0].name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium">{chat.participants[0].name}</h3>
                <span className="text-sm text-gray-500">
                  {chat.lastMessage?.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage?.content}</p>
            </div>
            {chat.unreadCount > 0 && (
              <span className="ml-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {chat.unreadCount}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}