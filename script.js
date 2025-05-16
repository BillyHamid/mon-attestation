import { PDFDocument, rgb, StandardFonts } from 'https://cdn.skypack.dev/pdf-lib';

async function generatePDF(name) {
    const existingPdfBytes = await fetch('1.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontSize = 36;
    const { width } = firstPage.getSize();

    firstPage.drawText(name, {
        x: width / 2 - font.widthOfTextAtSize(name, fontSize) / 2,
        y: 370,
        size: fontSize,
        font: font,
        color: rgb(0, 0, 0)
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `attestation-${name}.pdf`;
    link.click();
}

document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
        await generatePDF(name);
    }
});
