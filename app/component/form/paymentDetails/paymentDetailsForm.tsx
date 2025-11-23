import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">Payment Details</p>
    <CustomTextInput
      label="M-Pesa Number (Optional)"
      placeholder="0740 459 672"
      variableName="mpesaNumber"
    />
    <CustomTextInput
      label="M-Pesa Name"
      placeholder="PrimeCoat Painting Services"
      variableName="mpesaName"
    />
    <div className="border-t border-dashed border-gray-300 my-6 pt-6">
      <p className="text-sm font-medium text-neutral-500 mb-4">Bank Transfer Details</p>
      <CustomTextInput
        label="Bank name"
        placeholder="e.g. Equity Bank, KCB, Co-operative Bank"
        variableName="bankName"
      />
      <CustomTextInput
        label="Account number"
        placeholder="1234567890"
        variableName="accountNumber"
      />
      <CustomTextInput
        label="Account Name"
        placeholder="PrimeCoat Painting Services"
        variableName="accountName"
      />
      <CustomTextInput
        label="Branch"
        placeholder="e.g. Lavington Branch"
        variableName="branchName"
      />
      <CustomTextInput
        label="Swift Code (For International)"
        placeholder="EQBLKENA"
        variableName="swiftCode"
      />
    </div>
  </div>
);
