import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, Users, FileSignature, 
  MapPin, Shield, Building, ChevronDown, 
  AlertTriangle, Phone, ExternalLink, LogOut, Menu, X, Lightbulb
} from 'lucide-react';
import './index.css';
import ProjectTracker from './ProjectTracker';
import AllMembers from './AllMembers';
import MainDashboard from './MainDashboard';
import TopicIdeas from './TopicIdeas';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('tracker');
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'AI Driven Traffic Management', description: 'Using computer vision for real-time traffic light optimization at major intersections.', category: 'Innovation', status: 'New', date: '2026-07-06', impact: 'Reduce average wait times by 25% and decrease accidents.', resources: 'Camera feeds, AI Processing Unit, Cloud Storage.' },
    { id: 2, title: 'Cybercrime Reporting Portal', description: 'A simplified portal for citizens to quickly report digital fraud with evidence uploads.', category: 'Software Dev', status: 'Approved', date: '2026-07-05', impact: 'Increase reporting efficiency and citizen trust.', resources: 'Web hosting, Secure Database, Support Team.' }
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const acronym = [
    { letter: 'K', text: 'कानून और व्यवस्था' },
    { letter: 'A', text: 'आपातकालीन प्रबंधन' },
    { letter: 'R', text: 'रिस्पांस और रिपोर्टिंग' },
    { letter: 'T', text: 'तत्परता और त्वरित कार्रवाई' },
    { letter: 'A', text: 'अधिकार और कर्तव्यों का संतुलन' },
    { letter: 'V', text: 'विश्वसनीयता और निष्पक्षता' },
    { letter: 'Y', text: 'योजनाबद्ध कार्यवाही' },
    { letter: 'A', text: 'आदर्श पालन और आचरण' }
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false); // Close sidebar on mobile after select
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header" style={{ position: 'relative' }}>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="header-title-container">
          <Shield className="header-icon" size={32} />
          <h1 className="header-title">KARTAVYA <span>(कर्तव्य)</span></h1>
        </div>
        <p className="header-subtitle">Technical Project Management & Resource Tracker (तकनीकी परियोजना प्रबंधन एवं रिसोर्स ट्रैकर) | Innovation - Integration - Implementation (नवाचार - एकीकरण - कार्यान्वयन)</p>
        
        {/* Logout Button */}
        <Link to="/" style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255,255,255,0.1)',
          color: 'white',
          textDecoration: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '2rem',
          fontSize: '0.85rem',
          fontWeight: '600',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.2)',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
        >
          <LogOut size={16} />
          Logout
        </Link>
      </header>

      {/* Dashboard Layout with Sidebar */}
      <div className="dashboard-layout">
        
        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
          <div 
            className={`sidebar-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabChange('dashboard')}
          >
            <Building2 className="nav-icon" size={20} />
            Dashboard
          </div>
          <div 
            className={`sidebar-nav-item ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => handleTabChange('members')}
          >
            <Users className="nav-icon" size={20} />
            All Members
          </div>
          <div 
            className={`sidebar-nav-item ${activeTab === 'tracker' ? 'active' : ''}`}
            onClick={() => handleTabChange('tracker')}
          >
            <FileSignature className="nav-icon" size={20} />
            Project Tracker
          </div>
          <div 
            className={`sidebar-nav-item ${activeTab === 'ideas' ? 'active' : ''}`}
            onClick={() => handleTabChange('ideas')}
          >
            <Lightbulb className="nav-icon" size={20} />
            Idea for Topic
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {activeTab === 'dashboard' && (
            <MainDashboard members={members} projects={projects} ideas={ideas} />
          )}
          
          {activeTab === 'members' && (
            <AllMembers members={members} setMembers={setMembers} />
          )}

          {activeTab === 'tracker' && (
            <ProjectTracker members={members} projects={projects} setProjects={setProjects} />
          )}

          {activeTab === 'ideas' && (
            <TopicIdeas ideas={ideas} setIdeas={setIdeas} />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <h4 className="footer-heading">Kartavya Stands For</h4>
        
        <div className="acronym-container">
          {acronym.map((item, index) => (
            <div key={index} className="acronym-badge">
              <span className="acronym-letter">{item.letter}</span>
              <span className="acronym-text">- {item.text}</span>
            </div>
          ))}
        </div>
        
        <div className="footer-copyright">
          © 2026 UP Police Technical Project & Resource Management System
        </div>
      </footer>
    </div>
  );
}
