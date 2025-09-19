const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'app', 'components');

function updateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace direct framer-motion imports with our utility
    content = content.replace(
      /import\s*\{\s*([^}]+)\s*}\s*from\s*["']framer-motion["']/g,
      'import { $1 } from "@/app/utils/motion"'
    );
    
    // Update any default imports
    content = content.replace(
      /import\s+([^\s,{}]+)\s+from\s*["']framer-motion["']/g,
      'import { motion } from "@/app/utils/motion"'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      updateImports(fullPath);
    }
  });
}

// Start processing from the components directory
processDirectory(componentsDir);

console.log('All Framer Motion imports have been updated!');
