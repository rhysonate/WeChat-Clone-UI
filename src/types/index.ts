export interface User {
  id: string;
  name: string;
  avatar: string;
  status?: string;
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'voice';
}

export interface Chat {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  isGroup: boolean;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  images?: string[];
  likes: number;
  comments: number;
  timestamp: Date;
}