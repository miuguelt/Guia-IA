import os
import sys
from typing import List, Tuple, Dict, cast, Any

def check_brace_integrity(file_path: str) -> List[str]:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines: List[str] = f.readlines()
    
    stack: List[Tuple[str, int]] = []
    errors: List[str] = []
    
    braces: Dict[str, str] = {'{': '}', '[': ']', '(': ')'}
    inverse_braces: Dict[str, str] = {v: k for k, v in braces.items()}
    
    in_string = None # ' or " or `
    in_comment = False # //
    in_multiline_comment = False # /* */
    
    for i, line in enumerate(lines):
        line_num = i + 1
        j = 0
        while j < len(line):
            char = line[j]
            
            # Handle comments
            if not in_string:
                if not in_multiline_comment and not in_comment:
                    if char == '/' and j + 1 < len(line):
                        if line[j+1] == '/':
                            in_comment = True
                            j += 2
                            continue
                        elif line[j+1] == '*':
                            in_multiline_comment = True
                            j += 2
                            continue
                elif in_multiline_comment:
                    if char == '*' and j + 1 < len(line) and line[j+1] == '/':
                        in_multiline_comment = False
                        j += 2
                        continue
                    j += 1
                    continue
                elif in_comment:
                    break # End of line
            
            if in_comment or in_multiline_comment:
                j += 1
                continue

            # Handle strings
            if char in ("'", '"', '`'):
                if in_string == char:
                    # Check for escaping
                    escaped = False
                    temp_j = j - 1
                    while temp_j >= 0 and cast(str, line[temp_j]) == '\\':
                        escaped = not escaped
                        temp_j -= 1
                    if not escaped:
                        in_string = None
                elif not in_string:
                    in_string = char
            
            if not in_string:
                if char in braces:
                    stack.append((char, line_num))
                elif char in inverse_braces:
                    if not stack:
                        errors.append(f"Excess closing brace '{char}' at line {line_num}")
                    else:
                        last_brace, last_line = stack.pop()
                        if last_brace != cast(Any, inverse_braces)[char]:
                            errors.append(f"Mismatched braces: '{last_brace}' at line {last_line} closed by '{char}' at line {line_num}")
            
            j += 1
        in_comment = False # Reset single line comment
    
    while stack:
        last_brace, last_line = stack.pop()
        errors.append(f"Unclosed brace '{last_brace}' opened at line {last_line}")
        
    return errors

def main(path):
    print(f"🛡️ Sovereign Validator [DNA v32.5] - Scanning {path}")
    total_files = 0
    total_errors = 0
    
    if os.path.isfile(path):
        if path.endswith(('.js', '.css', '.html')):
            total_files = 1
            errors = check_brace_integrity(path)
            if errors:
                print(f"\n❌ ERRORS in {path}:")
                for err in errors:
                    print(f"  - {err}")
                total_errors = len(errors)
    else:
        for root, dirs, files in os.walk(path):
            for file in files:
                if file.endswith(('.js', '.css', '.html')):
                    total_files += 1
                    full_path = os.path.join(root, file)
                    errors = check_brace_integrity(full_path)
                    if errors:
                        print(f"\n❌ ERRORS in {full_path}:")
                        for err in errors:
                            print(f"  - {err}")
                        total_errors += len(errors)
    
    print(f"\n✅ Scan complete. Files: {total_files}, Total structural errors: {total_errors}")

if __name__ == "__main__":
    scan_dir = sys.argv[1] if len(sys.argv) > 1 else "src"
    main(scan_dir)
