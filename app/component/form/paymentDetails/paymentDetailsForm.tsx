import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">Payment Details</p>
    <p className="pb-4 text-xs font-medium text-neutral-500">
      Payment information is pre-filled. Update with your bank details as needed.
    </p>
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <p className="text-sm font-semibold text-amber-900 mb-3">📱 M-Pesa Payment (Mobile Money)</p>
      <CustomTextInput
        label="M-Pesa Number"
        placeholder="0740 459 672"
        variableName="mpesaNumber"
        defaultValue="0740 459 672"
      />
      <CustomTextInput
        label="M-Pesa Name"
        placeholder="PrimeCoat Painting Services"
        variableName="mpesaName"
        defaultValue="PrimeCoat Painting Services"
      />
    </div>
    <div className="border-t border-dashed border-gray-300 pt-6">
      <p className="text-sm font-semibold text-prime-navy mb-4">🏦 Bank Transfer Details</p>
      <CustomTextInput
        label="Bank name"
        placeholder="e.g. Equity Bank, KCB, Co-operative Bank"
        variableName="bankName"
        defaultValue=""
      />
      <CustomTextInput
        label="Account number"
        placeholder="1234567890"
        variableName="accountNumber"
        defaultValue=""
      />
      <CustomTextInput
        label="Account Name"
        placeholder="PrimeCoat Painting Services"
        variableName="accountName"
        defaultValue="PrimeCoat Painting Services"
      />
      <CustomTextInput
        label="Branch"
        placeholder="e.g. Lavington Branch"
        variableName="branchName"
        defaultValue=""
      />
      <CustomTextInput
        label="Swift Code (For International)"
        placeholder="EQBLKENA"
        variableName="swiftCode"
        defaultValue=""
      />
    </div>
  </div>
);
