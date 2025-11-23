import { format } from "date-fns";
import { ChevronDown } from "lucide-react";

export const InvoiceTermsPreview: React.FC<
  InvoiceTerms & { onClick?: (step: string) => void }
> = ({ invoiceNumber, issueDate, dueDate, onClick }) => (
  <div
    className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed group cursor-pointer relative bg-gradient-to-r from-blue-50 to-white"
    onClick={() => onClick && onClick("5")}
  >
    {!!onClick && (
      <>
        <ChevronDown className="animate-pulse w-5 h-5 text-prime-blue rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-prime-blue -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-prime-blue rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-prime-blue -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
      </>
    )}
    <div>
      <p className="text-[11px] text-prime-navy font-bold uppercase">
        INVOICE NO
      </p>
      <p className="font-bold text-sm text-prime-blue">{invoiceNumber}</p>
    </div>
    <div className="flex items-center justify-between pl-10">
      <div>
        <p className="text-[11px] text-prime-navy font-bold uppercase">
          ISSUED
        </p>
        <p className="font-semibold text-xs text-prime-blue">
          {issueDate ? format(issueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
      <div>
        <p className="text-[11px] text-prime-navy font-bold uppercase text-right">
          DUE DATE
        </p>
        <p className="font-semibold text-xs text-prime-blue">
          {dueDate ? format(dueDate, "do MMM yyyy'") : ""}
        </p>
      </div>
    </div>
  </div>
);
