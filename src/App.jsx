import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import AIWebsite from './AIWebsite';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-website" element={<AIWebsite />} />
      </Routes>
    </Router>
  );
}
