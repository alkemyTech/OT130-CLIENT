import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Spinner } from '../Spinner/Spinner';
import ControlPanel from './ControlPanel';
import {PDF_TERMS_AND_CONDITIONS } from '../../staticFiles/pdfs';
import { WORKER_SRC } from './PDFConfig';

const PDFReader = () => {
  const [scale, setScale] = useState(0.36);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          file={PDF_TERMS_AND_CONDITIONS}
        />
        <Document
          file={PDF_TERMS_AND_CONDITIONS}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height={1400} pageNumber={currentPage} scale={scale}/>
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
