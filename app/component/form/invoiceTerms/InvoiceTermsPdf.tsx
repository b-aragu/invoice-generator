import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({
  invoiceNumber,
  issueDate,
  dueDate,
}) => (
  <View style={pdfContainers.invoiceTerms}>
    <View style={{ flex: 1 }}>
      <Text style={{ ...pdfTypography.title, color: "#0A1F44" }}>INVOICE NO</Text>
      <Text style={{ ...pdfTypography.subTitle, color: "#1F4BA8", fontWeight: "bold", fontSize: 16 }}>
        {invoiceNumber}
      </Text>
    </View>
    <View
      style={{
        ...pdfUtils.flexRowBetween,
        paddingRight: 20,
        paddingLeft: 100,
        flex: 1,
      }}
    >
      <View>
        <Text style={{ ...pdfTypography.title, color: "#0A1F44" }}>ISSUED</Text>
        <Text style={{ ...pdfTypography.subTitle, color: "#1F4BA8" }}>
          {issueDate ? format(issueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
      <View>
        <Text style={{ ...pdfTypography.title, color: "#0A1F44" }}>DUE DATE</Text>
        <Text style={{ ...pdfTypography.subTitle, color: "#1F4BA8" }}>
          {dueDate ? format(dueDate, "do MMM yyyy") : ""}
        </Text>
      </View>
    </View>
  </View>
);
