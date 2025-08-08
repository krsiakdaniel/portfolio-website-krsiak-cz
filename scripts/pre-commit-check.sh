#!/bin/bash

# Pre-commit validation script
# Run this manually to check if your changes are ready for commit

set -e  # Exit on any error

echo "🔍 Running pre-commit validation..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
  echo "❌ Not in a git repository"
  exit 1
fi

# Check for staged files
if [ -z "$(git diff --cached --name-only)" ]; then
  echo "⚠️  No staged files found. Stage your changes first with: git add"
  exit 1
fi

echo "📝 Staged files:"
git diff --cached --name-only

echo ""
echo "🔧 Running TypeScript type checking..."
bun tsc --noEmit

echo ""
echo "🎨 Running ESLint..."
bun lint

echo ""
echo "💅 Running Prettier..."
bun prettier:write

echo ""
echo "🧪 Running Jest unit tests..."
bun test:jest

echo ""
echo "✅ All pre-commit checks passed!"
echo "💡 Your changes are ready to commit."
echo ""
echo "Next steps:"
echo "  git commit -m 'your commit message'"
echo "  or"
echo "  bun integrate  # for full integration testing"
