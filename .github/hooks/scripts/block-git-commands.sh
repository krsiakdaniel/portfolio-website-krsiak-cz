#!/bin/bash
# Blocks git commit and git push from being executed by the agent.
# The user commits and pushes manually.

input=$(cat)

# Extract tool name and command from JSON input
tool=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_name',''))" 2>/dev/null)
command=$(echo "$input" | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('tool_input',{}).get('command',''))" 2>/dev/null)

if [[ "$command" =~ git[[:space:]]+(commit|push) ]]; then
  echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"git commit and git push are blocked — the user commits and pushes manually"}}'
  exit 0
fi
