import React from 'react';
import { Users, FolderKanban, ShieldCheck, Activity, BarChart3, Clock, Lightbulb } from 'lucide-react';
import './MainDashboard.css';

export default function MainDashboard({ members = [], projects = [], ideas = [] }) {
  // Compute some quick statistics
  const totalMembers = members.length;
  const totalProjects = projects.length;
  const totalIdeas = ideas.length;
  const approvedIdeas = ideas.filter(i => i.status === 'Approved').length;
  
  // Get recent 5 projects
  const recentProjects = [...projects].sort((a, b) => b.id - a.id).slice(0, 5);
  
  // Calculate unique team names
  const uniqueTeams = new Set(projects.map(p => p.teamName)).size;

  return (
    <div className="main-dash-container">
      <div className="main-dash-header">
        <h2 className="main-dash-title">Command Center Overview</h2>
        <p className="main-dash-subtitle">Real-time statistics for departmental resources and project allocations</p>
      </div>

      {/* Top Statistics Cards */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <div className="stat-card stat-members">
          <div className="stat-icon-wrapper">
            <Users size={28} />
          </div>
          <div className="stat-content">
            <h3>Total Personnel</h3>
            <p className="stat-number">{totalMembers}</p>
            <span className="stat-label">Registered in Directory</span>
          </div>
        </div>

        <div className="stat-card stat-projects">
          <div className="stat-icon-wrapper">
            <FolderKanban size={28} />
          </div>
          <div className="stat-content">
            <h3>Active Projects</h3>
            <p className="stat-number">{totalProjects}</p>
            <span className="stat-label">Currently Allocated</span>
          </div>
        </div>

        <div className="stat-card stat-teams">
          <div className="stat-icon-wrapper">
            <ShieldCheck size={28} />
          </div>
          <div className="stat-content">
            <h3>Active Teams</h3>
            <p className="stat-number">{uniqueTeams}</p>
            <span className="stat-label">Engaged in Operations</span>
          </div>
        </div>

        <div className="stat-card stat-ideas" style={{ borderTopColor: '#eab308' }}>
          <div className="stat-icon-wrapper" style={{ color: '#eab308', background: '#fef9c3' }}>
            <Lightbulb size={28} />
          </div>
          <div className="stat-content">
            <h3>Total Ideas</h3>
            <p className="stat-number">{totalIdeas}</p>
            <span className="stat-label">{approvedIdeas} Approved</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="dashboard-content-grid">
        
        {/* Recent Projects Panel */}
        <div className="dash-panel">
          <div className="panel-header">
            <h3><Activity size={18} /> Recently Allocated Projects</h3>
            <a href="#" className="view-all-link">View Tracker</a>
          </div>
          <div className="panel-content">
            {recentProjects.length === 0 ? (
              <div className="empty-panel">
                <p>No projects allocated yet.</p>
              </div>
            ) : (
              <ul className="recent-list">
                {recentProjects.map(proj => (
                  <li key={proj.id} className="recent-item">
                    <div className="recent-item-icon">
                      <FolderKanban size={20} />
                    </div>
                    <div className="recent-item-details">
                      <h4>{proj.teamName}</h4>
                      <p>{proj.topic}</p>
                    </div>
                    <div className="recent-item-meta">
                      <Clock size={12} /> Just Now
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Quick Insights Panel */}
        <div className="dash-panel insights-panel">
          <div className="panel-header">
            <h3><BarChart3 size={18} /> Quick Insights</h3>
          </div>
          <div className="panel-content insights-content">
            <div className="insight-row">
              <span className="insight-label">Personnel without Projects:</span>
              <span className="insight-value text-muted">Calculating...</span>
            </div>
            <div className="insight-row">
              <span className="insight-label">System Health:</span>
              <span className="insight-value text-success">Optimal</span>
            </div>
            <div className="insight-row">
              <span className="insight-label">Last Database Sync:</span>
              <span className="insight-value text-primary">Live</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
