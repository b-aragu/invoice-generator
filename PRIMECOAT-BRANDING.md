# PrimeCoat Invoice Generator - Branding Guide

## 🎨 Branding Applied

This invoice generator has been fully customized for **PrimeCoat Painting Services** in Nairobi, Kenya.

---

## 🏢 Business Information

**Company Name:** PrimeCoat Painting Services  
**Email:** info@primecoat.co.ke  
**Phone:** 0740 459 672 | 0719 427 155  
**Website:** https://primecoat.co.ke

**Address:**  
James Gichuru Road, Lavington  
Nairobi, Kenya  
Postal Code: 00100

---

## 🎨 Brand Colors

```css
Prime Navy:   #0A1F44  (Primary - Headers, Dark Elements)
Prime Blue:   #1F4BA8  (Secondary - Accents)
Prime Yellow: #FFC93C  (Accent - Highlights, CTAs)
Prime Grey:   #D9DCE1  (Neutral - Backgrounds)
```

---

## 🔤 Typography

**Headings:** Montserrat (SemiBold 600, Bold 700, ExtraBold 800, Black 900)  
**Body Text:** Inter (Regular 400, Medium 500, SemiBold 600, Bold 700)

---

## 📁 Logo

**File:** `/public/primecoat-logo.png`  
**Source:** Copied from primecoat.co.ke website  
**Format:** PNG with transparent background  
**Size:** 72KB

---

## ⚙️ Technical Changes

### 1. **Tailwind Configuration** (`tailwind.config.ts`)
- Added PrimeCoat brand colors
- Added Inter and Montserrat fonts
- Consistent with main website

### 2. **Layout & Metadata** (`app/layout.tsx`)
- Updated page title and descriptions
- Changed theme color to Prime Navy
- Added Google Fonts (Inter + Montserrat)
- Updated Open Graph tags
- Kenya-specific SEO keywords

### 3. **Form Defaults** (`app/component/form/yourDetails/yourDetailsForm.tsx`)
- PrimeCoat business information pre-filled
- Nairobi, Kenya address defaults
- KRA PIN format for Tax ID
- Professional painting service placeholders

---

## 🚀 How to Run

```bash
cd /home/baragu/Documents/invoice-generator

# Install dependencies (first time only)
bun install
# OR
npm install

# Run development server
bun run dev
# OR
npm run dev

# Open browser to:
http://localhost:3000
```

---

## 📝 Using the Invoice Generator

### Default Information Pre-filled:
1. **Your Details (From):**
   - Business Name: PrimeCoat Painting Services
   - Email: info@primecoat.co.ke
   - Address: James Gichuru Road, Lavington
   - City: Nairobi
   - State: Nairobi County
   - Country: Kenya
   - Logo: Upload primecoat-logo.png

### Invoice Services Examples:
```
Interior Painting - Living Room
- Surface preparation and repair
- 2 coats premium matte paint
- Labor and materials
KES 45,000

Exterior Painting - 3-Bedroom House
- Pressure washing
- Crack filling and repair  
- Weather-resistant coating
KES 85,000

Wall Master Texture - Feature Wall
- Premium textured finish
- Designer color application
KES 25,000

Waterproofing - Roof Section
- Complete waterproofing system
- 5-year warranty
KES 35,000
```

---

## 🎯 Invoice Best Practices

### Payment Terms:
- **Deposit:** 50% upon contract signing
- **Progress:** 30% at project midpoint
- **Final:** 20% upon completion

### Payment Methods:
- M-Pesa: [Your M-Pesa Number]
- Bank Transfer: [Bank Details]
- Cash Payment
- Cheque

### Invoice Terms:
```
Payment Terms: 50/30/20 split as agreed
Due Date: As per payment schedule
Late Payment: 2% interest per month after due date

All prices in KES (Kenyan Shillings)
Prices include materials and labor unless stated
Site visits and quotes are complimentary
```

---

## 📄 Sample Invoice Items

### Painting Services:
- Interior Wall Painting (per room)
- Exterior Wall Painting (per sqm)
- Ceiling Painting
- Door & Window Frame Painting
- Decorative Wall Textures
- Wall Master Application

### Additional Services:
- Surface Preparation & Repair
- Waterproofing (Roof/Walls)
- Gypsum Ceiling Installation
- Crack Repair & Filling
- Color Consultation
- Site Supervision

### Materials:
- Premium Interior Paint (5L)
- Exterior Weather-Resistant Paint (5L)
- Wall Master Texture Material
- Waterproofing Membrane
- Primers & Sealers

---

## 🔗 Integration with Website

This invoice generator is a **separate standalone project** from the main PrimeCoat website (primecoat.co.ke).

**Projects Location:**
- Website: `/home/baragu/Documents/primecoat.co.ke/`
- Invoice: `/home/baragu/Documents/invoice-generator/`

**Shared Elements:**
- Brand colors and typography
- Company logo
- Contact information
- Professional design aesthetic

---

## 📊 Features

✅ Generate professional PDF invoices  
✅ PrimeCoat branding throughout  
✅ Save invoice data locally  
✅ Unlimited invoices  
✅ No cost, open source  
✅ Customizable fields  
✅ Kenyan business format  
✅ KRA PIN support  

---

## 🎨 Brand Consistency

All visual elements match the PrimeCoat website:
- Same color palette
- Same typography
- Same logo
- Professional contractor aesthetic
- Kenya business standards

---

## 📱 Deployment

To deploy this invoice generator:

1. **Vercel** (Recommended):
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   cd /home/baragu/Documents/invoice-generator
   vercel
   ```

2. **Netlify**:
   ```bash
   # Build
   bun run build
   
   # Deploy dist folder to Netlify
   ```

3. **Self-hosted**:
   ```bash
   # Build for production
   bun run build
   
   # Serve with your preferred method
   ```

---

## 🔐 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_URL=https://invoice.primecoat.co.ke
```

---

## 📞 Support

For questions about the invoice generator:
- Email: info@primecoat.co.ke
- Phone: 0740 459 672 | 0719 427 155

---

## ✨ Customization Tips

### Change Colors:
Edit `tailwind.config.ts` - modify the `prime-*` color values

### Update Logo:
Replace `/public/primecoat-logo.png` with your logo

### Modify Defaults:
Edit `app/component/form/yourDetails/yourDetailsForm.tsx`

### Add Custom Fields:
Follow the pattern in existing form components

---

**Last Updated:** November 23, 2024  
**Version:** 1.0.0 - PrimeCoat Edition
