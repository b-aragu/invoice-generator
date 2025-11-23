# 🇰🇪 PrimeCoat Invoice Generator - Kenya Customization Guide

## ✅ Complete Branding Transformation

Your invoice generator has been **100% customized** for PrimeCoat Painting Services in Nairobi, Kenya!

---

## 🎨 What's Been Customized

### **1. Currency - Kenyan Shillings (KES)** 💰

**Before:** Indian Rupees (INR) default  
**Now:** Kenyan Shillings (KES) default

```
Symbol: KSh
Currency: Kenyan Shilling
Default: KES
All amounts in Kenya Shillings
```

**Also Available:**
- USD, EUR, GBP (for international clients)
- 15+ currencies still supported
- Easy currency switcher

---

### **2. Payment Methods - M-Pesa & Kenyan Banks** 📱💳

**M-Pesa Integration:**
```
M-Pesa Number: 0740 459 672
M-Pesa Name: PrimeCoat Painting Services
```

**Kenyan Banking:**
```
Bank: Equity Bank, KCB, Co-operative Bank, etc.
Account Number: Standard Kenyan format
Branch: Lavington Branch (or any)
Swift Code: For international payments
```

**Removed:**
- ❌ IFSC Code (India only)
- ❌ Routing Number (US only)

**Added:**
- ✅ M-Pesa fields
- ✅ Branch name
- ✅ Kenya-specific banking

---

### **3. Location Defaults - Nairobi, Kenya** 📍

**Your Business (PrimeCoat):**
```
Company: PrimeCoat Painting Services
Address: James Gichuru Road, Lavington
City: Nairobi
County: Nairobi County
Postal Code: 00100
Country: Kenya
Tax ID: KRA PIN format (A000000000A)
```

**Client Defaults:**
```
City: Nairobi
County: Nairobi County (instead of State)
Postal Code: 00100 format
Country: Kenya
KRA PIN: Optional field
```

---

### **4. Invoice Terminology - Kenya Style** 📄

**Form Names Updated:**

| Old Name | New Name |
|----------|----------|
| Company Details (To) | Client Details (Bill To) |
| Invoice Details | Services & Pricing |
| Items | Painting Services / Items |
| State | County / State |
| Zip | Postal Code |
| Tax ID | KRA PIN (Optional) |
| IFSC Code | Branch |

---

### **5. PrimeCoat Branding Throughout** 🎨

