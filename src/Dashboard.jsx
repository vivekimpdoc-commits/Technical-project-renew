import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2, Users, FileSignature,
  Shield, LogOut, Menu, X, Lightbulb,
  UserCheck, LineChart, BrainCircuit, Clock4,
  CheckCircle, Medal, Radar, FileText,
  ShieldAlert, Database, Settings as SettingsIcon,
  Code, Briefcase, GitBranch, Network, GlobeLock, Landmark, Play, UserCog, BookOpen, GraduationCap, Presentation, Activity, Info, ChevronDown, Home, ShieldCheck, Cloud, MapPin,
  Moon, Sun, Search, Bell, PanelLeftClose, PanelLeftOpen, ChevronRight
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
import ChatbotAssistant from './ChatbotAssistant';
import AnalyticsDashboard from './AnalyticsDashboard';

export default function Dashboard() {
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
    { id: 'project-ppt', label: 'Project PPT (प्रोजेक्ट पीपीटी)', icon: Presentation, color: 'var(--text-muted)', category: 'Administrative' },
    { id: 'analytics', label: 'Live Analytics & Metrics (एनालिटिक्स)', icon: MapPin, color: '#3b82f6', category: 'Operations' },
  ];

  const [activeTab, setActiveTab] = useState('overview');
  const [subBreadcrumb, setSubBreadcrumb] = useState([]);
  const [stepUpSubTab, setStepUpSubTab] = useState('phases');
  const [members, setMembers] = useState([]);

  // ── Dark Mode ────────────────────────────────────────────────────
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [showAIAnimation, setShowAIAnimation] = useState(false);

  // ── Search & Notifications ───────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Module Added', desc: 'Step Up Literacy Phase 5 is now live.', time: '10m ago', unread: true },
    { id: 2, title: 'System Update', desc: 'Server maintenance completed successfully.', time: '1h ago', unread: true },
    { id: 3, title: 'New Registration', desc: 'Officer Ramesh joined District HQ.', time: '2h ago', unread: false },
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;
  // ─────────────────────────────────────────────────────────────────

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  // ─────────────────────────────────────────────────────────────────

  
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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);



  const handleTabChange = (tab, subTab = 'phases') => {
    setSubBreadcrumb([]);
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

  const filteredNavItems = navItems.filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()));

  const activeItem = navItems.find(i => i.id === activeTab);

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
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Investigation & Operational Training Platform
          </span>
        </div>

        {/* Right Section: Controls */}
        <div className="header-controls" style={{ flexShrink: 0, display: 'flex', justifyContent: 'flex-end', gap: '1.25rem', alignItems: 'center' }}>

          {/* 🔍 Global Search */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.1)', borderRadius: '2rem', padding: '0.35rem 0.75rem', border: '1px solid rgba(255,255,255,0.2)' }}>
              <Search size={14} color="#94a3b8" />
              <input
                type="text"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchDropdown(e.target.value.length > 0);
                }}
                onFocus={() => { if (searchQuery.length > 0) setShowSearchDropdown(true); }}
                onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
                style={{ background: 'transparent', border: 'none', color: 'white', marginLeft: '0.5rem', outline: 'none', fontSize: '0.8rem', width: '120px', transition: 'width 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.width = '180px'}
                onMouseLeave={(e) => { if (searchQuery === '') e.target.style.width = '120px' }}
              />
            </div>

            {/* Search Dropdown */}
            {showSearchDropdown && (
              <div style={{ position: 'absolute', top: 'calc(100% + 0.5rem)', right: 0, width: '300px', background: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--card-border)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 50, maxHeight: '350px', overflowY: 'auto' }}>
                <div style={{ padding: '0.75rem', borderBottom: '1px solid var(--card-border)', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-muted)' }}>Search Results</div>
                {filteredNavItems.length > 0 ? (
                  <div style={{ padding: '0.5rem' }}>
                    {filteredNavItems.map(item => (
                      <div
                        key={item.id}
                        onClick={() => { setActiveTab(item.id); setShowSearchDropdown(false); setSearchQuery(''); }}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', cursor: 'pointer', borderRadius: '0.5rem', color: 'var(--text-main)', transition: 'background 0.2s' }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--icon-bg)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        <item.icon size={16} color={item.color} />
                        <span style={{ fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.85rem' }}>No modules found</div>
                )}
              </div>
            )}
          </div>

          {/* 🔔 Notification Bell */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative', transition: 'all 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >
              <Bell size={16} />
              {unreadCount > 0 && (
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#ef4444', color: 'white', fontSize: '0.65rem', fontWeight: 'bold', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #151b27' }}>
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div style={{ position: 'absolute', top: 'calc(100% + 0.5rem)', right: 0, width: '320px', background: 'var(--card-bg)', borderRadius: '0.75rem', border: '1px solid var(--card-border)', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', zIndex: 50 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid var(--card-border)' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>Notifications</span>
                  {unreadCount > 0 && (
                    <button onClick={() => setNotifications(notifications.map(n => ({ ...n, unread: false })))} style={{ background: 'none', border: 'none', color: '#2563eb', fontSize: '0.75rem', cursor: 'pointer', fontWeight: '600' }}>Mark all read</button>
                  )}
                </div>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {notifications.map(n => (
                    <div key={n.id} style={{ padding: '1rem', borderBottom: '1px solid var(--card-border)', background: n.unread ? 'var(--icon-bg)' : 'transparent' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {n.unread && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span>}
                          {n.title}
                        </span>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{n.time}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: n.unread ? '1.25rem' : '0' }}>{n.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: isDarkMode
                ? 'linear-gradient(135deg, #1e3a5f, #2563eb)'
                : 'linear-gradient(135deg, #1e293b, #334155)',
              color: isDarkMode ? '#93c5fd' : '#f8fafc',
              border: isDarkMode ? '1px solid #3b82f6' : '1px solid #475569',
              padding: '0.35rem 0.9rem',
              borderRadius: '2rem',
              fontSize: '0.75rem',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: isDarkMode
                ? '0 4px 12px rgba(59,130,246,0.35), 0 0 0 1px rgba(59,130,246,0.2)'
                : '0 4px 12px rgba(0,0,0,0.25)',
              letterSpacing: '0.03em',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = isDarkMode ? '0 6px 18px rgba(59,130,246,0.5)' : '0 6px 18px rgba(0,0,0,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = isDarkMode ? '0 4px 12px rgba(59,130,246,0.35)' : '0 4px 12px rgba(0,0,0,0.25)'; }}
          >
            {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            {isDarkMode ? 'Light' : 'Dark'}
          </button>

          {/* AI Website Link */}
          <a href="#" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: isDarkMode ? 'linear-gradient(135deg, #0ea5e9, #2563eb)' : 'linear-gradient(135deg, #38bdf8, #0284c7)',
            color: 'white',
            textDecoration: 'none',
            padding: '0.35rem 1rem',
            borderRadius: '2rem',
            fontSize: '0.75rem',
            fontWeight: '700',
            border: isDarkMode ? '1px solid #38bdf8' : '1px solid #7dd3fc',
            transition: 'all 0.2s',
            boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)'
          }}
            onClick={(e) => {
              e.preventDefault();
              setShowAIAnimation(true);
              setTimeout(() => {
                setShowAIAnimation(false);
                window.location.hash = '#/ai-website';
              }, 2500);
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 15px rgba(14, 165, 233, 0.4)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(14, 165, 233, 0.3)'; }}
          >
            <GlobeLock size={14} />
            AI Website
          </a>

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
        <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''} ${isSidebarCollapsed ? 'collapsed' : ''}`} style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--card-bg)',
          borderRight: '1px solid #e2e8f0',
          padding: 0
        }}>
          {/* Fixed Top Controls Area - Tactical Blue Welcome Badge */}
          <div style={{
            padding: '1rem 0.75rem',
            borderBottom: '1px solid var(--card-border)',
            background: 'linear-gradient(135deg, #eef4ff, #dbeafe)',
            color: 'var(--text-main)',
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
            <div className="hide-on-collapse" style={{ display: 'flex', flexDirection: 'column', gap: '0.1rem' }}>
              <span className="notranslate" translate="no" style={{ fontSize: '0.7rem', fontWeight: '800', color: '#d946ef', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI OPERATIVE COMMANDER
              </span>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#1e3a8a', letterSpacing: '0.02em' }}>
                K.A.V.A.C.H. HUB ONLINE
              </span>
            </div>
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#3b82f6',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 'auto'
              }}
              title="Toggle Sidebar"
            >
              {isSidebarCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>

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
                      title={item.label}
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
                      <span className="hide-on-collapse" style={{ fontWeight: activeTab === item.id ? '700' : '600', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item.label}</span>
                    </div>
                  ))}

                  {/* Group 1: Education */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div
                      className="group-header"
                      title="Education & Skill Upgradation"
                      onClick={() => toggleSection('Education')}
                      style={
                        {
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          color: '#2563eb',
                          background: isEducationActive ? '#2563eb05' : '#f8fafc',
                          padding: '1.05rem 1.25rem',
                          borderRadius: '0.5rem',
                          border: '1px solid var(--card-border)',
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
                        <span className="hide-on-collapse" style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>Education & IT Capacity</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Education ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#2563eb' }} />
                    </div>
                    {expandedSections.Education && navItems.filter(i => i.category === 'Education').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        title={item.label}
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
                        <span className="hide-on-collapse" style={{ fontWeight: activeTab === item.id ? '700' : '600', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Group 2: Operations */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div
                      className="group-header"
                      title="AI & Operations Command"
                      onClick={() => toggleSection('Operations')}
                      style={
                        {
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          color: '#0d9488',
                          background: isOperationsActive ? '#0d948805' : '#f8fafc',
                          padding: '1.05rem 1.25rem',
                          borderRadius: '0.5rem',
                          border: '1px solid var(--card-border)',
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
                        <span className="hide-on-collapse" style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>AI & Operations Command</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Operations ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#0d9488' }} />
                    </div>
                    {expandedSections.Operations && navItems.filter(i => i.category === 'Operations').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        title={item.label}
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
                        <span className="hide-on-collapse" style={{ fontWeight: activeTab === item.id ? '700' : '600', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Group 3: Administrative */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div
                      className="group-header"
                      title="Administrative & Field Levels"
                      onClick={() => toggleSection('Administrative')}
                      style={
                        {
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          color: '#dc2626',
                          background: isAdministrativeActive ? '#dc262605' : '#f8fafc',
                          padding: '1.05rem 1.25rem',
                          borderRadius: '0.5rem',
                          border: '1px solid var(--card-border)',
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
                        <span className="hide-on-collapse" style={{ textTransform: 'uppercase', letterSpacing: '0.03em', fontSize: '0.9rem' }}>Administrative & Field Levels</span>
                      </div>
                      <ChevronDown size={18} style={{ transform: expandedSections.Administrative ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 0.2s', color: '#dc2626' }} />
                    </div>
                    {expandedSections.Administrative && navItems.filter(i => i.category === 'Administrative').map((item) => (
                      <div
                        key={item.id}
                        className={`sidebar-nav-item ${activeTab === item.id ? 'active' : ''}`}
                        title={item.label}
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
                        <span className="hide-on-collapse" style={{ fontWeight: activeTab === item.id ? '700' : '600', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item.label}</span>
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

          {/* Breadcrumb Navigation */}
          {!activeTab.startsWith('overview') && !activeTab.startsWith('category-') && activeItem && (
            <div style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              justifyContent: 'flex-start',
              padding: '0 1.25rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.6rem',
                padding: '0.6rem 1.2rem',
                background: isDarkMode 
                  ? 'rgba(30, 41, 59, 0.7)'
                  : '#ffffff',
                border: `1px solid ${activeItem.color}40`,
                borderRadius: '2rem',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: '600',
                boxShadow: isDarkMode ? `0 4px 20px rgba(0,0,0,0.4)` : `0 4px 20px ${activeItem.color}20`,
              }}>
                <span 
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem', transition: 'all 0.3s', color: isDarkMode ? '#94a3b8' : '#64748b', padding: '0.2rem 0.4rem' }}
                  onClick={() => handleTabChange('overview')}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#3b82f6'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = isDarkMode ? '#94a3b8' : '#64748b'; }}
                  title="Go to Home"
                >
                  <Home size={15} /> <span style={{marginTop: '1px'}}>Home</span>
                </span>
                
                {activeItem.category !== 'General' && (
                  <>
                    <ChevronRight size={14} style={{ color: '#cbd5e1', opacity: 0.8 }} />
                    <span 
                      style={{ 
                        cursor: 'pointer',
                        color: isDarkMode ? '#94a3b8' : '#64748b', 
                        padding: '0.2rem 0.4rem', 
                        letterSpacing: '0.02em', 
                        marginTop: '1px',
                        transition: 'all 0.3s'
                      }}
                      title="Open Category Overview"
                      onClick={() => handleTabChange(`category-${activeItem.category}`)}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#3b82f6'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = isDarkMode ? '#94a3b8' : '#64748b'; }}
                    >
                      {activeItem.category} 
                    </span>
                  </>
                )}
                
                <ChevronRight size={14} style={{ color: '#cbd5e1', opacity: 0.8 }} />
                <span 
                  style={{ 
                    cursor: subBreadcrumb.length > 0 ? 'pointer' : 'default',
                    color: subBreadcrumb.length === 0 ? activeItem.color : (isDarkMode ? '#94a3b8' : '#64748b'), 
                    fontWeight: subBreadcrumb.length === 0 ? '700' : '600', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem',
                    background: subBreadcrumb.length === 0 ? `rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.08)` : 'transparent',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '1.5rem',
                    border: subBreadcrumb.length === 0 ? `1px solid rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.3)` : '1px solid transparent',
                    transition: 'all 0.3s',
                    boxShadow: subBreadcrumb.length === 0 ? `0 0 12px rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.4)` : 'none',
                    textShadow: subBreadcrumb.length === 0 ? `0 0 8px rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.3)` : 'none'
                  }}
                  onClick={() => {
                    if (subBreadcrumb.length > 0) {
                      setSubBreadcrumb([]);
                      setResetTriggers(prev => ({
                        ...prev,
                        [activeTab]: (prev[activeTab] || 0) + 1
                      }));
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (subBreadcrumb.length > 0) {
                      e.currentTarget.style.color = activeItem.color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (subBreadcrumb.length > 0) {
                      e.currentTarget.style.color = isDarkMode ? '#94a3b8' : '#64748b';
                    }
                  }}
                  title={subBreadcrumb.length > 0 ? `Back to ${activeItem.label.split(' (')[0]}` : ''}
                >
                  <activeItem.icon size={15} color={subBreadcrumb.length === 0 ? activeItem.color : (isDarkMode ? '#94a3b8' : '#64748b')} style={{ transition: 'all 0.3s' }} />
                  <span style={{marginTop: '1px'}}>{activeItem.label.split(' (')[0]}</span>
                </span>
                
                {subBreadcrumb && subBreadcrumb.map((item, index) => {
                  const isLast = index === subBreadcrumb.length - 1;
                  return (
                    <React.Fragment key={index}>
                      <ChevronRight size={14} style={{ color: '#cbd5e1', opacity: 0.8 }} />
                      <span style={{ 
                        color: isLast ? activeItem.color : (isDarkMode ? '#94a3b8' : '#64748b'), 
                        fontWeight: isLast ? '700' : '600', 
                        display: 'flex', 
                        alignItems: 'center',
                        background: isLast ? `rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.08)` : 'transparent',
                        padding: isLast ? '0.35rem 0.9rem' : '0.2rem 0.4rem',
                        borderRadius: '1.5rem',
                        border: isLast ? `1px solid rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.3)` : '1px solid transparent',
                        boxShadow: isLast ? `0 0 12px rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.4)` : 'none',
                        textShadow: isLast ? `0 0 8px rgba(${parseInt(activeItem.color.slice(1,3),16)},${parseInt(activeItem.color.slice(3,5),16)},${parseInt(activeItem.color.slice(5,7),16)},0.3)` : 'none',
                        transition: 'all 0.3s',
                        marginTop: '1px'
                      }}>
                        {item}
                      </span>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {(activeTab === 'overview' || activeTab.startsWith('category-')) && (
            <Overview 
              onNavigate={(tabId, subTabId) => handleTabChange(tabId, subTabId)} 
              filterCategory={activeTab.startsWith('category-') ? activeTab.replace('category-', '') : null}
            />
          )}
          {activeTab === 'step-up' && (
            <StepUpLiteracyDashboard defaultTab={stepUpSubTab} resetTrigger={resetTriggers['step-up']} setSubBreadcrumb={setSubBreadcrumb} />
          )}
          {activeTab === 'ai-course' && (
            <AICourseDashboard setSubBreadcrumb={setSubBreadcrumb} />
          )}
          {activeTab === 'frontend' && (
            <FrontendDetails setSubBreadcrumb={setSubBreadcrumb} />
          )}
          {activeTab === 'police-functioning' && <PoliceFunctioningDashboard setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'thane-level' && <ThaneLevelDashboard projects={projects} resetTrigger={resetTriggers['thane-level']} setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'district-level' && <DistrictLevelDashboard resetTrigger={resetTriggers['district-level']} setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'project-ppt' && <ProjectPPTDashboard setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'masterclass' && <SoftwareMasterclassDashboard resetTrigger={resetTriggers['masterclass']} setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'mlops' && <MLOpsDashboard resetTrigger={resetTriggers['mlops']} setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'advanced-ai' && <AdvancedAICyberDashboard setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'analytics' && <AnalyticsDashboard setSubBreadcrumb={setSubBreadcrumb} />}
          {activeTab === 'devops' && <PlaceholderView title="DevOps (CI/CD & Automation)" />}
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer" style={{ padding: '2rem 1rem', textAlign: 'center' }}>
        <div className="footer-copyright" style={{ marginTop: '0', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          © 2026 UP Police AI Investigation Command Center. All Rights Reserved.
        </div>
      </footer>

      {/* K.A.V.A.C.H. AI Chatbot Assistant */}
      <ChatbotAssistant />
    </div>
  );
}
