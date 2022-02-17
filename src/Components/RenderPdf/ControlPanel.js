import React from 'react';


const ControlPanel = (props) => {
  const { pageNumber, numPages, setPageNumber } = props;

  const onPageChange = (e) => {
    const { value } = e.target;
    setPageNumber(Number(value));
  };

  return (
    <div>
      <div >
        <span>
          Page{' '}
          <input
            name="pageNumber"
            type="number"
            min={1}
            max={numPages || 1}
            value={pageNumber}
            onChange={onPageChange}
          />{' '}
          of {numPages}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
