import React, { useState, useRef, useEffect } from 'react';
import { PlusCircle, ExternalLink, FilePieChart, Users, FolderKanban, ShieldCheck, X } from 'lucide-react';
import './ProjectTracker.css';

export default function ProjectTracker({ members = [], projects, setProjects }) {
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [memberSearch, setMemberSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  const [formData, setFormData] = useState({
    teamName: '',
    topic: '',
    projLink: '',
    pptLink: ''
  });

  // Handle outside click for dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMemberSelect = (member) => {
    if (!selectedMembers.find(m => m.id === member.id)) {
      setSelectedMembers([...selectedMembers, member]);
    }
    setMemberSearch('');
    setShowDropdown(false);
  };

  const removeMember = (idToRemove) => {
    setSelectedMembers(selectedMembers.filter(m => m.id !== idToRemove));
  };

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(memberSearch.toLowerCase()) || 
    m.pno.toLowerCase().includes(memberSearch.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent updating members directly; members are managed via selectedMembers state
    if (name === 'members') return;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.teamName || !formData.topic || selectedMembers.length === 0) {
      alert("Please enter team name, topic, and select at least one member.");
      return;
    }

    const membersString = selectedMembers.map(m => m.name).join(', ');

    setProjects(prev => [...prev, { ...formData, members: membersString, id: Date.now() }]);
    setFormData({ teamName: '', topic: '', projLink: '', pptLink: '' });
    setSelectedMembers([]);
  };

  return (
    <div className="tracker-container">
      <div className="tracker-header">
        <ShieldCheck className="tracker-header-icon" size={32} />
        <h2 className="tracker-title">Project Allocation Tracker</h2>
        <p className="tracker-subtitle">Manage and track departmental projects, teams, and presentation resources</p>
      </div>

      <div className="tracker-content">
        {/* Form Section */}
        <div className="tracker-form-card">
          <div className="card-header">
            <h3><PlusCircle size={20} /> Assign New Project</h3>
          </div>
          <form onSubmit={handleSubmit} className="tracker-form">
            <div className="form-grid">
              <div className="input-group">
                <label>Team ID / Name</label>
                <div className="input-with-icon">
                  <Users size={18} className="input-icon" />
                  <input 
                    type="text" 
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="e.g., Cyber Cell Team A" 
                    required 
                  />
                </div>
              </div>
              
              <div className="input-group">
                <label>Allotted Members</label>
                <div className="members-dropdown">
                    <div className="selected-members">
                        {selectedMembers.map(m => (
                            <span key={m.id} className="member-chip">
                                {m.name}
                                <X size={12} className="remove-icon" onClick={() => removeMember(m.id)} />
                            </span>
                        ))}
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={memberSearch}
                            onChange={e => setMemberSearch(e.target.value)}
                            onFocus={() => setShowDropdown(true)}
                            className="member-search-input"
                        />
                    </div>
                    {showDropdown && filteredMembers.length > 0 && (
                        <ul className="dropdown-list" ref={dropdownRef}>
                            {filteredMembers.map(m => (
                                <li key={m.id} onClick={() => handleMemberSelect(m)} className="dropdown-item">
                                    {m.name} ({m.pno})
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
              </div>

              <div className="input-group full-width">
                <label>Project Topic / Case Name</label>
                <div className="input-with-icon">
                  <FolderKanban size={18} className="input-icon" />
                  <input 
                    type="text" 
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="e.g., Cyber Crime Awareness" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Project Code / Drive Link</label>
                <div className="input-with-icon">
                  <ExternalLink size={18} className="input-icon" />
                  <input 
                    type="url" 
                    name="projLink"
                    value={formData.projLink}
                    onChange={handleChange}
                    placeholder="https://example.com" 
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Presentation (PPT) Link</label>
                <div className="input-with-icon">
                  <FilePieChart size={18} className="input-icon" />
                  <input 
                    type="url" 
                    name="pptLink"
                    value={formData.pptLink}
                    onChange={handleChange}
                    placeholder="https://example.com" 
                    required 
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Save Allocation Details
            </button>
          </form>
        </div>

        {/* Table Section */}
        <div className="tracker-table-card">
          <div className="card-header">
            <h3>Allotted Teams & Projects</h3>
            <span className="badge">{projects.length} Active</span>
          </div>
          
          <div className="table-responsive">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Members</th>
                  <th>Topic / Subject</th>
                  <th>Resources</th>
                </tr>
              </thead>
              <tbody>
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="empty-state">
                      No projects allocated yet. Fill the form above to add one.
                    </td>
                  </tr>
                ) : (
                  projects.map(proj => (
                    <tr key={proj.id}>
                      <td className="fw-bold text-primary">{proj.teamName}</td>
                      <td>{proj.members}</td>
                      <td>{proj.topic}</td>
                      <td className="actions-cell">
                        <a href={proj.projLink} target="_blank" rel="noreferrer" className="resource-link proj-link">
                          <ExternalLink size={14} /> View Project
                        </a>
                        <a href={proj.pptLink} target="_blank" rel="noreferrer" className="resource-link ppt-link">
                          <FilePieChart size={14} /> View PPT
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
