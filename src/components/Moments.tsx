import React from 'react';
import { Heart, MessageCircle, MoreHorizontal } from 'lucide-react';
import { Post } from '../types';

const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Alice Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    content: 'Beautiful day at the park! 🌳',
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206',
    ],
    likes: 24,
    comments: 5,
    timestamp: new Date(),
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Bob Smith',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    },
    content: 'Just tried this amazing restaurant! 🍜',
    images: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ],
    likes: 18,
    comments: 3,
    timestamp: new Date(),
  },
];

export default function Moments() {
  return (
    <div className="h-full bg-gray-100 dark:bg-gray-900">
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 right-4 flex items-center">
          <span className="text-white font-semibold mr-2">John Doe</span>
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
            alt="Profile"
            className="w-16 h-16 rounded-lg object-cover border-2 border-white"
          />
        </div>
      </div>

      <div className="space-y-4 p-4">
        {mockPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-start">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{post.user.name}</h3>
                  <button>
                    <MoreHorizontal size={20} className="text-gray-500" />
                  </button>
                </div>
                <p className="mt-2">{post.content}</p>
                {post.images && (
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {post.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Post ${index + 1}`}
                        className="rounded-lg w-full h-40 object-cover"
                      />
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center space-x-4">
                  <button className="flex items-center text-gray-500">
                    <Heart size={20} className="mr-1" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center text-gray-500">
                    <MessageCircle size={20} className="mr-1" />
                    <span>{post.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}