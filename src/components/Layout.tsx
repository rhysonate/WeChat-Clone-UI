import React from 'react';
import { MessageCircle, Users, Compass, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  const tabs = [
    { icon: MessageCircle, label: 'Chats', path: '/' },
    { icon: Users, label: 'Contacts', path: '/contacts' },
    { icon: Compass, label: 'Discover', path: '/discover' },
    { icon: User, label: 'Me', path: '/me' },
  ];

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
      
      <nav className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-around">
          {tabs.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center py-2 px-3 ${
                location.pathname === path
                  ? 'text-green-500'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}