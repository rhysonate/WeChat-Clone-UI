import React from 'react';
import { Settings, Bell, Lock, Moon, HelpCircle, LogOut } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { animeUsers } from '../data/mockData';

const currentUser = animeUsers[0]; // Using Naruto as the current user

const menuItems = [
  { icon: Settings, label: 'Settings' },
  { icon: Bell, label: 'Notifications' },
  { icon: Lock, label: 'Privacy' },
  { icon: Moon, label: 'Dark Mode', toggle: true },
  { icon: HelpCircle, label: 'Help & Feedback' },
  { icon: LogOut, label: 'Log Out', danger: true },
];

export default function Profile() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="h-full bg-gray-50 dark:bg-dark-900">
      <div className="p-4 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Me</h1>
      </div>

      <div className="p-4 bg-white dark:bg-dark-800 mb-2">
        <div className="flex items-center">
          <img
            src={currentUser.avatar}
            alt="Profile"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="ml-4">
            <h2 className="font-semibold text-lg text-gray-900 dark:text-white">
              {currentUser.name}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              WeChat ID: {currentUser.name.toLowerCase().replace(' ', '')}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              {currentUser.status}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        {menuItems.map(({ icon: Icon, label, danger, toggle }) => (
          <div
            key={label}
            className="flex items-center p-4 bg-white dark:bg-dark-800 cursor-pointer"
            onClick={() => toggle && toggleTheme()}
          >
            <Icon
              size={20}
              className={
                danger
                  ? 'text-red-500'
                  : 'text-gray-600 dark:text-gray-300'
              }
            />
            <span
              className={`ml-4 ${
                danger
                  ? 'text-red-500'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {label}
            </span>
            {toggle && (
              <div className="ml-auto">
                <div
                  className={`w-11 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${
                    isDark ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      isDark ? 'translate-x-5' : ''
                    }`}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}