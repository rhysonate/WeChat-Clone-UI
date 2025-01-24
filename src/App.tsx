import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChatList from './components/ChatList';
import ChatDetail from './components/ChatDetail';
import Contacts from './components/Contacts';
import Discover from './components/Discover';
import Profile from './components/Profile';
import Moments from './components/Moments';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatDetail />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/moments" element={<Moments />} />
          <Route path="/me" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;