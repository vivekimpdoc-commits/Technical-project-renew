import React, { useState, useRef } from 'react';
import { UserPlus, Upload, Users, BadgeCheck, Phone, LayoutList, Search, FileSpreadsheet, Briefcase } from 'lucide-react';
import * as XLSX from 'xlsx';
import './AllMembers.css';

export default function AllMembers({ members, setMembers }) {
  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    pno: '',
    mobile: '',
    workingProfile: ''
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleManualAdd = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.pno || !formData.mobile) return;

    setMembers(prev => [{
      id: Date.now(),
      name: formData.name,
      pno: formData.pno,
      mobile: formData.mobile,
      workingProfile: formData.workingProfile || 'Not Specified',
      source: 'Manual'
    }, ...prev]);
    
    setFormData({ name: '', pno: '', mobile: '', workingProfile: '' });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        
        // Map excel data assuming columns might be Name, PNO, Mobile/Phone, Working Profile
        const newMembers = data.map((row, index) => ({
          id: Date.now() + index,
          name: row.Name || row.name || row['Full Name'] || 'Unknown',
          pno: row.PNO || row.pno || row['Police Number'] || 'Unknown',
          mobile: row.Mobile || row.mobile || row.Phone || row['Phone Number'] || 'Unknown',
          workingProfile: row['Working Profile'] || row.Profile || row.Role || row.workingProfile || 'Not Specified',
          source: 'Excel Upload'
        }));

        setMembers(prev => [...newMembers, ...prev]);
        
        // Reset file input
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } catch (error) {
        console.error("Error parsing excel file", error);
        alert("Failed to parse Excel file. Please ensure it has columns: Name, PNO, Mobile.");
      }
    };
    reader.readAsBinaryString(file);
  };

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.pno.toLowerCase().includes(search.toLowerCase()) ||
    m.mobile.includes(search)
  );

  return (
    <div className="members-container">
      <div className="members-header">
        <Users className="members-header-icon" size={32} />
        <h2 className="members-title">Department Personnel Directory</h2>
        <p className="members-subtitle">Manage, view, and bulk-upload records for all officers and staff members</p>
      </div>

      <div className="members-grid">
        {/* Left Column: Forms */}
        <div className="members-sidebar">
          
          {/* Manual Entry Form */}
          <div className="members-card">
            <div className="card-header">
              <h3><UserPlus size={18} /> Add Single Member</h3>
            </div>
            <form onSubmit={handleManualAdd} className="members-form">
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-with-icon">
                  <BadgeCheck size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Inspector Raj Kumar" 
                    required 
                  />
                </div>
              </div>
              <div className="input-group">
                <label>PNO (Police Number)</label>
                <div className="input-with-icon">
                  <LayoutList size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="pno"
                    value={formData.pno}
                    onChange={handleInputChange}
                    placeholder="e.g., UP1234567" 
                    required 
                  />
                </div>
              </div>
              <div className="input-group">
                <label>Mobile Number</label>
                <div className="input-with-icon">
                  <Phone size={16} className="input-icon" />
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="e.g., 9876543210" 
                    required 
                  />
                </div>
              </div>
              <div className="input-group">
                <label>Working Profile</label>
                <div className="input-with-icon">
                  <Briefcase size={16} className="input-icon" />
                  <input 
                    type="text" 
                    name="workingProfile"
                    value={formData.workingProfile}
                    onChange={handleInputChange}
                    placeholder="e.g., Cyber Security Analyst" 
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary w-100">
                Add Personnel
              </button>
            </form>
          </div>

          {/* Excel Upload Form */}
          <div className="members-card excel-upload-card">
            <div className="card-header">
              <h3><FileSpreadsheet size={18} /> Bulk Upload (Excel)</h3>
            </div>
            <div className="excel-upload-content">
              <p>Upload a .xlsx or .csv file to add multiple members at once. Ensure your sheet has columns named <b>Name</b>, <b>PNO</b>, and <b>Mobile</b>.</p>
              
              <div className="upload-box">
                <input 
                  type="file" 
                  accept=".xlsx, .xls, .csv" 
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                  id="excel-upload"
                  className="file-input-hidden"
                />
                <label htmlFor="excel-upload" className="upload-label">
                  <Upload size={24} />
                  <span>Select Excel File</span>
                </label>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Data Table */}
        <div className="members-content">
          <div className="members-card h-100">
            <div className="card-header flex-between">
              <h3>All Registered Members</h3>
              <div className="search-box">
                <Search size={14} className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by Name or PNO..." 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            
            <div className="table-responsive" style={{ maxHeight: '600px' }}>
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Personnel Name</th>
                    <th>PNO</th>
                    <th>Contact</th>
                    <th>Working Profile</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="empty-state">
                        {search ? "No members match your search." : "No members registered. Add them manually or upload an Excel file."}
                      </td>
                    </tr>
                  ) : (
                    filteredMembers.map(member => (
                      <tr key={member.id}>
                        <td className="fw-bold text-primary">
                          <div className="member-name-cell">
                            <div className="avatar">{member.name.charAt(0).toUpperCase()}</div>
                            <span>{member.name}</span>
                          </div>
                        </td>
                        <td><span className="badge-pno">{member.pno}</span></td>
                        <td>{member.mobile}</td>
                        <td>{member.workingProfile || 'Not Specified'}</td>
                        <td><span className="badge-source">{member.source}</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
