import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, User, ArrowRight, Building2, Lightbulb } from 'lucide-react';
import './Login.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-bg-shape1"></div>
      <div className="login-bg-shape2"></div>
      
      <div className="login-content-wrapper">
        <div className="login-brand">
          <div className="login-brand-logo">
            <Shield size={48} color="#ef4444" fill="#ef4444" />
            <h1 className="login-brand-title">KARTAVYA <span>(कर्तव्य)</span></h1>
          </div>
          <p className="login-brand-subtitle">
            Secure access portal for UP Police Technical Project & Resource Management System.
          </p>
          
          <div className="login-features">
            <div className="login-feature-item">
              <Building2 size={20} color="#3b82f6" />
              <span>Centralized project allocation and tracking</span>
            </div>
            <div className="login-feature-item">
              <Shield size={20} color="#10b981" />
              <span>Resource and team directory management</span>
            </div>
            <div className="login-feature-item">
              <Lightbulb size={20} color="#f59e0b" />
              <span>Idea brainstorming and innovation tracking</span>
            </div>
          </div>
        </div>

        <div className="login-form-container">
          <div className="login-form-header">
            <h2>Authorized Login</h2>
            <p>Please enter your credentials to access the portal</p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="login-input-group">
              <label className="login-label">PNO / User ID</label>
              <div className="login-input-wrapper">
                <User size={18} className="login-input-icon" />
                <input 
                  type="text" 
                  className="login-input" 
                  placeholder="Enter your User ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-input-group">
              <label className="login-label">Password</label>
              <div className="login-input-wrapper">
                <Lock size={18} className="login-input-icon" />
                <input 
                  type="password" 
                  className="login-input" 
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="login-options">
              <label className="login-checkbox-wrapper">
                <input type="checkbox" className="login-checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="login-forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="login-submit-btn">
              Secure Login <ArrowRight size={18} />
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
