#!/bin/bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"
echo "Cleaning node_modules, dist and tsconfig.tsbuildinfo from $parent_path"

find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'dist' -type d -prune -exec rm -rf '{}' +
find . -name 'tsconfig.tsbuildinfo' -exec rm -rf '{}' +

echo "All clean!"
