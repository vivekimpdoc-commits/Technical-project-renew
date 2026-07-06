import React, { useState } from 'react';
import { Lightbulb, PlusCircle, CheckCircle, Clock, Trash2, Tag, BookOpen, ChevronDown, ChevronUp, Target, Cpu } from 'lucide-react';
import './TopicIdeas.css';

export default function TopicIdeas({ ideas, setIdeas }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Innovation',
    impact: '',
    resources: ''
  });

  const [expandedId, setExpandedId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newIdea = {
      ...formData,
      id: Date.now(),
      status: 'New',
      date: new Date().toISOString().split('T')[0],
      impact: formData.impact || 'Not specified',
      resources: formData.resources || 'Not specified'
    };

    setIdeas([newIdea, ...ideas]);
    setFormData({ title: '', description: '', category: 'Innovation', impact: '', resources: '' });
  };

  const deleteIdea = (e, id) => {
    e.stopPropagation();
    setIdeas(ideas.filter(idea => idea.id !== id));
  };

  const toggleStatus = (e, id) => {
    e.stopPropagation();
    setIdeas(ideas.map(idea => {
      if (idea.id === id) {
        return { ...idea, status: idea.status === 'New' ? 'Approved' : 'New' };
      }
      return idea;
    }));
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="ideas-container">
      <div className="ideas-header">
        <Lightbulb className="ideas-header-icon" size={32} />
        <h2 className="ideas-title">Project Ideas Brainstorming</h2>
        <p className="ideas-subtitle">Submit, review, and manage new concepts for technical projects</p>
      </div>

      <div className="ideas-grid">
        {/* Left Column: Submit Form */}
        <div className="ideas-sidebar">
          <div className="ideas-card form-card">
            <div className="card-header">
              <h3><PlusCircle size={18} /> Submit New Idea</h3>
            </div>
            <form onSubmit={handleSubmit} className="ideas-form">
              <div className="input-group">
                <label>Idea Title</label>
                <div className="input-with-icon">
                  <BookOpen size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Drone Surveillance AI" 
                    required 
                  />
                </div>
              </div>
              
              <div className="input-group">
                <label>Category</label>
                <div className="input-with-icon">
                  <Tag size={16} className="input-icon" />
                  <select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleInputChange}
                    className="styled-select"
                  >
                    <option value="Innovation">Innovation & R&D</option>
                    <option value="Software Dev">Software Development</option>
                    <option value="Hardware/IoT">Hardware / IoT</option>
                    <option value="Security">Cyber Security</option>
                    <option value="Process Improvement">Process Improvement</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Briefly describe what this project would accomplish..." 
                  required 
                  rows={3}
                  className="styled-textarea"
                />
              </div>

              <div className="input-group">
                <label>Potential Impact</label>
                <div className="input-with-icon">
                  <Target size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="impact"
                    value={formData.impact}
                    onChange={handleInputChange}
                    placeholder="e.g., Reduce manual effort by 20%" 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Resources Needed</label>
                <div className="input-with-icon">
                  <Cpu size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="resources"
                    value={formData.resources}
                    onChange={handleInputChange}
                    placeholder="e.g., 2 Developers, AWS Server" 
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-100">
                Submit Idea
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Ideas List */}
        <div className="ideas-content">
          <div className="ideas-list-header">
            <h3>Idea Board ({ideas.length})</h3>
          </div>
          
          <div className="ideas-board">
            {ideas.length === 0 ? (
              <div className="empty-ideas">
                <Lightbulb size={48} className="empty-icon" />
                <p>No ideas submitted yet. Start brainstorming!</p>
              </div>
            ) : (
              ideas.map(idea => (
                <div key={idea.id} className={`idea-card ${idea.status === 'Approved' ? 'approved' : ''}`} onClick={() => toggleExpand(idea.id)}>
                  <div className="idea-card-header">
                    <div className="idea-meta">
                      <span className="idea-category">{idea.category}</span>
                      <span className="idea-date"><Clock size={12} /> {idea.date}</span>
                    </div>
                    <div className="idea-actions">
                      <button 
                        className={`status-btn ${idea.status === 'Approved' ? 'active' : ''}`}
                        onClick={(e) => toggleStatus(e, idea.id)}
                        title="Mark as Approved"
                      >
                        <CheckCircle size={18} />
                      </button>
                      <button 
                        className="delete-btn"
                        onClick={(e) => deleteIdea(e, idea.id)}
                        title="Delete Idea"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <h4 className="idea-card-title">{idea.title}</h4>
                  <p className="idea-card-desc">{idea.description}</p>
                  
                  <div className="idea-card-footer">
                    <div className="idea-status-badge">
                      Status: <strong>{idea.status}</strong>
                    </div>
                    <button className="expand-toggle-btn">
                      {expandedId === idea.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </div>

                  {/* Expandable Details Area */}
                  {expandedId === idea.id && (
                    <div className="idea-expanded-details">
                      <div className="detail-row">
                        <strong><Target size={14} /> Potential Impact:</strong>
                        <p>{idea.impact}</p>
                      </div>
                      <div className="detail-row">
                        <strong><Cpu size={14} /> Resources Needed:</strong>
                        <p>{idea.resources}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
