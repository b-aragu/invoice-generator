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
      <p className="text-prime-blue text-sm mb-3">{yourEmail}</p>
    ) : (
      <div className="rounded-md bg-blue-100 h-4 w-4/6 animate-pulse my-2" />
    )}
    <div className="text-xs text-neutral-600 leading-relaxed">
      {yourAddress ? (
        <p>{yourAddress}</p>
      ) : (
        <div className="rounded-md bg-blue-100 h-4 w-3/6 animate-pulse my-2" />
      )}
      {(yourCity || yourCountry) && (
        <p className="mb-1">
          {yourCity}{yourCity && yourCountry ? ', ' : ''}{yourCountry}
        </p>
      )}
      {!yourAddress && !yourCity && !yourCountry && (
        <div className="rounded-md bg-blue-100 h-4 w-4/6 animate-pulse my-3" />
      )}
      {yourTaxId && <p className="text-[10px] text-neutral-500 mt-2">KRA PIN: {yourTaxId}</p>}
    </div>
  </div>
);
