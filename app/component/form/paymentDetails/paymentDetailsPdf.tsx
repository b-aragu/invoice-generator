/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Image, Text, View } from "@react-pdf/renderer";
import { currencyList } from "@/lib/currency";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

interface PaymentDetailsPdfProps extends PaymentDetails {
  countryImageUrl: string;
}

export const PaymentDetailsPdf: React.FC<PaymentDetailsPdfProps> = ({
  paymentMethod = "mpesa",
  mpesaNumber,
  mpesaName,
  bankName,
  accountNumber,
  accountName,
  branchName,
  routingCode,
  swiftCode,
  ifscCode,
  currency = "KES",
  countryImageUrl,
}) => {
  const currencyDetails = currencyList.find(
    (currencyDetail) =>
      currencyDetail.value.toLowerCase() === currency.toLowerCase()
  )?.details;

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Payment Details - Only show selected method */}
      <View
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingRight: 12,
          paddingVertical: 16,
          flexDirection: "column",
        }}
      >
        {paymentMethod === "mpesa" ? (
          <>
            <Text style={{ paddingBottom: 12, ...pdfTypography.title, color: "#D97706" }}>
              📱 M-Pesa Payment
            </Text>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <View style={pdfUtils.flexRowItemCenter}>
                <Text style={pdfTypography.paymentTitle}>M-Pesa Number</Text>
                <Text
                  style={{
                    flex: 1,
                    ...pdfTypography.itemDescription,
                    paddingLeft: 20,
                  }}
                >
                  {mpesaNumber || "-"}
                </Text>
              </View>
              <View style={pdfUtils.flexRowItemCenter}>
                <Text style={pdfTypography.paymentTitle}>Business Name</Text>
                <Text
                  style={{
                    flex: 1,
                    ...pdfTypography.itemDescription,
                    paddingLeft: 20,
                  }}
                >
                  {mpesaName || "-"}
                </Text>
              </View>
              <View style={{ paddingTop: 12, paddingHorizontal: 12, backgroundColor: "#FEF3C7", borderRadius: 4, padding: 8 }}>
                <Text style={{ fontSize: 10, color: "#92400E" }}>
                  To pay via M-Pesa:
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E", paddingTop: 4 }}>
                  1. Go to M-Pesa menu
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E" }}>
                  2. Select 'Lipa Na M-Pesa'
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E" }}>
                  3. Select 'Pay Bill' or 'Buy Goods'
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E" }}>
                  4. Enter number: {mpesaNumber}
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E" }}>
                  5. Enter invoice amount
                </Text>
                <Text style={{ fontSize: 9, color: "#92400E" }}>
                  6. Enter your M-Pesa PIN
                </Text>
              </View>
            </View>
          </>
        ) : (
          <>
            <Text style={{ paddingBottom: 12, ...pdfTypography.title, color: "#0A1F44" }}>
              🏦 Bank Transfer
            </Text>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <View style={pdfUtils.flexRowItemCenter}>
                <Text style={pdfTypography.paymentTitle}>Bank Name</Text>
                <Text
                  style={{
                    flex: 1,
                    ...pdfTypography.itemDescription,
                    paddingLeft: 44.5,
                  }}
                >
                  {bankName || "-"}
                </Text>
              </View>
              <View style={pdfUtils.flexRowItemCenter}>
                <Text style={pdfTypography.paymentTitle}>Account Number</Text>
                <Text
                  style={{
                    flex: 1,
                    ...pdfTypography.itemDescription,
                    paddingLeft: 14,
                  }}
                >
                  {accountNumber || "-"}
                </Text>
              </View>
              <View style={pdfUtils.flexRowItemCenter}>
                <Text style={pdfTypography.paymentTitle}>Account Name</Text>
                <Text
                  style={{
                    flex: 1,
                    ...pdfTypography.itemDescription,
                    paddingLeft: 26,
                  }}
                >
                  {accountName || "-"}
                </Text>
              </View>
              {branchName && (
                <View style={pdfUtils.flexRowItemCenter}>
                  <Text style={pdfTypography.paymentTitle}>Branch</Text>
                  <Text
                    style={{
                      flex: 1,
                      ...pdfTypography.itemDescription,
                      paddingLeft: 68,
                    }}
                  >
                    {branchName}
                  </Text>
                </View>
              )}
              {swiftCode && (
                <View style={pdfUtils.flexRowItemCenter}>
                  <Text style={pdfTypography.paymentTitle}>Swift Code</Text>
                  <Text
                    style={{
                      flex: 1,
                      ...pdfTypography.itemDescription,
                      paddingLeft: 45,
                    }}
                  >
                    {swiftCode}
                  </Text>
                </View>
              )}
            </View>
          </>
        )}
      </View>

      {/* Currency Display */}
      <View
        style={{
          flex: 1,
          paddingLeft: 40,
          paddingRight: 40,
          paddingVertical: 16,
          flexDirection: "column",
        }}
      >
        <Text style={{ ...pdfTypography.title, paddingBottom: 12 }}>
          💰 Payable in
        </Text>
        {currencyDetails && (
          <View style={{ ...pdfUtils.flexRowItemCenter, gap: 8 }}>
            <Image
              src={countryImageUrl}
              style={{
                width: 30,
                height: 30,
                flexShrink: 0,
                borderRadius: "100%",
                objectFit: "cover",
              }}
            />
            <View>
              <Text style={{ fontSize: 14, fontWeight: "medium" }}>
                {currencyDetails.currencyName}
              </Text>
              <Text style={{ ...pdfTypography.title, color: "#0A1F44" }}>
                {currencyDetails.currencySymbol}{" "}
                {currencyDetails.currencyShortForm}
              </Text>
            </View>
          </View>
        )}
        <View style={{ paddingTop: 16, paddingHorizontal: 12, backgroundColor: "#EFF6FF", borderRadius: 4, padding: 8, marginTop: 12 }}>
          <Text style={{ fontSize: 10, color: "#1E40AF", fontWeight: "bold" }}>
            🇰🇪 Kenya Payment Notice
          </Text>
          <Text style={{ fontSize: 9, color: "#1E40AF", paddingTop: 4 }}>
            All amounts in Kenyan Shillings (KES)
          </Text>
          <Text style={{ fontSize: 9, color: "#1E40AF", paddingTop: 2 }}>
            Payment expected as per terms
          </Text>
        </View>
      </View>
    </View>
  );
};