**Landing Page:**
- Headline: "Professional **PrimeCoat** Invoice Generator"
- Subtext: "Painting projects in Nairobi, Kenya"
- Button colors: Prime Navy (#0A1F44) → Prime Blue (#1F4BA8)

**Invoice Form Header:**
- Logo: PrimeCoat logo with transparent background
- Title: "PrimeCoat Invoice Generator"
- Tagline: "Painting Services - Nairobi, Kenya"

**Colors Applied:**
- Headings: Prime Navy (#0A1F44)
- Buttons: Prime Navy → Prime Blue gradient
- Subtext: Prime Blue (#1F4BA8)
- Background: Professional blue tones

**Typography:**
- Headings: Montserrat (Bold/SemiBold)
- Body: Inter (Regular/Medium)

---

### **6. Invoice Terms - Painting Industry** 🏠🎨

**Pre-filled Payment Terms:**
```
50% deposit upon contract signing
30% at project midpoint
20% upon completion
```

**Invoice Number Format:**
```
PC-INV-001
PC-INV-002
PC-INV-003
etc.
```

**Additional Notes Pre-filled:**
```
All work includes materials and labor
12-month warranty on workmanship
```

---

### **7. Sample Invoice Items - Painting Services** 🖌️

**Pre-filled Placeholders:**
```
Interior Painting - Living Room
Exterior Painting - 3-Bedroom House
Wall Master Texture - Feature Wall
Waterproofing - Roof Section
```

**Quantity & Pricing:**
```
Qty: Number of rooms, sqm, or units
Price: Amount in KES per unit
Total: Auto-calculated
```

---

## 📋 Complete Feature List

### **✅ Pre-filled But Editable**

**Your Details (From):**
- [x] Business Name: PrimeCoat Painting Services
- [x] Email: info@primecoat.co.ke
- [x] Address: James Gichuru Road, Lavington
- [x] City: Nairobi
- [x] County: Nairobi County
- [x] Postal Code: 00100
- [x] Country: Kenya
- [x] Logo: Upload primecoat-logo.png

**Client Details (Bill To):**
- [x] Client Name/Company
- [x] Client Email (.co.ke domain)
- [x] Nairobi default address
- [x] Kenya location defaults
- [x] KRA PIN optional

**Services & Pricing:**
- [x] Currency: KES default
- [x] Painting services items
- [x] Quantity calculator
- [x] Price per unit
- [x] Auto-totals
- [x] Discount field
- [x] Tax field (VAT)

**Payment Details:**
- [x] M-Pesa number and name
- [x] Bank transfer details
- [x] Kenyan banks
- [x] Branch information
- [x] Swift code (international)

**Invoice Terms:**
- [x] Invoice number (PC-INV-###)
- [x] Issue date
- [x] Due date
- [x] Payment terms (50/30/20)
- [x] Additional notes

---

## 🎯 How to Use

### **Step 1: Start the App**
```bash
cd /home/baragu/Documents/invoice-generator
npm run dev
```
Open: **http://localhost:3000**

### **Step 2: Fill Your Details**
1. **Email:** info@primecoat.co.ke (pre-filled)
2. **Upload Logo:** /public/primecoat-logo.png
3. All other fields auto-filled with PrimeCoat info
4. Edit any field as needed

### **Step 3: Add Client Info**
1. Client name or company
2. Client email
3. Address in Nairobi (or other location)
4. KRA PIN if needed

### **Step 4: Add Services**
```
Example 1:
Description: Interior Painting - Living Room & Dining
Qty: 2 rooms
Price: 25,000
Total: 50,000 KES

Example 2:
Description: Exterior House Painting (3-Bedroom)
Qty: 1 house
Price: 85,000
Total: 85,000 KES

Example 3:
Description: Wall Master Texture - Feature Wall
Qty: 1 wall
Price: 30,000
Total: 30,000 KES
```

### **Step 5: Payment Info**
**M-Pesa:**
- Number: 0740 459 672
- Name: PrimeCoat Painting Services

**Bank Transfer:**
- Bank: [Your Bank]
- Account: [Your Account Number]
- Branch: Lavington Branch

### **Step 6: Invoice Terms**
- Invoice #: PC-INV-001
- Issue Date: Today
- Due Date: Net 30 or custom
- Payment Terms: 50/30/20 or edit
- Notes: Warranty, materials info

### **Step 7: Generate PDF**
Click **"Download Invoice"**
- Professional branded PDF
- Ready to email or print
- KES currency throughout
- PrimeCoat logo displayed

---

## 💡 Pro Tips

### **For Interior Projects:**
```
Living Room Painting (2 coats, matte finish)
Qty: 1 room
Rate: 25,000 KES
```

### **For Exterior Projects:**
```
Exterior House Painting (Weather-resistant)
Qty: 1 house (3-bedroom)
Rate: 85,000 KES
```

### **For Specialized Services:**
```
Wall Master Premium Texture
Qty: 20 sqm
Rate: 1,500 per sqm
Total: 30,000 KES
```

### **For Waterproofing:**
```
Roof Waterproofing System (5-year warranty)
Qty: 50 sqm
Rate: 700 per sqm
Total: 35,000 KES
```

---

## 📊 Invoice Components

### **Auto-Calculated Fields:**
- Subtotal (all items)
- Discount (if any)
- Tax/VAT (if applicable)
- **Grand Total in KES**

### **Professional Elements:**
- PrimeCoat logo
- Business contact info
- Client billing details
- Itemized services
- Payment instructions
- Terms and conditions
- Due date
- Invoice number

---

## 🇰🇪 Kenya-Specific Features

### **1. KRA Compliance:**
- KRA PIN field for tax purposes
- Tax/VAT calculation
- Professional invoice format

### **2. M-Pesa Integration:**
- Mobile payment instructions
- M-Pesa number displayed
- Easy payment for clients

### **3. Local Banking:**
- Kenyan bank names
- Branch information
- Standard account format
- Swift code for international

### **4. Professional Format:**
- Nairobi business address
- Kenya postal codes
- County instead of State
- KES currency default

---

## 📱 Payment Instructions Example

**Generated Invoice Will Show:**

```
PAYMENT DETAILS

M-Pesa Payment:
Pay to: 0740 459 672
Name: PrimeCoat Painting Services

Bank Transfer:
Bank: [Your Bank Name]
Account: [Account Number]
Account Name: PrimeCoat Painting Services
Branch: Lavington Branch
Swift: [For International]

Payment Terms:
- 50% deposit (KES [Amount]) - Due on signing
- 30% progress (KES [Amount]) - Due at midpoint
- 20% final (KES [Amount]) - Due on completion

All payments in Kenyan Shillings (KES)
```

---

## 🎨 Branding Colors Used

```css
Prime Navy: #0A1F44  (Headings, Buttons)
Prime Blue: #1F4BA8  (Accents, Links)
Prime Yellow: #FFC93C (Available for highlights)
Prime Grey: #D9DCE1  (Backgrounds, subtle elements)
```

---

## 📄 Invoice File Naming

**Auto-generated names:**
```
PC-INV-001-ClientName.pdf
PC-INV-002-ABC-Construction.pdf
PC-INV-003-Jane-Doe.pdf
```

---

## ✨ What Makes This Special

### **1. 100% Kenya-Focused:**
- KES currency default
- M-Pesa payment ready
- Nairobi location
- KRA PIN compliant
- Local banking standards

### **2. Painting Industry Specific:**
- Service descriptions
- Square meter calculations
- Room-based pricing
- Materials + labor
- Warranty terms

### **3. PrimeCoat Branded:**
- Company logo
- Brand colors
- Professional appearance
- Consistent identity

### **4. Time-Saving:**
- All info pre-filled
- Quick client entry
- Fast PDF generation
- Professional results

### **5. Fully Flexible:**
- Edit any field
- Change currency if needed
- Custom payment terms
- Add/remove items
- Multiple clients

---

## 🚀 Deployment Options

### **Option 1: Keep Local**
```bash
# Just run locally when needed
npm run dev
```

### **Option 2: Deploy Online**
```bash
# Deploy to Vercel (free)
vercel deploy

# Or Netlify
netlify deploy

# Custom domain: invoice.primecoat.co.ke
```

---

## 📞 Contact Information

**PrimeCoat Painting Services**
Email: info@primecoat.co.ke
Phone: 0740 459 672 | 0719 427 155
Website: https://primecoat.co.ke
Location: Lavington, Nairobi, Kenya

---

## 📚 Documentation Files

1. **HOW-TO-RUN.md** - Running the app locally
2. **PRIMECOAT-BRANDING.md** - Brand guidelines
3. **KENYA-CUSTOMIZATION.md** - This file
4. **README.md** - Project overview

---

## ✅ Customization Checklist

- [x] KES currency added and set as default
- [x] M-Pesa payment fields added
- [x] Kenyan banking fields updated
- [x] Nairobi, Kenya location defaults
- [x] KRA PIN format support
- [x] PrimeCoat branding throughout
- [x] Logo integrated
- [x] Colors updated to Prime Navy/Blue
- [x] All forms pre-filled with PrimeCoat info
- [x] Payment terms for painting industry
- [x] Invoice number format (PC-INV-###)
- [x] Professional painting service placeholders
- [x] Typography updated (Montserrat + Inter)
- [x] Landing page rebranded
- [x] Form headers customized
- [x] Kenya-specific terminology
- [x] Complete user documentation

---

## 🎉 You're Ready!

**Your PrimeCoat invoice generator is:**
- ✨ 100% Kenya customized
- 🎨 Fully PrimeCoat branded
- 📱 M-Pesa ready
- 💰 KES currency default
- 🏠 Painting industry focused
- 📄 Professional PDF output
- 🚀 Ready to use NOW!

**Generate your first invoice at:**
**http://localhost:3000**

---

**Last Updated:** November 23, 2024  
**Version:** 2.0.0 - Kenya Edition  
**Customized For:** PrimeCoat Painting Services, Nairobi
