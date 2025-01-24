export const animeUsers = [
  {
    id: '1',
    name: 'Naruto Uzumaki',
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    status: 'Believe it! 🍜',
  },
  {
    id: '2',
    name: 'Mikasa Ackerman',
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    status: 'Protecting Eren',
  },
  {
    id: '3',
    name: 'Goku Son',
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    status: 'Training! 💪',
  },
  {
    id: '4',
    name: 'Sailor Moon',
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    status: 'Fighting evil by moonlight ✨',
  },
  {
    id: '5',
    name: 'Light Yagami',
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    status: 'Just writing in my notebook 📓',
  },
];

export const mockChats = [
  {
    id: '1',
    participants: [animeUsers[0]],
    lastMessage: {
      id: '1',
      senderId: '1',
      content: 'Sasuke, come back to the village!',
      timestamp: new Date(),
      type: 'text',
    },
    unreadCount: 3,
    isGroup: false,
  },
  {
    id: '2',
    participants: [animeUsers[1]],
    lastMessage: {
      id: '2',
      senderId: '2',
      content: 'Eren... where are you?',
      timestamp: new Date(),
      type: 'text',
    },
    unreadCount: 1,
    isGroup: false,
  },
  {
    id: '3',
    participants: [animeUsers[2]],
    lastMessage: {
      id: '3',
      senderId: '3',
      content: 'Anyone up for training?',
      timestamp: new Date(),
      type: 'text',
    },
    unreadCount: 0,
    isGroup: false,
  },
];

export const mockPosts = [
  {
    id: '1',
    user: animeUsers[0],
    content: 'Just mastered a new jutsu! 🌪️ #ninja #konoha',
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    ],
    likes: 1234,
    comments: 89,
    timestamp: new Date(),
  },
  {
    id: '2',
    user: animeUsers[1],
    content: 'Training with the Survey Corps today 🗡️ #aot',
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    ],
    likes: 2891,
    comments: 156,
    timestamp: new Date(),
  },
  {
    id: '3',
    user: animeUsers[2],
    content: 'Hit a new power level today! 💥 #supersaiyan',
    images: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477',
    ],
    likes: 9999,
    comments: 445,
    timestamp: new Date(),
  },
];

export const mockGroups = [
  {
    id: 'g1',
    name: 'Konoha Ninjas',
    members: [animeUsers[0], animeUsers[1], animeUsers[2]],
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
  },
  {
    id: 'g2',
    name: 'Survey Corps',
    members: [animeUsers[1], animeUsers[3], animeUsers[4]],
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
  },
  {
    id: 'g3',
    name: 'Z Fighters',
    members: [animeUsers[2], animeUsers[0], animeUsers[3]],
    avatar: 'https://images.unsplash.com/photo-1578632767115-351597cf2477',
  },
];