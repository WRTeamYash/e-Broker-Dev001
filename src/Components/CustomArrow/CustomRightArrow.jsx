import React from 'react';

const CustomRightArrow = ({ onClick, pathData }) => {
  return (
    <button onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path d={pathData} fill="#fff" />
      </svg>
    </button>
  );
};

export default CustomRightArrow;
