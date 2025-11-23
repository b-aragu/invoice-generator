/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Image, Text, View, pdf } from "@react-pdf/renderer";
import { pdfContainers, pdfTypography } from "@/lib/pdfStyles";

export const YourDetailsPDF: React.FC<YourDetails> = ({
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
  <View style={pdfContainers.YourDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14, color: "#0A1F44" }}>FROM</Text>

    <View style={pdfContainers.imageContainer}>
      {yourLogo && (
        <Image style={{ height: 45, borderRadius: 8 }} src={yourLogo} />
      )}
    </View>
    {yourName && (
      <Text style={{ ...pdfTypography.text2xl, color: "#0A1F44", fontWeight: "bold" }}>
        {yourName}
      </Text>
    )}
    {yourEmail && (
      <Text style={{ ...pdfTypography.description, marginBottom: 8, color: "#1F4BA8" }}>
        📧 {yourEmail}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {yourAddress && (
        <Text style={{ marginBottom: 2 }}>
          📍 {yourAddress}
        </Text>
      )}
      {(yourCity || yourState || yourZip) && (
        <Text style={{ marginBottom: 2 }}>
          {yourCity}, {yourState} {yourZip}
        </Text>
      )}
      {yourCountry && (
        <Text style={{ marginBottom: 4, fontWeight: "bold" }}>
          🇰🇪 {yourCountry}
        </Text>
      )}
      {yourTaxId && (
        <Text style={{ fontSize: 9, color: "#666" }}>
          KRA PIN: {yourTaxId}
        </Text>
      )}
    </View>
  </View>
);
