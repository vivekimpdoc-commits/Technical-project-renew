import React from 'react';
import { 
  ArrowLeft, ShieldAlert, Lock, UserCheck, AlertTriangle, Key, SearchCode
} from 'lucide-react';
import './ThaneLevelDashboard.css';

export default function DevSecOps({ onBack }) {
  const models = [
    {
      id: 1,
      title: 'DevSecOps (डेवसेकऑप्स)',
      subtitle: 'Security as Code',
      icon: ShieldAlert,
      color: '#ef4444',
      items: [
        'डेवलपमेंट (Dev), सिक्योरिटी (Sec), और ऑपरेशन्स (Ops) को एक साथ मिलाना।',
        'सिक्योरिटी को आखिर में चेक करने के बजाय कोडिंग के समय से ही लागू करना।',
        'हर कमिट (Commit) पर ऑटोमैटिक सिक्योरिटी स्कैन चलना।'
      ]
    },
    {
      id: 2,
      title: 'Vulnerability Scanning',
      subtitle: 'कमियां खोजना',
      icon: SearchCode,
      color: '#3b82f6',
      items: [
        'कोड में उन कमियों (Bugs/Vulnerabilities) को ढूँढना जिनसे हैकर घुस सकते हैं।',
        'SAST (Static Application Security Testing) टूल्स कोड को बिना चलाये स्कैन करते हैं।',
        'DAST (Dynamic Application Security Testing) लाइव ऐप पर हमले करके चेक करता है।'
      ]
    },
    {
      id: 3,
      title: 'IAM & Authentication',
      subtitle: 'यूज़र पहचान',
      icon: UserCheck,
      color: '#10b981',
      items: [
        'यह पक्का करना कि जो यूज़र लॉगिन कर रहा है, वह असली है या नहीं।',
        'Multi-Factor Authentication (MFA) यानी पासवर्ड के साथ OTP या फिंगरप्रिंट मांगना।',
        'Role-Based Access Control (RBAC) - केवल ज़रूरी फाइलों तक ही पहुँच देना।'
      ]
    },
    {
      id: 4,
      title: 'Data Encryption',
      subtitle: 'डेटा को छिपाना',
      icon: Lock,
      color: '#f59e0b',
      items: [
        'डेटा को ऐसे कोड में बदलना जिसे कोई पढ़ न सके।',
        'Data in Transit: जब डेटा इंटरनेट पर सफर कर रहा हो (HTTPS/SSL/TLS)।',
        'Data at Rest: जब डेटा सर्वर या डेटाबेस में सेव हो (AES-256 Encryption)।'
      ]
    },
    {
      id: 5,
      title: 'Secret Management',
      subtitle: 'पासवर्ड सुरक्षा',
      icon: Key,
      color: '#ec4899',
      items: [
        'API Keys, Passwords, और Tokens को कभी भी डायरेक्ट कोड में नहीं लिखना चाहिए।',
        'इन्हें सुरक्षित वॉल्ट (Vault) जैसे HashiCorp Vault या AWS Secrets Manager में रखना।',
        'इससे कोड लीक होने पर भी पासवर्ड सुरक्षित रहता है।'
      ]
    },
    {
      id: 6,
      title: 'Incident Response',
      subtitle: 'हमले के समय बचाव',
      icon: AlertTriangle,
      color: '#8b5cf6',
      items: [
        'अगर कोई सिस्टम हैक हो जाए, तो तुरंत क्या करना है इसकी पहले से प्लानिंग होना।',
        'सिस्टम को ब्लॉक करना, डेटा का बैकअप लेना, और यूज़र्स को सूचित करना।',
        'भविष्य में उस तरीके से दोबारा हैक न हो, इसके लिए पैच (Patch) बनाना।'
      ]
    }
  ];

  return (
    <div className="thane-dashboard-container" style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
        <button 
          onClick={onBack} 
          style={{ 
            display: 'flex', alignItems: 'center', gap: '0.5rem', 
            padding: '0.75rem 1.5rem', background: 'white', 
            borderRadius: '0.75rem', border: '1px solid #e2e8f0',
            color: '#0f172a', fontWeight: 'bold', cursor: 'pointer',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#dc2626'; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
        >
          <ArrowLeft size={18} /> Back to Advanced SDLC
        </button>
        <div>
          <h2 style={{ margin: '0', fontSize: '1.75rem', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldAlert size={28} color="#ef4444" />
            साइबर सिक्योरिटी (DevSecOps)
          </h2>
          <p style={{ margin: '0.25rem 0 0 0', color: '#64748b' }}>
            सॉफ्टवेयर बनाते समय ही सुरक्षा (Security) को शामिल करने के तरीके।
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {models.map(box => {
          const Icon = box.icon;
          return (
            <div key={box.id} style={{
              background: 'white', borderRadius: '0.75rem', padding: '1.5rem',
              border: '1px solid #e2e8f0', borderTop: `4px solid ${box.color}`,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              display: 'flex', flexDirection: 'column',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 10px 25px -5px ${box.color}66, 0 0 20px ${box.color}33`;
              e.currentTarget.style.borderColor = box.color;
              e.currentTarget.style.zIndex = 10;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.05)';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.zIndex = 1;
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: `${box.color}15`, padding: '0.6rem', borderRadius: '0.5rem', color: box.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#0f172a', fontWeight: 'bold' }}>{box.title}</h3>
                  <p style={{ margin: '0.15rem 0 0 0', color: '#64748b', fontSize: '0.85rem' }}>{box.subtitle}</p>
                </div>
              </div>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155', fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                {box.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.4rem' }}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
