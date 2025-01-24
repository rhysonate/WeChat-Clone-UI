import React from 'react';
import { Image, Grid, Scan, Gift } from 'lucide-react';

const features = [
  { icon: Image, label: 'Moments', badge: 5 },
  { icon: Grid, label: 'Mini Programs' },
  { icon: Scan, label: 'Scan' },
  { icon: Gift, label: 'Games' },
];

export default function Discover() {
  return (
    <div className="h-full bg-gray-100 dark:bg-gray-900">
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl font-semibold">Discover</h1>
      </div>

      <div className="mt-2">
        {features.map(({ icon: Icon, label, badge }) => (
          <div
            key={label}
            className="flex items-center p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Icon size={20} className="text-gray-600 dark:text-gray-300" />
            </div>
            <span className="ml-4 flex-1">{label}</span>
            {badge && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
                {badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}