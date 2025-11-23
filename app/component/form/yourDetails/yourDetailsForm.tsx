import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">Your Business Details (From)</p>
    <CustomTextInput
      label="Email"
      placeholder="info@primecoat.co.ke"
      variableName="yourEmail"
      defaultValue="info@primecoat.co.ke"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      Your business information is pre-filled. You can edit any field as needed.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Business billing details</p>
    <CustomTextInput
      label="Business Name"
      placeholder="PrimeCoat Painting Services"
      variableName="yourName"
      defaultValue="PrimeCoat Painting Services"
    />
    <ImageInput label="Logo" variableName="yourLogo" />
    <p className="pb-2 pt-1 text-xs font-medium text-amber-600">
      💡 Upload logo: /public/primecoat-logo.png
    </p>
    <CustomTextInput
      label="Address"
      placeholder="James Gichuru Road, Lavington"
      variableName="yourAddress"
      defaultValue="James Gichuru Road, Lavington"
    />
    <CustomTextInput
      label="City"
      placeholder="Nairobi"
      variableName="yourCity"
      defaultValue="Nairobi"
    />
    <CustomTextInput
      label="County / State"
      placeholder="Nairobi County"
      variableName="yourState"
      defaultValue="Nairobi County"
    />
    <CustomNumberInput
      label="Postal Code"
      placeholder="00100"
      variableName="yourZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="Kenya"
      variableName="yourCountry"
      defaultValue="Kenya"
    />
    <CustomTextInput
      label="Phone"
      placeholder="0740 459 672 | 0719 427 155"
      variableName="yourPhone"
      defaultValue="0740 459 672 | 0719 427 155"
    />
    <CustomTextInput
      label="Website"
      placeholder="https://primecoat.co.ke"
      variableName="yourWebsite"
      defaultValue="https://primecoat.co.ke"
    />
    <CustomTextInput
      label="KRA PIN"
      placeholder="A000000000A"
      variableName="yourTaxId"
      defaultValue=""
    />
  </div>
);
