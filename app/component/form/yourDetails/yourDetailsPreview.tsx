/* eslint-disable @next/next/no-img-element */
import React from "react";

export const YourDetailsPreview: React.FC<YourDetails> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourLogo,
  yourTaxId,
  yourZip,
}) => (
  <div>
    <p className="text-[11px] text-prime-navy font-bold uppercase pb-3.5">
      FROM
    </p>
    <div className="h-10 mb-3">
      {yourLogo ? (
        <img src={yourLogo} alt="PrimeCoat Logo" className="h-11 rounded-lg border-2 border-prime-blue/20" />
      ) : (
        <div className="rounded-lg bg-blue-100 h-11 w-11 animate-pulse" />
      )}
    </div>
    {yourName ? (
      <p className="text-2xl font-bold text-prime-navy">{yourName}</p>
    ) : (
      <div className="rounded-md bg-blue-100 h-5 w-5/6 animate-pulse mb-4" />
    )}
    {yourEmail ? (
      <p className="text-prime-blue text-sm mb-3 flex items-center gap-1">
        <span>📧</span> {yourEmail}
      </p>
    ) : (
      <div className="rounded-md bg-blue-100 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-600">
      {yourAddress ? (
        <p className="flex items-start gap-1">
          <span>📍</span> <span>{yourAddress}</span>
        </p>
      ) : (
        <div className="rounded-md bg-blue-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {yourAddress || yourState || yourZip ? (
        <p className="mb-0.5 ml-4">
          {yourCity}, {yourState} {yourZip}
        </p>
      ) : (
        <div className="rounded-md bg-blue-100 h-4 w-4/6 animate-pulse my-3" />
      )}
      {yourCountry ? (
        <p className="mb-1 font-semibold flex items-center gap-1">
          <span>🇰🇪</span> {yourCountry}
        </p>
      ) : (
        <div className="rounded-md bg-blue-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {yourTaxId && <p className="text-[10px] text-neutral-500">KRA PIN: {yourTaxId}</p>}
    </div>
  </div>
);
