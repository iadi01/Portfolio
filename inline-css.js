import fs from 'fs';
import path from 'path';

const distDir = './dist';
const htmlPath = path.join(distDir, 'index.html');

try {
  let html = fs.readFileSync(htmlPath, 'utf8');

  // Match: stylesheet links
  const cssLinkRegex = /<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>|<link[^>]*href="([^"]+)"[^>]*rel="stylesheet"[^>]*>/gi;
  let match;
  let found = false;

  while ((match = cssLinkRegex.exec(html)) !== null) {
    const linkTag = match[0];
    const cssUrl = match[1] || match[2];
    
    // Skip external stylesheet links
    if (cssUrl.startsWith('http') || cssUrl.startsWith('//')) {
      continue;
    }
    
    // Remove query parameters or hash if any, and leading slash
    const cleanUrl = cssUrl.split('?')[0].split('#')[0];
    const cssRelativePath = cleanUrl.startsWith('/') ? cleanUrl.slice(1) : cleanUrl;
    const cssPath = path.join(distDir, cssRelativePath);
    
    if (fs.existsSync(cssPath)) {
      console.log(`Inlining CSS from: ${cssPath}`);
      const cssContent = fs.readFileSync(cssPath, 'utf8');
      
      // Replace link tag with style tag
      html = html.replace(linkTag, `<style>${cssContent}</style>`);
      fs.writeFileSync(htmlPath, html, 'utf8');
      console.log('CSS successfully inlined into dist/index.html!');
      
      // Delete original CSS file to prevent duplicate assets in dist
      try {
        fs.unlinkSync(cssPath);
        console.log(`Deleted original CSS file: ${cssPath}`);
      } catch (err) {
        console.warn(`Could not delete original CSS file: ${err.message}`);
      }
      
      found = true;
      break;
    }
  }

  if (!found) {
    console.log('No local CSS link tag found to inline.');
  }
} catch (err) {
  console.error('Error inlining CSS:', err);
}
