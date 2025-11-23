/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export const CompanyDetailsPreview: React.FC<CompanyDetails> = ({
  email,
  companyName,
  companyAddress,
  companyCity,
  companyState,
  companyCountry,
  companyLogo,
  companyTaxId,
  companyZip,
}) => (
  <div>
    <p className="text-[11px] text-prime-navy font-bold uppercase pb-3.5">
      BILL TO
    </p>
    <div className="h-10 mb-3">
      {companyLogo ? (
        <img src={companyLogo} alt="Company Logo" className="h-10 rounded-md" />
      ) : (
        <div className="rounded-full bg-neutral-100 h-10 w-10 animate-pulse" />
      )}
    </div>
    {companyName ? (
      <p className="text-2xl font-bold text-prime-navy">{companyName}</p>
    ) : (
      <div className="rounded-md bg-neutral-200 h-5 w-5/6 animate-pulse mb-4" />
    )}
    {email ? (
      <p className="text-neutral-600 text-sm mb-3">{email}</p>
    ) : (
      <div className="rounded-md bg-neutral-200 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-600 leading-relaxed">
      {companyAddress ? (
        <p>{companyAddress}</p>
      ) : (
        <div className="rounded-md bg-neutral-200 h-4 w-3/6 animate-pulse my-2" />
      )}
      {(companyCity || companyCountry) && (
        <p className="mb-1">
          {companyCity}{companyCity && companyCountry ? ', ' : ''}{companyCountry}
        </p>
      )}
      {!companyAddress && !companyCity && !companyCountry && (
        <div className="rounded-md bg-neutral-200 h-4 w-4/6 animate-pulse my-3" />
      )}
      {companyTaxId && <p className="text-[10px] text-neutral-500 mt-2">Tax ID: {companyTaxId}</p>}
    </div>
  </div>
);
