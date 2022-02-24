import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Spinner } from '../Spinner/Spinner';
import ControlPanel from './ControlPanel';
import { WORKER_SRC } from './PDFConfig';
import { PDF_TERMS_AND_CONDITIONS } from '../../rutas/config';

const PDFReader = () => {
  const [scale, setScale] = useState(0.36);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div className='d-flex'>
      {isLoading && <Spinner/>}
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={PDF_TERMS_AND_CONDITIONS}
        />
        <Document
          file={PDF_TERMS_AND_CONDITIONS}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height={1400} pageNumber={pageNumber} scale={scale}/>
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
