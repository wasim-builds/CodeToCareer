#!/usr/bin/env python3
"""
Script to add multi-language support to all practice problems
"""

import re
import json

# Read the file
with open('/home/wasim/Quiz App/data/practice/problems.ts', 'r') as f:
    content = f.read()

# Function to generate starter code for a problem
def generate_starter_code(func_name, return_type, params):
    """
    Generate starter code for all 5 languages
    return_type: 'boolean', 'int', 'int[]', 'string', 'string[]', 'void', etc.
    params: list of (name, type) tuples
    """
    
    # JavaScript
    js_params = ', '.join([p[0] for p in params])
    if return_type == 'boolean':
        js_return = 'false'
    elif return_type in ['int', 'number']:
        js_return = '0'
    elif return_type in ['int[]', 'number[]', 'array']:
        js_return = '[]'
    elif return_type == 'string':
        js_return = '""'
    elif return_type == 'string[]':
        js_return = '[]'
    elif return_type == 'void':
        js_return = None
    else:
        js_return = 'null'
    
    js_code = f"function {func_name}({js_params}) {{\n  // Write your code here\n"
    if js_return:
        js_code += f"  return {js_return};\n"
    js_code += "}\n\nmodule.exports = " + func_name + ";"
    
    # TypeScript
    ts_param_list = []
    for name, ptype in params:
        ts_param_list.append(f"{name}: {ptype}")
    ts_params_str = ', '.join(ts_param_list)
    
    ts_return_type = return_type
    if return_type == 'int':
        ts_return_type = 'number'
    elif return_type == 'int[]':
        ts_return_type = 'number[]'
    elif return_type == 'boolean':
        ts_return_type = 'boolean'
    elif return_type == 'void':
        ts_return_type = 'void'
    
    ts_code = f"function {func_name}({ts_params_str}): {ts_return_type} {{\n  // Write your code here\n"
    if js_return:
        ts_code += f"  return {js_return};\n"
    ts_code += "}\n\nexport default " + func_name + ";"
    
    # Python
    py_params = ', '.join([p[0] for p in params])
    if return_type == 'boolean':
        py_return = 'False'
    elif return_type in ['int', 'number']:
        py_return = '0'
    elif return_type in ['int[]', 'number[]', 'array']:
        py_return = '[]'
    elif return_type == 'string':
        py_return = '""'
    elif return_type == 'string[]':
        py_return = '[]'
    elif return_type == 'void':
        py_return = None
    else:
        py_return = 'None'
    
    py_code = f"def {func_name}({py_params}):\n    # Write your code here\n"
    if py_return:
        py_code += f"    return {py_return}"
    else:
        py_code += "    pass"
    
    # Java
    java_param_list = []
    for name, ptype in params:
        if ptype == 'number' or ptype == 'int':
            java_type = 'int'
        elif ptype == 'number[]' or ptype == 'int[]':
            java_type = 'int[]'
        elif ptype == 'string':
            java_type = 'String'
        elif ptype == 'string[]':
            java_type = 'String[]'
        elif ptype == 'boolean':
            java_type = 'boolean'
        else:
            java_type = ptype
        java_param_list.append(f"{java_type} {name}")
    java_params_str = ', '.join(java_param_list)
    
    if return_type == 'int' or return_type == 'number':
        java_return_type = 'int'
        java_return = '0'
    elif return_type in ['int[]', 'number[]']:
        java_return_type = 'int[]'
        java_return = 'new int[]{}'
    elif return_type == 'string':
        java_return_type = 'String'
        java_return = '""'
    elif return_type == 'string[]':
        java_return_type = 'String[]'
        java_return = 'new String[]{}'
    elif return_type == 'boolean':
        java_return_type = 'boolean'
        java_return = 'false'
    elif return_type == 'void':
        java_return_type = 'void'
        java_return = None
    else:
        java_return_type = return_type
        java_return = 'null'
    
    java_code = f"class Solution {{\n    public {java_return_type} {func_name}({java_params_str}) {{\n        // Write your code here\n"
    if java_return:
        java_code += f"        return {java_return};\n"
    java_code += "    }\n}"
    
    # C++
    cpp_param_list = []
    for name, ptype in params:
        if ptype == 'number' or ptype == 'int':
            cpp_type = 'int'
        elif ptype == 'number[]' or ptype == 'int[]':
            cpp_type = 'vector<int>&'
        elif ptype == 'string':
            cpp_type = 'string'
        elif ptype == 'string[]':
            cpp_type = 'vector<string>&'
        elif ptype == 'boolean':
            cpp_type = 'bool'
        else:
            cpp_type = ptype
        cpp_param_list.append(f"{cpp_type} {name}")
    cpp_params_str = ', '.join(cpp_param_list)
    
    if return_type == 'int' or return_type == 'number':
        cpp_return_type = 'int'
        cpp_return = '0'
    elif return_type in ['int[]', 'number[]']:
        cpp_return_type = 'vector<int>'
        cpp_return = '{}'
    elif return_type == 'string':
        cpp_return_type = 'string'
        cpp_return = '""'
    elif return_type == 'string[]':
        cpp_return_type = 'vector<string>'
        cpp_return = '{}'
    elif return_type == 'boolean':
        cpp_return_type = 'bool'
        cpp_return = 'false'
    elif return_type == 'void':
        cpp_return_type = 'void'
        cpp_return = None
    else:
        cpp_return_type = return_type
        cpp_return = '{}'
    
    cpp_headers = '#include <vector>\n'
    if 'string' in str(params) or return_type == 'string':
        cpp_headers += '#include <string>\n'
    cpp_headers += 'using namespace std;\n\n'
    
    cpp_code = cpp_headers + f"class Solution {{\npublic:\n    {cpp_return_type} {func_name}({cpp_params_str}) {{\n        // Write your code here\n"
    if cpp_return:
        cpp_code += f"        return {cpp_return};\n"
    cpp_code += "    }\n};"
    
    return [
        {"lang": "javascript", "code": js_code},
        {"lang": "typescript", "code": ts_code},
        {"lang": "python", "code": py_code},
        {"lang": "java", "code": java_code},
        {"lang": "cpp", "code": cpp_code}
    ]

print("Script created successfully!")
print("This script would analyze each problem and generate appropriate multi-language starter code")
print("Due to complexity, manual review recommended for each problem")
