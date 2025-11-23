# PrimeCoat Invoice Generator 🇰🇪

Professional invoice generator customized for **PrimeCoat Painting Services** in Nairobi, Kenya.

This tool helps create beautiful, branded invoices with M-Pesa and bank payment options, making it easy to get paid for painting projects across Kenya.

## ✨ Key Features

### 🎨 **PrimeCoat Branding**
- Pre-filled with PrimeCoat business details
- Auto-loading company logo
- Prime Navy & Blue color scheme
- Professional Kenyan styling

### 💰 **Kenyan Payment Options**
- **M-Pesa Payment:** Phone number with step-by-step instructions
- **Bank Transfer:** Full bank details with branch info
- Conditional display (shows only selected method)

### 🚀 **Easy to Use**
- All business details pre-filled (editable)
- Clean, professional address format
- Simple City + Country fields (no redundancy)
- KES currency by default

### 📄 **Professional Output**
- Beautiful PDF invoices
- Prime Navy/Blue branding throughout
- Clear payment instructions
- Mobile-friendly preview

### 🇰🇪 **Kenya-Focused**
- KRA PIN support
- Nairobi, Kenya defaults
- M-Pesa integration
- Local business format

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or Bun package manager

### Installation

```bash
git clone https://github.com/b-aragu/invoice-generator.git
cd invoice-generator
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start creating invoices!

## 📱 How to Use

1. **Your Details:** Pre-filled with PrimeCoat info (logo auto-loads)
2. **Client Details:** Enter client name, address, and contact
3. **Invoice Items:** Add services with quantities and prices
4. **Payment Method:** Choose M-Pesa OR Bank transfer
5. **Generate PDF:** Download professional invoice instantly!

## 🎨 Customization

### Brand Colors (tailwind.config.ts)
```typescript
'prime-navy': '#0A1F44',
'prime-blue': '#1F4BA8',
'prime-yellow': '#FFC93C',
```

### Business Details
Update defaults in:
- `app/component/form/yourDetails/yourDetailsForm.tsx`
- `app/component/form/paymentDetails/paymentDetailsForm.tsx`

### Logo
Replace `/public/primecoat-logo.png` with your logo

## 🛠️ Technologies Used

- **Framework:** [Next.js 14](https://nextjs.org) (App Router)
- **PDF Generator:** [React PDF](https://react-pdf.org/)
- **Styling:** [Tailwind CSS](http://tailwindcss.com)
- **TypeScript:** Full type safety
- **Storage:** LocalStorage for form data

## 📚 Documentation

- `PRIMECOAT-BRANDING.md` - Branding guidelines
- `HOW-TO-RUN.md` - Setup instructions
- `KENYA-CUSTOMIZATION.md` - Kenya-specific features
- `COMPLETE-FEATURES.md` - Full feature list

## 📄 License

MIT License - Feel free to use for your business!

### Credits
Based on the excellent [invoice-generator](https://github.com/pranavp10/invoice-generator) by [@pranavp10](https://github.com/pranavp10)

## 💼 About PrimeCoat

Professional painting services in Nairobi, Kenya
- 📧 info@primecoat.co.ke
- 📱 0740 459 672 | 0719 427 155
- 🌐 https://primecoat.co.ke
