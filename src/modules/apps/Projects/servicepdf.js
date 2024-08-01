import React from 'react';
import { jsPDF } from 'jspdf';
import QRCode from 'qrcode';

export const generatePDF = async () => {
  // Create a new jsPDF instance
  const pdf = new jsPDF('p', 'pt', 'a4');
  const margin = 40;
  const topMargin = 40; // Additional top margin
  const lineHeight = 20;
  const padding = 10; // Padding inside the boxes

  // Add content to the PDF
  pdf.setFontSize(20);
  pdf.text('SERVICE RECEIPT', pdf.internal.pageSize.getWidth() / 2, topMargin + margin, { align: 'center' });

  // Service Details
  pdf.setFontSize(12);
  pdf.text('Service No: 75309', margin + padding, topMargin + 10 + margin + 3 * lineHeight);
  pdf.text('Date: 19/Jun/2024 12:02 pm', margin + 350 + padding, topMargin + 10 + margin + 3 * lineHeight);
  pdf.text('Customer: Mr. SHAMEEM. 0556423528', margin + padding, topMargin + 10 + margin + 4 * lineHeight);
  pdf.text('Address:', margin + padding, topMargin + 10 + margin + 5 * lineHeight);

  // Draw rectangle for the Service Details box
  pdf.setLineWidth(0.5);
  pdf.rect(margin, topMargin + margin + 2.5 * lineHeight, pdf.internal.pageSize.getWidth() - 2 * margin, 70);

  // Device Details
  pdf.text('Device Company: Google', margin + padding, topMargin + 10 + margin + 8 * lineHeight);
  pdf.text('Model: Pixel 6', margin + 300 + padding, topMargin + 10 + margin + 8 * lineHeight);
  pdf.text('Current Status: Dead', margin + padding, topMargin + 10 + margin + 9 * lineHeight);
  pdf.text('Colour: WHITE', margin + 300 + padding, topMargin + 10 + margin + 9 * lineHeight);
  pdf.text('IMEI: N/A', margin + padding, topMargin + 10 + margin + 10 * lineHeight);
  pdf.text('SN:', margin + 300 + padding, topMargin + 10 + margin + 10 * lineHeight);

  // Draw line between IMEI and Due Date
  pdf.line(margin + padding, topMargin + 10 + margin + 10.5 * lineHeight, pdf.internal.pageSize.getWidth() - margin - padding, topMargin + 10 + margin + 10.5 * lineHeight);

  pdf.text('Due Date: 19/Jun/2024', margin + padding, topMargin + 20 + margin + 11 * lineHeight);
  pdf.text('Missing:', margin + padding, topMargin + 20 + margin + 12 * lineHeight);
  pdf.text('Complaints: DISPLAY', margin + padding, topMargin + 20 + margin + 13 * lineHeight);
  pdf.text('Remarks:', margin + padding, topMargin + 20 + margin + 14 * lineHeight);

  // Draw rectangle for the Device Details box
  pdf.setLineWidth(0.5);
  pdf.rect(margin, topMargin + margin + 7.5 * lineHeight, pdf.internal.pageSize.getWidth() - 2 * margin, 160);

  // Amount Details
  pdf.text('Estimate Amount: 0.00', margin + padding, topMargin + margin + 17 * lineHeight);
  pdf.text('Advance Amount: 0.00', margin + 300 + padding, topMargin + margin + 17 * lineHeight);

  // Draw rectangle for the Amount Details box
  pdf.setLineWidth(0.5);
  pdf.rect(margin, topMargin + margin + 15.5 * lineHeight, pdf.internal.pageSize.getWidth() - 2 * margin, 40);

  // Generate QR code
  const qrCodeData = await QRCode.toDataURL('Service No: 75309');

  // Footer
  pdf.addImage(qrCodeData, 'PNG', margin, topMargin - 30 + margin + 21 * lineHeight, 100, 100);

  pdf.text('Entered By: admin', margin + padding, topMargin - 20 + margin + 20 * lineHeight);

  // Save the PDF
  pdf.save('service-receipt.pdf');
};

export default generatePDF;
