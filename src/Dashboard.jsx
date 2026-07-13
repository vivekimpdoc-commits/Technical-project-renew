import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Users, FileSignature,
  Shield, LogOut, Menu, X, Lightbulb,
  UserCheck, LineChart, BrainCircuit, Clock4,
  CheckCircle, Medal, Radar, FileText,
  ShieldAlert, Database, Settings as SettingsIcon,
  Code, Briefcase, GitBranch, Network, GlobeLock, Landmark, Play, UserCog, BookOpen, GraduationCap, Presentation, Activity, Info, ChevronDown, Home, ShieldCheck, Cloud, MapPin
} from 'lucide-react';
import EthicsDashboard from './EthicsDashboard';
import GovernanceDashboard from './GovernanceDashboard';
import './index.css';
import ProjectTracker from './ProjectTracker';
import AllMembers from './AllMembers';
import ThaneLevelDashboard from './ThaneLevelDashboard';
import DistrictLevelDashboard from './DistrictLevelDashboard';
import PoliceFunctioningDashboard from './PoliceFunctioningDashboard';
import StepUpLiteracyDashboard from './StepUpLiteracyDashboard';
import FrontendDetails from './FrontendDetails';
import OfficerPerformance from './pages/OfficerPerformance';
import InvestigationAnalytics from './pages/InvestigationAnalytics';
import AICourseDashboard from './AICourseDashboard';
import AIInvestigation from './pages/AIInvestigation';
import DelayAnalysis from './pages/DelayAnalysis';
import InvestigationQuality from './pages/InvestigationQuality';
import OfficerRanking from './pages/OfficerRanking';
import PredictiveIntelligence from './pages/PredictiveIntelligence';
import Reports from './pages/Reports';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import MasterData from './pages/MasterData';
import SettingsPage from './pages/Settings';
import AuditLogs from './pages/AuditLogs';
import AICommandCenter from './pages/AICommandCenter';
import ProjectPPTDashboard from './ProjectPPTDashboard';
import SoftwareMasterclassDashboard from './SoftwareMasterclassDashboard';
import MLOpsDashboard from './MLOpsDashboard';
import AdvancedAICyberDashboard from './AdvancedAICyberDashboard';
import Overview from './Overview';
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stepUpSubTab, setStepUpSubTab] = useState('phases');
  const [members, setMembers] = useState([]);
  
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('appLanguage') || 'en');

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('appLanguage', lang);
    
    // Trigger Google Translate hidden dropdown
    const selectEl = document.querySelector('.goog-te-combo');
    if (selectEl) {
      selectEl.value = lang;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      // Fallback: Set cookie and reload if select is not loaded yet
      document.cookie = `googtrans=/en/${lang}; path=/`;
      window.location.reload();
    }
  };

  React.useEffect(() => {
    const savedLang = localStorage.getItem('appLanguage') || 'en';
    // Wait for the google translate dropdown to load
    const interval = setInterval(() => {
      const selectEl = document.querySelector('.goog-te-combo');
      if (selectEl) {
        selectEl.value = savedLang;
        selectEl.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const [resetTriggers, setResetTriggers] = useState({
    'step-up': 0,
    'thane-level': 0,
    'district-level': 0,
    'masterclass': 0,
    'mlops': 0
  });
  const [expandedSections, setExpandedSections] = useState({
    Education: false,
    Operations: false,
    Administrative: false
  });

  const toggleSection = (sec) => {
    setExpandedSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };
  const [projects, setProjects] = useState([]);
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'AI Driven Traffic Management', description: 'Using computer vision for real-time traffic light optimization at major intersections.', category: 'Innovation', status: 'New', date: '2026-07-06', impact: 'Reduce average wait times by 25% and decrease accidents.', resources: 'Camera feeds, AI Processing Unit, Cloud Storage.' },
    { id: 2, title: 'Cybercrime Reporting Portal', description: 'A simplified portal for citizens to quickly report digital fraud with evidence uploads.', category: 'Software Dev', status: 'Approved', date: '2026-07-05', impact: 'Increase reporting efficiency and citizen trust.', resources: 'Web hosting, Secure Database, Support Team.' }
  ]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const handleTabChange = (tab, subTab = 'phases') => {
    if (activeTab === tab) {
      setResetTriggers(prev => ({
        ...prev,
        [tab]: prev[tab] + 1
      }));
    } else {
      setActiveTab(tab);
      if (tab === 'step-up') {
        setStepUpSubTab(subTab);
      }
      if (tab === 'overview') {
        // Collapse all sections when going back to Home
        setExpandedSections({
          Education: false,
          Operations: false,
          Administrative: false
        });
      }
    }
    setIsMobileMenuOpen(false); // Close sidebar on mobile after select
  };

  React.useEffect(() => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [activeTab]);

  const navItems = [
    { id: 'overview', label: 'Home (मुख्य पृष्ठ)', icon: Home, color: '#2563eb', category: 'General' },
    { id: 'step-up', label: 'Step Up Literacy Software (स्टेप अप साक्षरता सॉफ्टवेयर)', icon: BookOpen, color: '#d946ef', category: 'Education' },
    { id: 'ai-course', label: 'Artificial Intelligence (AI) Course (आर्टिफिशियल इंटेलिजेंस (AI) कोर्स)', icon: GraduationCap, color: '#2563eb', category: 'Education' },
    { id: 'masterclass', label: 'Software Masterclass (सॉफ्टवेयर मास्टरक्लास)', icon: Code, color: '#06b6d4', category: 'Education' },
    { id: 'mlops', label: 'AI Operations - MLOps (AI ऑपरेशन्स)', icon: Activity, color: '#8b5cf6', category: 'Operations' },
    { id: 'advanced-ai', label: 'Advanced AI & Cyber Command (एडवांस्ड AI)', icon: GlobeLock, color: '#06b6d4', category: 'Operations' },
    { id: 'police-functioning', label: 'Police Functioning (AI पुलिस की कार्यप्रणाली)', icon: BrainCircuit, color: '#f59e0b', category: 'Operations' },
    { id: 'thane-level', label: 'Thane Level (पुलिस थाना स्तर)', icon: Shield, color: '#ef4444', category: 'Administrative' },
    { id: 'district-level', label: 'District Level (जिला स्तर (SP/SSP कार्यालय))', icon: Building2, color: '#0ea5e9', category: 'Administrative' },
    { id: 'project-ppt', label: 'Project PPT (प्रोजेक्ट पीपीटी)', icon: Presentation, color: '#64748b', category: 'Administrative' },
    // ---- New universal topics ----
    { id: 'devops', label: 'DevOps (CI/CD & Automation)', icon: Code, color: '#10b981', category: 'Special' },
    { id: 'security', label: 'Security & Compliance', icon: ShieldCheck, color: '#ef4444', category: 'Special' },
    { id: 'analytics', label: 'Analytics & Dashboard', icon: MapPin, color: '#3b82f6', category: 'Special' },
    { id: 'collaboration', label: 'Collaboration Hub', icon: Users, color: '#8b5cf6', category: 'Special' },
    { id: 'testing', label: 'Testing Frameworks', icon: CheckCircle, color: '#f59e0b', category: 'Special' },
    { id: 'documentation', label: 'Documentation (OpenAPI)', icon: FileText, color: '#06b6d4', category: 'Special' },
    { id: 'cloud-services', label: 'Cloud Services (AWS/GCP/Azure)', icon: Cloud, color: '#6366f1', category: 'Special' },
    { id: 'performance', label: 'Performance Tuning', icon: Activity, color: '#d97706', category: 'Special' },
    { id: 'roadmap', label: 'Product Roadmap', icon: Briefcase, color: '#64748b', category: 'Special' },
    { id: 'feedback', label: 'User Feedback', icon: UserCheck, color: '#2563eb', category: 'Special' },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        {/* Left Section: Brand & Seal */}
        <div className="header-brand" style={{ flexShrink: 0, minWidth: "280px" }}>
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ border: 'none', background: 'none', color: 'white', cursor: 'pointer', padding: 0 }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          {/* Clickable Logo & Title for Home Navigation */}
          <div 
            onClick={() => setActiveTab('overview')} 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            title="Go to Home"
          >
            {/* Stylized UP Police Crest */}
            <svg width="55" height="55" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.4))', marginRight: '0.75rem' }}>
              <circle cx="50" cy="50" r="45" fill="none" stroke="#d97706" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="41" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
              <path d="M50 20 C65 20, 70 30, 70 45 C70 65, 50 80, 50 80 C50 80, 30 65, 30 45 C30 30, 35 20, 50 20 Z" fill="rgba(185, 28, 28, 0.2)" stroke="#d97706" strokeWidth="2" />
              <path d="M38 45 C38 40, 48 35, 48 45 C48 50, 42 53, 38 45 Z" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <path d="M62 45 C62 40, 52 35, 52 45 C52 50, 58 53, 62 45 Z" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <path d="M35 32 Q50 40 65 32" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <line x1="50" y1="28" x2="50" y2="40" stroke="#f59e0b" strokeWidth="2.5" />
              <polygon points="50,42 47,38 53,38" fill="#f59e0b" />
              <polygon points="50,11 52,15 56,15 53,17 54,21 50,19 46,21 47,17 44,15 48,15" fill="#f59e0b" />
            </svg>

            {/* Title Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#f59e0b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                UP Police Academy & AI Command
              </span>
              <span style={{ 
                fontSize: '1.45rem', 
                fontWeight: '900', 
                background: 'linear-gradient(to right, #00d2ff, #00d2ff, #ffffff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.05em',
                display: 'inline-block'
              }}>
                K.A.V.A.C.H. AI PORTAL
              </span>
            </div>
          </div>
        </div>

        {/* Center Section: Academic / Strategic Description */}
        <div className="header-tagline-container" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <span style={{ fontSize: '0.95rem', fontWeight: '600', color: '#cbd5e1', textAlign: 'center', fontStyle: 'italic' }}>
            "Knowledge, Automation, Vision, & Analytics for Command Hub"
          </span>
          <span style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Investigation & Operational Training Platform
          </span>
        </div>

        {/* Right Section: Controls */}
        <div className="header-controls" style={{ flexShrink: 0, display: 'flex', justifyContent: 'flex-end', gap: '1.25rem' }}>
          {/* Logout Button */}
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white',
            textDecoration: 'none',
            padding: '0.35rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.75rem',
            fontWeight: '700',
            border: '1px solid #f87171',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)'
          }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(220, 38, 38, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.3)'; }}
          >
            <LogOut size={14} />
            Logout
          </Link>

          {/* Language Selector */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(0,0,0,0.4)',
            padding: '0.25rem',
            borderRadius: '2rem',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
          }}>
            <button
              className="notranslate"
              translate="no"
              onClick={() => changeLanguage('en')}
              style={{
                border: 'none',
                background: currentLanguage === 'en' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
                color: currentLanguage === 'en' ? '#fff' : '#cbd5e1',
                padding: '0.3rem 0.75rem',
                borderRadius: '1.5rem',
                fontSize: '0.7rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: currentLanguage === 'en' ? '0 2px 8px rgba(245, 158, 11, 0.5)' : 'none'
              }}
            >
              EN
            </button>
            <button
              className="notranslate"
              translate="no"
              onClick={() => changeLanguage('hi')}
              style={{
                border: 'none',
                background: currentLanguage === 'hi' ? 'linear-gradient(135deg, #f59e0b, #d97706)' : 'transparent',
                color: currentLanguage === 'hi' ? '#fff' : '#cbd5e1',
                padding: '0.3rem 0.75rem',
                borderRadius: '1.5rem',
                fontSize: '0.7rem',
                fontWeight: '800',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: currentLanguage === 'hi' ? '0 2px 8px rgba(245, 158, 11, 0.5)' : 'none'
              }}
            >
              हिंदी
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard Layout with Sidebar */}
      <div className="dashboard-layout">

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="sidebar-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        {/* Sidebar */}
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`} style={{ 
          height: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          background: '#ffffff',
          borderRight: '1px solid #e2e8f0',
          padding: 0
        }}>
          {/* Fixed Top Controls Area - Tactical Blue Welcome Badge */}
          <div style={{
            padding: '1rem 0.75rem',
            borderBottom: '1px solid #e2e8f0',
            background: 'linear-gradient(135deg, #eef4ff, #dbeafe)',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            borderLeft: '4px solid #3b82f6',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.08)'
          }}>
            <div style={{
              background: 'rgba(59, 130, 246, 0.12)',
              color: '#2563eb',
              padding: '0.5rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 6px rgba(59, 130, 246, 0.15)'
            }}>
              <UserCheck size={18} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span className="notranslate" translate="no" style={{ fontSize: '0.7rem', fontWeight: '800', color: '#d946ef', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI OPERATIVE COMMANDER
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.02em' }}>
                K.A.V.A.C.H. HUB ONLINE
              </span>
            </div>
          </div>

          {/* Scrollable Nav Area */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 0.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {(() => {
              const isEducationActive = expandedSections.Education || navItems.filter(i => i.category === 'Education').some(i => i.id === activeTab);
              const isOperationsActive = expandedSections.Operations || navItems.filter(i => i.category === 'Operations').some(i => i.id === activeTab);
              const isAdministrativeActive = expandedSections.Administrative || navItems.filter(i => i.category === 'Administrative').some(i => i.id === activeTab);

              return (
                <>
                  {/* General Tab (Home) */}
                  {navItems.filter(i => i.category === 'General').map((item) => (
                    <div
                      key={item.id}
                      className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                      onClick={() => handleTabChange(item.id)}
                      style={{
                          background: activeTab === item.id ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                          color: activeTab === item.id ? '#1e40af' : '#475569',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.7rem 1rem',
                          gap: '0.75rem',
                          cursor: 'pointer',
                          borderRadius: '0.5rem',
                          borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                          boxShadow: activeTab === item.id ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                        }}
                      onMouseEnter={(e) => {
                        if (activeTab !== item.id) {
                          e.currentTarget.style.background = '#f1f5f9';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (activeTab !== item.id) {
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <div style={{
                          background: activeTab === item.id ? item.color : '#f1f5f9',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activeTab === item.id ? 'white' : item.color,
                          transition: 'all 0.2s',
                          boxShadow: activeTab === item.id ? `0 2px 6px ${item.color}60` : 'none'
                        }}>
                        <item.icon size={16} strokeWidth={2} />
                      </div>
                      <span style={{
                        fontWeight: activeTab === item.id ? '700' : '600',
                        fontSize: '0.9rem',
                        transition: 'color 0.3s ease'
                      }}>
                        {item.label}
                      </span>
                    </div>
                  ))}

                  {/* Group 1: Education */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div 
                      onClick={() => toggleSection('Education')}
                      style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '800', 
                        color: '#2563eb', 
                        background: isEducationActive ? '#2563eb05' : '#f8fafc', 
                        padding: '1.05rem 1.25rem', 
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        borderLeft: isEducationActive ? '4px solid #2563eb' : '4px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                        boxShadow: '0 1px 3px rgba(37, 99, 235, 0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isEducationActive ? '#2563eb05' : '#f8fafc';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ 
                          background: '#2563eb15', 
                          padding: '0.6rem', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#2563eb',
                          transition: 'all 0.2s'
                        }}>
                          <GraduationCap size={18} />
                        </div>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>Education & IT Capacity</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Education ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#2563eb' }} />
                    </div>
                    {expandedSections.Education && navItems.filter(i => i.category === 'Education').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => handleTabChange(item.id)}
                        style={{
                          marginLeft: '0.75rem',
                          background: activeTab === item.id ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                          color: activeTab === item.id ? '#1e40af' : '#475569',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.7rem 1rem',
                          gap: '0.75rem',
                          cursor: 'pointer',
                          borderRadius: '0.5rem',
                          borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                          boxShadow: activeTab === item.id ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = '#f1f5f9';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        <div style={{
                          background: activeTab === item.id ? item.color : '#f1f5f9',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activeTab === item.id ? 'white' : item.color,
                          transition: 'all 0.2s',
                          boxShadow: activeTab === item.id ? `0 2px 6px ${item.color}60` : 'none'
                        }}>
                          <item.icon size={16} strokeWidth={2} />
                        </div>
                        <span style={{
                          fontWeight: activeTab === item.id ? '700' : '600',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Group 2: Operations */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div 
                      onClick={() => toggleSection('Operations')}
                      style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '800', 
                        color: '#0d9488', 
                        background: isOperationsActive ? '#0d948805' : '#f8fafc', 
                        padding: '1.05rem 1.25rem', 
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        borderLeft: isOperationsActive ? '4px solid #0d9488' : '4px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                        boxShadow: '0 1px 3px rgba(13, 148, 136, 0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isOperationsActive ? '#0d948805' : '#f8fafc';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ 
                          background: '#0d948815', 
                          padding: '0.6rem', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#0d9488',
                          transition: 'all 0.2s'
                        }}>
                          <BrainCircuit size={18} />
                        </div>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>AI & Operations Command</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Operations ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#0d9488' }} />
                    </div>
                    {expandedSections.Operations && navItems.filter(i => i.category === 'Operations').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => handleTabChange(item.id)}
                        style={{
                          marginLeft: '0.75rem',
                          background: activeTab === item.id ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                          color: activeTab === item.id ? '#1e40af' : '#475569',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.7rem 1rem',
                          gap: '0.75rem',
                          cursor: 'pointer',
                          borderRadius: '0.5rem',
                          borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                          boxShadow: activeTab === item.id ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = '#f1f5f9';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        <div style={{
                          background: activeTab === item.id ? item.color : '#f1f5f9',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activeTab === item.id ? 'white' : item.color,
                          transition: 'all 0.2s',
                          boxShadow: activeTab === item.id ? `0 2px 6px ${item.color}60` : 'none'
                        }}>
                          <item.icon size={16} strokeWidth={2} />
                        </div>
                        <span style={{
                          fontWeight: activeTab === item.id ? '700' : '600',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Group 3: Administrative */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div 
                      onClick={() => toggleSection('Administrative')}
                      style={{ 
                        fontSize: '0.9rem', 
                        fontWeight: '800', 
                        color: '#dc2626', 
                        background: isAdministrativeActive ? '#dc262605' : '#f8fafc', 
                        padding: '1.05rem 1.25rem', 
                        borderRadius: '0.5rem',
                        border: '1px solid #cbd5e1',
                        borderLeft: isAdministrativeActive ? '4px solid #dc2626' : '4px solid transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        userSelect: 'none',
                        boxShadow: '0 1px 3px rgba(220, 38, 38, 0.05)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f1f5f9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = isAdministrativeActive ? '#dc262605' : '#f8fafc';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ 
                          background: '#dc262615', 
                          padding: '0.6rem', 
                          borderRadius: '0.5rem', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          color: '#dc2626',
                          transition: 'all 0.2s'
                        }}>
                          <Building2 size={18} />
                        </div>
                        <span style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>Administrative & Field Levels</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Administrative ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#dc2626' }} />
                    </div>
                    {expandedSections.Administrative && navItems.filter(i => i.category === 'Administrative').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => handleTabChange(item.id)}
                        style={{
                          marginLeft: '0.75rem',
                          background: activeTab === item.id ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
                          color: activeTab === item.id ? '#1e40af' : '#475569',
                          transition: 'all 0.2s ease',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0.7rem 1rem',
                          gap: '0.75rem',
                          cursor: 'pointer',
                          borderRadius: '0.5rem',
                          borderLeft: activeTab === item.id ? `4px solid ${item.color}` : '4px solid transparent',
                          boxShadow: activeTab === item.id ? '0 2px 8px rgba(0,0,0,0.04)' : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = '#f1f5f9';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (activeTab !== item.id) {
                            e.currentTarget.style.background = 'transparent';
                          }
                        }}
                      >
                        <div style={{
                          background: activeTab === item.id ? item.color : '#f1f5f9',
                          padding: '0.5rem',
                          borderRadius: '0.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: activeTab === item.id ? 'white' : item.color,
                          transition: 'all 0.2s',
                          boxShadow: activeTab === item.id ? `0 2px 6px ${item.color}60` : 'none'
                        }}>
                          <item.icon size={16} strokeWidth={2} />
                        </div>
                        <span style={{
                          fontWeight: activeTab === item.id ? '700' : '600',
                          fontSize: '0.9rem',
                          transition: 'color 0.3s ease'
                        }}>
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto', width: '100%' }}>
          {activeTab === 'overview' && (
            <Overview onNavigate={(tabId, subTabId) => handleTabChange(tabId, subTabId)} />
          )}
          {activeTab === 'step-up' && (
            <StepUpLiteracyDashboard defaultTab={stepUpSubTab} resetTrigger={resetTriggers['step-up']} />
          )}
          {activeTab === 'ai-course' && (
            <AICourseDashboard />
          )}
          {activeTab === 'frontend' && (
            <FrontendDetails />
          )}
          {activeTab === 'police-functioning' && <PoliceFunctioningDashboard />}
          {activeTab === 'thane-level' && <ThaneLevelDashboard projects={projects} resetTrigger={resetTriggers['thane-level']} />}
          {activeTab === 'district-level' && <DistrictLevelDashboard resetTrigger={resetTriggers['district-level']} />}
          {activeTab === 'project-ppt' && <ProjectPPTDashboard />}
          {activeTab === 'masterclass' && <SoftwareMasterclassDashboard resetTrigger={resetTriggers['masterclass']} />}
          {activeTab === 'mlops' && <MLOpsDashboard resetTrigger={resetTriggers['mlops']} />}
          {activeTab === 'advanced-ai' && <AdvancedAICyberDashboard />}
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <div className="footer-copyright" style={{ marginTop: '0', fontSize: '0.9rem', color: '#94a3b8' }}>
          © 2026 UP Police AI Investigation Command Center. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
