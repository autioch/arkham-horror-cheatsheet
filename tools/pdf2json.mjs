import fs from "node:fs";
import PDFParser from "pdf2json";

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log('writing....');
    fs.writeFile("./result.json", JSON.stringify(pdfData), () => console.log('wrote...'));
});

pdfParser.loadPDF("../AH_instrukcja.pdf");