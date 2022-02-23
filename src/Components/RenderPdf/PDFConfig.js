import { pdfjs } from 'react-pdf';
const PDFConfig = pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export { PDFConfig };