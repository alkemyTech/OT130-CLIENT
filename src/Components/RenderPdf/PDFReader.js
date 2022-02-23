import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { PDFConfig } from './PDFConfig';
import Loader from './Loader';
import ControlPanel from './ControlPanel';

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
      <Loader isLoading={isLoading} />
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
          file="/assets/docs/test.pdf"
        />
        <Document
          file="/assets/docs/test.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height={1400} pageNumber={pageNumber} scale={scale}/>
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
