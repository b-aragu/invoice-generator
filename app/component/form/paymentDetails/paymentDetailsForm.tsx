"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import { Controller } from "react-hook-form";
import { getInitialValue } from "@/lib/getInitialValue";
import { useState } from "react";

export const PaymentDetailsForm = () => {
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "bank">(
    (getInitialValue("paymentMethod", "mpesa") as "mpesa" | "bank") || "mpesa"
  );

  return (
    <div className="pt-24">
      <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">
        Payment Details
      </p>
      <p className="pb-4 text-xs font-medium text-neutral-500">
        Choose payment method. Only selected method will appear on invoice.
      </p>

      {/* Payment Method Selector */}
      <div className="mb-6">
        <p className="text-sm font-medium text-neutral-700 mb-3">
          Select Payment Method *
        </p>
        <Controller
          render={({ field: { onChange, value } }) => (
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("paymentMethod", "mpesa");
                  setPaymentMethod("mpesa");
                  onChange("mpesa");
                }}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "mpesa"
                    ? "border-prime-blue bg-blue-50 shadow-md"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <p className="font-semibold text-prime-navy">M-Pesa</p>
                    <p className="text-xs text-neutral-600">Mobile Money</p>
                  </div>
                  {paymentMethod === "mpesa" && (
                    <span className="ml-auto text-prime-blue">✓</span>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("paymentMethod", "bank");
                  setPaymentMethod("bank");
                  onChange("bank");
                }}
                className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "bank"
                    ? "border-prime-blue bg-blue-50 shadow-md"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl">🏦</span>
                  <div className="text-left">
                    <p className="font-semibold text-prime-navy">Bank Transfer</p>
                    <p className="text-xs text-neutral-600">Direct Deposit</p>
                  </div>
                  {paymentMethod === "bank" && (
                    <span className="ml-auto text-prime-blue">✓</span>
                  )}
                </div>
              </button>
            </div>
          )}
          name="paymentMethod"
          defaultValue={paymentMethod}
        />
      </div>

      {/* M-Pesa Details */}
      {paymentMethod === "mpesa" && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 animate-in fade-in duration-300">
          <p className="text-lg font-semibold text-amber-900 mb-4 flex items-center gap-2">
            <span className="text-2xl">📱</span>
            M-Pesa Payment Details
          </p>
          <CustomTextInput
            label="M-Pesa Number"
            placeholder="0740 459 672"
            variableName="mpesaNumber"
            defaultValue="0740 459 672"
          />
          <CustomTextInput
            label="M-Pesa Business Name"
            placeholder="PrimeCoat Painting Services"
            variableName="mpesaName"
            defaultValue="PrimeCoat Painting Services"
          />
          <div className="mt-4 p-3 bg-amber-100 rounded-md">
            <p className="text-xs text-amber-800">
              <strong>Note:</strong> Client will see M-Pesa payment instructions on invoice.
            </p>
          </div>
        </div>
      )}

      {/* Bank Details */}
      {paymentMethod === "bank" && (
        <div className="border-2 border-prime-blue rounded-lg p-6 animate-in fade-in duration-300">
          <p className="text-lg font-semibold text-prime-navy mb-4 flex items-center gap-2">
            <span className="text-2xl">🏦</span>
            Bank Transfer Details
          </p>
          <CustomTextInput
            label="Bank Name"
            placeholder="e.g. Equity Bank, KCB, Co-operative Bank"
            variableName="bankName"
            defaultValue=""
          />
          <CustomTextInput
            label="Account Number"
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
            label="Branch Name"
            placeholder="e.g. Lavington Branch"
            variableName="branchName"
            defaultValue=""
          />
          <CustomTextInput
            label="Swift Code (For International)"
            placeholder="EQBLKENA (optional)"
            variableName="swiftCode"
            defaultValue=""
          />
          <div className="mt-4 p-3 bg-blue-50 rounded-md">
            <p className="text-xs text-prime-navy">
              <strong>Note:</strong> Client will see bank transfer instructions on invoice.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
