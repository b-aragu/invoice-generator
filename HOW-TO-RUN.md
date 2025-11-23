# 🚀 How to Run PrimeCoat Invoice Generator

## ✅ Server is Running!

Your PrimeCoat invoice generator is now live at:

**🌐 Local URL:** http://localhost:3000  
**🌐 Network URL:** http://192.168.100.101:3000

---

## 📱 How to Access

### Option 1: On This Computer
1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: **http://localhost:3000**
3. Start creating invoices!

### Option 2: On Other Devices (Phone, Tablet, Other Computer)
If on the same WiFi network:
1. Open browser on your phone/tablet
2. Go to: **http://192.168.100.101:3000**
3. Access from anywhere on your local network!

---

## 🛑 How to Stop the Server

Press `Ctrl + C` in the terminal where it's running

---

## 🔄 How to Start Again

```bash
cd /home/baragu/Documents/invoice-generator
npm run dev
```

---

## 📝 Using the Invoice Generator

### Step 1: Your Details (From)
✅ **Pre-filled with PrimeCoat information!**
- Business Name: PrimeCoat Painting Services
- Email: info@primecoat.co.ke
- Address: James Gichuru Road, Lavington, Nairobi
- Country: Kenya

**Upload Logo:**
- Click "Logo" field
- Select: `/home/baragu/Documents/invoice-generator/public/primecoat-logo.png`

### Step 2: Company Details (To)
Enter client information:
- Client company name
- Contact person
- Address
- Email

### Step 3: Invoice Details
- Invoice Number (auto-generated or custom)
- Invoice Date
- Due Date
- PO Number (optional)

### Step 4: Add Items/Services
**Example Painting Services:**

```
Item 1:
Description: Interior Painting - Living Room & Dining Room
Quantity: 2 rooms
Rate: 25,000
Amount: 50,000 KES

Item 2:
Description: Wall Master Texture - Feature Wall (Premium Finish)
Quantity: 1 wall
Rate: 30,000
Amount: 30,000 KES

Item 3:
Description: Exterior House Painting (3-Bedroom, Weather-Resistant)
Quantity: 1 house
Rate: 85,000
Amount: 85,000 KES

Item 4:
Description: Waterproofing - Roof Section (with 5-year warranty)
Quantity: 50 sqm
Rate: 700
Amount: 35,000 KES
```

### Step 5: Payment Details
Add payment information:
- **M-Pesa:**
  - Name: PrimeCoat Painting Services
  - Number: 0740 459 672

- **Bank Transfer:**
  - Bank: [Your Bank Name]
  - Account: [Account Number]
  - Branch: [Branch Name]

### Step 6: Invoice Terms
```
Payment Terms: 50% deposit, 30% at midpoint, 20% on completion
Due Date: As per agreed schedule
Notes: All prices inclusive of materials and labor
Warranty: 12 months on workmanship
```

### Step 7: Generate PDF
Click **"Download Invoice"** button
- Professional PDF with PrimeCoat branding
- Ready to email to clients
- Printable

---

## 🎨 Invoice Preview

The invoice will show:
- ✅ PrimeCoat logo (when uploaded)
- ✅ Prime Navy and Blue brand colors
- ✅ Professional layout
- ✅ Your business details
- ✅ Client details
- ✅ Itemized services
- ✅ Subtotal, Tax (if applicable), Total
- ✅ Payment information
- ✅ Terms and conditions

---

## 💾 Saving Invoices

**Automatic Local Storage:**
- All data is saved in your browser automatically
- Return anytime and your info is still there
- No account needed
- 100% free

**PDF Files:**
- Downloaded PDFs save to your Downloads folder
- File name: `Invoice-[Number]-[Client-Name].pdf`
- Keep copies for your records

---

## 🔧 Common Issues & Solutions

### Issue 1: Page Not Loading
**Solution:**
```bash
# Stop the server (Ctrl + C)
# Restart it:
cd /home/baragu/Documents/invoice-generator
npm run dev
```

### Issue 2: Logo Not Showing
**Solution:**
- Upload the logo manually from: `/home/baragu/Documents/invoice-generator/public/primecoat-logo.png`
- Or place a copy in easy-to-find location

### Issue 3: Port Already in Use
**Solution:**
```bash
# Find what's using port 3000:
lsof -i :3000

# Kill the process or use different port:
npm run dev -- -p 3001
# Then access at: http://localhost:3001
```

### Issue 4: Changes Not Showing
**Solution:**
- Hard refresh browser: `Ctrl + Shift + R` (Linux/Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

---

## 📋 Quick Reference

### Project Location:
```
/home/baragu/Documents/invoice-generator/
```

### Key Commands:
```bash
# Start server
npm run dev

# Build for production
npm run build

# Install dependencies (if needed)
npm install --legacy-peer-deps
```

### Important Files:
```
public/primecoat-logo.png         - Your logo
PRIMECOAT-BRANDING.md             - Brand guidelines
tailwind.config.ts                - Colors and fonts
app/layout.tsx                    - Metadata and SEO
```

---

## 🌟 Features

✅ **Professional Branding**
- PrimeCoat colors throughout
- Company logo on invoices
- Professional layout

✅ **Easy to Use**
- Pre-filled business info
- Simple form interface
- Real-time preview

✅ **Unlimited Invoices**
- Generate as many as you need
- No cost, no limits
- Save data locally

✅ **Professional PDFs**
- Clean, branded design
- Print-ready
- Email-ready

✅ **Privacy First**
- All data stored locally
- No cloud storage
- Your data stays on your computer

---

## 📞 Support

**Technical Issues:**
- Check `PRIMECOAT-BRANDING.md` for details
- Review documentation in this folder

**Business Inquiries:**
- Email: info@primecoat.co.ke
- Phone: 0740 459 672 | 0719 427 155

---

## 🎯 Tips for Best Results

1. **Upload Logo First** - Makes invoices look professional
2. **Use Consistent Numbering** - INV-001, INV-002, etc.
3. **Be Detailed** - Clear item descriptions help clients understand
4. **Include Payment Terms** - Avoid confusion with clear terms
5. **Save PDF Copies** - Keep for your records and accounting
6. **Use Templates** - Save time by reusing common service descriptions

---

## 📈 Sample Invoice Workflow

1. Client requests quote
2. Create invoice with estimated costs
3. Client approves
4. Generate final invoice with agreed amounts
5. Download PDF
6. Email to client: info@clientcompany.com
7. Track payment
8. Create receipt (use same tool, mark as "RECEIPT")

---

**Your PrimeCoat Invoice Generator is ready! 🎨✨**

**Server Running At:**
- Local: http://localhost:3000
- Network: http://192.168.100.101:3000

Open your browser and start creating professional invoices!
