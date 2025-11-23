import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">Client Details (Bill To)</p>
    <CustomTextInput
      label="Client Email"
      placeholder="e.g. client@company.co.ke"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      Enter your client's information below.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Client billing details</p>
    <CustomTextInput
      label="Client Name / Company"
      placeholder="e.g. ABC Construction Ltd"
      variableName="companyName"
    />
    <ImageInput label="Client Logo (Optional)" variableName="companyLogo" />
    <CustomTextInput
      label="Address"
      placeholder="e.g. Westlands, Nairobi"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Nairobi"
      variableName="companyCity"
    />
    <CustomTextInput
      label="County / State"
      placeholder="Nairobi County"
      variableName="companyState"
    />
    <CustomNumberInput
      label="Postal Code"
      placeholder="00100"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="Kenya"
      variableName="companyCountry"
    />
    <CustomTextInput
      label="KRA PIN (Optional)"
      placeholder="P000000000A"
      variableName="companyTaxId"
    />
  </div>
);
