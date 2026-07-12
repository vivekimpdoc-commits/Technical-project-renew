import os
import re

dir_path = r'c:\Users\DELL\OneDrive\Desktop\AI\technical project renew\Technical-project-renew\src'

# Also let's replace any buttons with inline styles that don't have onMouseEnter but do have onBack and ArrowLeft
# like <button onClick={onBack} style={{...}}> <ArrowLeft /> ... </button>
pattern1 = re.compile(
    r'<button\s*onClick=\{onBack\}\s*style=\{\{[\s\S]*?\}\}\s*onMouseEnter=\{[\s\S]*?\}\s*onMouseLeave=\{[\s\S]*?\}[^>]*>\s*(<ArrowLeft[^>]*>[\s\S]*?)\s*</button>'
)

# And another pattern for ones without onMouseEnter
pattern2 = re.compile(
    r'<button\s*onClick=\{onBack\}\s*style=\{\{[\s\S]*?\}\}[^>]*>\s*(<ArrowLeft[^>]*>[\s\S]*?)\s*</button>'
)

# And finally, if some buttons already have className="thane-back-btn" but we want to strip the inline style
pattern3 = re.compile(
    r'<button\s*onClick=\{onBack\}\s*className="thane-back-btn"\s*style=\{\{[\s\S]*?\}\}[^>]*>\s*(<ArrowLeft[^>]*>[\s\S]*?)\s*</button>'
)


replacement = r'<button onClick={onBack} className="thane-back-btn">\n          \1\n        </button>'

count = 0
for file in os.listdir(dir_path):
    if file.endswith('.jsx'):
        filepath = os.path.join(dir_path, file)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        content, n1 = pattern1.subn(replacement, content)
        content, n3 = pattern3.subn(replacement, content)
        content, n2 = pattern2.subn(replacement, content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file} ({n1 + n2 + n3} replacements)")
            count += 1
            
print(f"Total files updated: {count}")
