import os
import re

dir_path = r'c:\Users\DELL\OneDrive\Desktop\AI\technical project renew\Technical-project-renew\src'

def update_buttons(content):
    pattern = re.compile(r'<button([^>]+)>(.*?Back to.*?)</button>', re.DOTALL | re.IGNORECASE)
    
    def replacer(match):
        attrs = match.group(1)
        inner_html = match.group(2)
        
        # If it already has thane-back-btn and no style or onMouseEnter, skip
        if 'className="thane-back-btn"' in attrs and 'style=' not in attrs and 'onMouseEnter' not in attrs:
            return match.group(0)
            
        # Extract onClick attribute (could be a simple function reference or an arrow function)
        # Using a balanced-like match or simple match for onClick={...}
        # A simpler way is to find onClick={...} assuming no nested brackets in onClick that break it,
        # but arrow functions might have nested brackets.
        # Let's just find onClick={ followed by everything until we balance the braces or just capture the attribute safely.
        # Given typical React: onClick={onBack} or onClick={() => setView('xyz')}
        
        onclick_match = re.search(r'onClick=\{.*\}', attrs)
        if not onclick_match:
            # try to match non-greedy if multiple attrs
            onclick_match = re.search(r'onClick=\{[^\}]+\}', attrs)
            
        # Actually a safer way is to use regex to extract onClick={...} non-greedy
        # But wait, onClick={() => { setActive(false) }} has nested braces.
        # Let's just extract onClick=... by splitting or parsing.
        # Even simpler: since we just want to remove style, onMouseEnter, onMouseLeave, className
        # we can just keep onClick and other safe attributes like title, aria-labels.
        # Let's just manually search for onClick
        
        onclick_attr = ""
        # Find onClick index
        idx = attrs.find('onClick={')
        if idx != -1:
            # find matching closing brace
            brace_count = 0
            for i in range(idx + 9, len(attrs)):
                if attrs[i] == '{':
                    brace_count += 1
                elif attrs[i] == '}':
                    if brace_count == 0:
                        onclick_attr = attrs[idx:i+1]
                        break
                    brace_count -= 1
        
        # Also preserve 'className' if we want to combine? No, we replace with thane-back-btn.
        return f'<button {onclick_attr} className="thane-back-btn">{inner_html}</button>'

    return pattern.sub(replacer, content)

count = 0
for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = update_buttons(content)
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file}")
                count += 1
            
print(f"Total files updated: {count}")
