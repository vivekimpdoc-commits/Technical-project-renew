import os
import re

dir_path = r'c:\Users\DELL\OneDrive\Desktop\AI\technical project renew\Technical-project-renew\src'

def clean_back_buttons(content):
    # Step 1: Give 'thane-back-btn' to any button that currently has 'back-button'
    content = re.sub(r'className="back-button"', 'className="thane-back-btn"', content)
    
    # Step 2: Strip inline styles from any button with thane-back-btn
    # <button ... className="thane-back-btn" ... style={{...}} ...>
    # This requires matching the style attribute.
    # Since style={{...}} can span multiple lines, we need DOTALL for the inner part, but be careful not to match too much.
    
    # A safe way is to split the content by '<button' and handle each button tag.
    parts = content.split('<button')
    for i in range(1, len(parts)):
        tag_end = parts[i].find('>')
        if tag_end != -1:
            tag_content = parts[i][:tag_end]
            if 'className="thane-back-btn"' in tag_content:
                # Remove style={{...}} (assuming no nested braces in style itself, which is usually true for simple styles)
                tag_content = re.sub(r'\s*style=\{\{[\s\S]*?\}\}', '', tag_content)
                # Remove onMouseEnter/onMouseLeave
                tag_content = re.sub(r'\s*onMouseEnter=\{[\s\S]*?\}', '', tag_content)
                tag_content = re.sub(r'\s*onMouseLeave=\{[\s\S]*?\}', '', tag_content)
                
                parts[i] = tag_content + parts[i][tag_end:]
                
    content = '<button'.join(parts)
    return content

count = 0
for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = clean_back_buttons(content)
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Cleaned {file}")
                count += 1
            
print(f"Total files cleaned: {count}")
