#!/bin/bash

# Extract the file path from the hook input
file_path=$(jq -r '.tool_input.file_path' 2>/dev/null)

if [ -z "$file_path" ]; then
    exit 0
fi

# Only process JavaScript/TypeScript files
if ! echo "$file_path" | grep -qE '\.(js|jsx|ts|tsx)$'; then
    exit 0
fi

cd "$CLAUDE_PROJECT_DIR" || exit 1

# Run eslint with fix
if command -v npx &> /dev/null; then
    npx eslint --fix "$file_path" 2>/dev/null
fi

# Run prettier for formatting
if command -v npx &> /dev/null; then
    npx prettier --write "$file_path" 2>/dev/null
fi

echo "✓ Linted and formatted: $file_path"
exit 0
