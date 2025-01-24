import React from 'react';
import { Search } from 'lucide-react';

const contacts = [
  { letter: 'A', items: [
    { name: 'Alice Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
    { name: 'Alex Wong', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
  ]},
  { letter: 'B', items: [
    { name: 'Bob Smith', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
  ]},
  { letter: 'C', items: [
    { name: 'Carol White', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
  ]},
];

export default function Contacts() {
  return (
    <div className="h-full">
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">Contacts</h1>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search contacts"
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          />
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {contacts.map(({ letter, items }) => (
          <div key={letter} className="bg-white dark:bg-gray-800">
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 text-sm text-gray-500">
              {letter}
            </div>
            {items.map((contact) => (
              <div
                key={contact.name}
                className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <span className="ml-4 font-medium">{contact.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}