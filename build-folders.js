import fs from 'fs'
import path from 'path'

const distDir = './dist'
const pages = ['privacy-policy', 'terms-and-conditions', 'thank-you',]

// Function to update HTML links
function updateLinksInHTML(htmlContent) {
  let updatedContent = htmlContent
  
  // Replace .html links with folder paths
  pages.forEach(page => {
    const htmlLinkRegex = new RegExp(`href=["']${page}\\.html["']`, 'g')
    updatedContent = updatedContent.replace(htmlLinkRegex, `href="/${page}/"`)
  })
  
  // Also handle relative links without leading slash
  pages.forEach(page => {
    const htmlLinkRegex = new RegExp(`href=["']\\.\/${page}\\.html["']`, 'g')
    updatedContent = updatedContent.replace(htmlLinkRegex, `href="/${page}/"`)
  })
  
  return updatedContent
}

// Update all HTML files and create folder structure
const allHtmlFiles = ['index.html', ...pages.map(page => `${page}.html`)]

allHtmlFiles.forEach(fileName => {
  const filePath = path.join(distDir, fileName)
  
  if (fs.existsSync(filePath)) {
    // Read and update HTML content
    let htmlContent = fs.readFileSync(filePath, 'utf8')
    htmlContent = updateLinksInHTML(htmlContent)
    
    if (fileName === 'index.html') {
      // Update index.html in place
      fs.writeFileSync(filePath, htmlContent)
      console.log('✓ Updated links in index.html')
    } else {
      // Create folder and move file
      const pageName = fileName.replace('.html', '')
      const pageDir = path.join(distDir, pageName)
      
      if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir, { recursive: true })
      }
      
      // Write updated content to new location
      fs.writeFileSync(path.join(pageDir, 'index.html'), htmlContent)
      
      // Remove original file
      fs.unlinkSync(filePath)
      
      console.log(`✓ Created folder structure and updated links for ${pageName}`)
    }
  }
})

console.log('✓ Folder-based routing structure created with updated links!')