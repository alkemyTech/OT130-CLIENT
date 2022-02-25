import React from 'react';

const ControlPanel = (props) => {
  const { currentPage, numPages, setCurrentPage } = props;

  const onPageChange = (e) => {
    const { value } = e.target;
    setCurrentPage(Number(value));
  };

  return (
    <div>
      <div >
        <span>
          Page{' '}
          <input
            name="currentPage"
            type="number"
            min={1}
            max={numPages || 1}
            value={currentPage}
            onChange={onPageChange}
          />{' '}
          of {numPages}
        </span>
      </div>
    </div>
  );
};

export default ControlPanel;
