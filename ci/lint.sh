#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

eslint --max-warnings=0 --fix $(git ls-files "*.ts" "*.tsx" "*.js")
stylelint --fix $(git ls-files "*.js" "*.ts" "*.tsx")
