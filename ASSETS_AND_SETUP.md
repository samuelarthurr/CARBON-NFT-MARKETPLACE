# Carbon NFT Marketplace - Assets & Setup Guide

## 📦 Project Assets

### Logo Files
- **SVG Logo**: `/public/carbon-nft-logo.jpg` - Scalable vector version (recommended for web)
- **PNG Logo**: `/public/carbon-nft-logo.jpg` - Raster version with transparency
- **Usage**: The logo features a leaf icon in eco-green (#00C27B) on a dark background

### Project Images
All images are stored in the `/public` directory:

1. **mangrove-forest-coastal-restoration.jpg** - Mangrove restoration projects
2. **solar-panels-renewable-energy-farm.jpg** - Solar energy initiatives
3. **tropical-rainforest-trees-planting.jpg** - Reforestation projects
4. **wind-turbines-renewable-energy.jpg** - Wind energy projects

### Color Palette
The design system uses these semantic tokens (defined in `app/globals.css`):

**Light Mode:**
- Primary: `#00C27B` (Eco Green)
- Accent: `#00B8A9` (Teal)
- Background: `#FFFFFF`
- Foreground: `#0A0A0A`
- Muted: `#F5F5F5`
- Border: `#E5E5E5`

**Dark Mode:**
- Primary: `#00C27B` (Eco Green)
- Accent: `#00B8A9` (Teal)
- Background: `#0A0A0A`
- Foreground: `#FAFAFA`
- Muted: `#1A1A1A`
- Border: `#262626`

### Typography
- **Headings**: Geist Sans (variable font)
- **Body**: Geist Sans (variable font)
- **Monospace**: Geist Mono (variable font)

---

## 🚀 How to Run the Web App Locally

### Prerequisites
Make sure you have the following installed on your laptop:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional, for version control)

### Step 1: Download the Project Files
1. Click the **three dots (⋯)** in the top right corner of the v0 interface
2. Select **"Download ZIP"**
3. Extract the ZIP file to a folder on your laptop (e.g., `Documents/carbon-nft-marketplace`)

### Step 2: Open in Visual Studio Code
1. Open **Visual Studio Code**
2. Click **File → Open Folder**
3. Navigate to the extracted folder and click **Select Folder**

### Step 3: Install Dependencies
1. Open the **Terminal** in VS Code:
   - Click **Terminal → New Terminal** (or press `` Ctrl+` `` on Windows/Linux, `` Cmd+` `` on Mac)
2. Run the following command to install all required packages:
   \`\`\`bash
   npm install
   \`\`\`
3. Wait for the installation to complete (this may take 2-3 minutes)

### Step 4: Run the Development Server
1. In the same terminal, run:
   \`\`\`bash
   npm run dev
   \`\`\`
2. You should see output like:
   \`\`\`
   ▲ Next.js 15.x.x
   - Local:        http://localhost:3000
   - Ready in 2.3s
   \`\`\`

### Step 5: View the Website
1. Open your web browser (Chrome, Firefox, Safari, or Edge)
2. Go to: **http://localhost:3000**
3. The Carbon NFT Marketplace should now be running!

### Step 6: Making Changes
- Any changes you make to the code will automatically refresh in the browser
- Edit files in the `app/` and `components/` folders to customize the site
- Press `Ctrl+C` in the terminal to stop the development server

---

## 📁 Project Structure

\`\`\`
carbon-nft-marketplace/
├── app/                          # Next.js app directory
│   ├── page.tsx                  # Landing page
│   ├── marketplace/              # Marketplace pages
│   ├── nft/[id]/                 # NFT detail pages
│   ├── profile/                  # User profile
│   ├── impact/                   # Impact dashboard
│   ├── admin/                    # Admin panel
│   ├── how-it-works/             # How it works page
│   ├── about/                    # About page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # Reusable components
│   ├── header.tsx                # Site header
│   ├── footer.tsx                # Site footer
│   ├── nft-card.tsx              # NFT card component
│   ├── filter-sidebar.tsx        # Filter sidebar
│   ├── search-bar.tsx            # Search component
│   └── ui/                       # shadcn/ui components
├── public/                       # Static assets
│   ├── carbon-nft-logo.svg       # Logo (SVG)
│   ├── carbon-nft-logo.png       # Logo (PNG)
│   └── *.jpg                     # Project images
└── package.json                  # Dependencies
\`\`\`

---

## 🎨 Key Features Implemented

### Functional Filters
All filters are now fully functional:
- ✅ **Project Type**: Tree Planting, Solar Energy, Mangrove Restoration, Wind Energy, Bioenergy
- ✅ **Verification**: Verra Certified, Gold Standard, Bursa Carbon
- ✅ **Region**: Malaysia, Indonesia, Thailand, Singapore
- ✅ **Price Range**: Slider from RM0 to RM500
- ✅ **Offset Amount**: 0-50kg, 50-100kg, 100kg+ CO₂
- ✅ **Rarity**: Common, Rare, Legendary

### Functional Sorting
All sorting options work:
- ✅ **Newest First**: Shows most recently added NFTs
- ✅ **Oldest First**: Shows oldest NFTs first
- ✅ **Price: Low to High**: Cheapest to most expensive
- ✅ **Price: High to Low**: Most expensive to cheapest
- ✅ **Most Offset**: Highest CO₂ offset amount first
- ✅ **Trending**: Shows trending projects first
- ✅ **Ending Soon**: Shows NFTs with lowest remaining supply

### Search Functionality
- ✅ Real-time search by project name, type, or location
- ✅ Clear button to reset search
- ✅ Works in combination with filters

---

## 🛠️ Troubleshooting

### Port Already in Use
If you see "Port 3000 is already in use":
\`\`\`bash
# Kill the process using port 3000
npx kill-port 3000

# Then run dev server again
npm run dev
\`\`\`

### Module Not Found Errors
If you see module errors:
\`\`\`bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Images Not Loading
- Make sure all image files are in the `/public` folder
- Check that image paths in the code start with `/` (e.g., `/carbon-nft-logo.jpg`)

---

## 📝 Next Steps

### To Deploy Online (Optional)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" and select your GitHub repository
4. Vercel will automatically deploy your site!

### To Customize
- **Colors**: Edit `app/globals.css` to change the color scheme
- **Content**: Edit page files in `app/` directory
- **Components**: Modify components in `components/` directory
- **Add Features**: Create new pages or components as needed

---

## 💡 Tips
- Use `Ctrl+P` (or `Cmd+P` on Mac) in VS Code to quickly find files
- Install the "ES7+ React/Redux/React-Native snippets" extension for faster coding
- Use the VS Code integrated terminal for all commands
- Keep the dev server running while you work for live updates

---

## 📧 Support
If you encounter any issues:
1. Check the terminal for error messages
2. Make sure Node.js version is 18 or higher: `node --version`
3. Try deleting `node_modules` and running `npm install` again
4. Restart VS Code and the development server

Happy coding! 🌱
