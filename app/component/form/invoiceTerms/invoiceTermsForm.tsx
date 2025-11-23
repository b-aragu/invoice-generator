"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";

export const InvoiceTermsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3 font-heading text-prime-navy">Invoice Terms</p>
    <CustomTextInput
      label="Invoice number"
      placeholder="PC-INV-001"
      variableName="invoiceNo"
      defaultValue="PC-INV-001"
    />
    <DateInput label="Issue date" variableName="issueDate" />
    <DateInput label="Due date" variableName="dueDate" />
    <CustomTextInput
      label="Payment Terms"
      placeholder="50% deposit, 30% midpoint, 20% completion"
      variableName="paymentTerms"
      defaultValue="50% deposit upon signing, 30% at midpoint, 20% upon completion"
    />
    <CustomTextInput
      label="Additional Notes"
      placeholder="All work includes materials and labor. 12-month warranty."
      variableName="additionalNotes"
      defaultValue="All work includes premium materials and skilled labor. 12-month warranty on workmanship."
    />
  </div>
);
