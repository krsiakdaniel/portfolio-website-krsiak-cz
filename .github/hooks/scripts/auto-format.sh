#!/bin/bash
# Runs Prettier on the whole project after any agent file write.
# Ensures AI-generated code is always formatted correctly.

cd "$(git rev-parse --show-toplevel)"
bun prettier --write . 2>/dev/null || true
