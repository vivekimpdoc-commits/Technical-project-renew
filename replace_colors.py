import os
import re

src_dir = r"c:\Users\DELL\OneDrive\Desktop\AI\technical project renew\Technical-project-renew\src"

replacements = [
    (r"background:\s*['\"]white['\"]", r"background: 'var(--card-bg)'"),
    (r"backgroundColor:\s*['\"]white['\"]", r"backgroundColor: 'var(--card-bg)'"),
    (r"background:\s*['\"]#ffffff['\"]", r"background: 'var(--card-bg)'"),
    (r"background:\s*['\"]#f8fafc['\"]", r"background: 'var(--icon-bg)'"),
    (r"background:\s*['\"]#f1f5f9['\"]", r"background: 'var(--icon-bg)'"),
    
    (r"color:\s*['\"]#0f172a['\"]", r"color: 'var(--text-main)'"),
    (r"color:\s*['\"]#1e293b['\"]", r"color: 'var(--text-main)'"),
    (r"color:\s*['\"]#334155['\"]", r"color: 'var(--text-main)'"),
    
    (r"color:\s*['\"]#475569['\"]", r"color: 'var(--text-muted)'"),
    (r"color:\s*['\"]#64748b['\"]", r"color: 'var(--text-muted)'"),
    (r"color:\s*['\"]#94a3b8['\"]", r"color: 'var(--text-muted)'"),
    
    (r"border:\s*['\"]1px solid #e2e8f0['\"]", r"border: '1px solid var(--card-border)'"),
    (r"border:\s*['\"]1px solid #cbd5e1['\"]", r"border: '1px solid var(--card-border)'"),
    (r"borderBottom:\s*['\"]1px solid #e2e8f0['\"]", r"borderBottom: '1px solid var(--card-border)'"),
    (r"borderTop:\s*['\"]1px solid #e2e8f0['\"]", r"borderTop: '1px solid var(--card-border)'")
]

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(".jsx"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in replacements:
                new_content = re.sub(pattern, replacement, new_content)
                
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {file}")
