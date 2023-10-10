import React from 'react';
import { Progress } from 'antd';

function ProgressBar({ usedLimit, totalLimit }) {
  // Calculate the percentage of used limit relative to the total limit
  const progress = (usedLimit / totalLimit) * 100;

  return (
    <div style={{ position: 'relative', display: 'inline-flex' }}>
      <Progress
      id="progress_bar"
        type="circle"
        percent={progress}
        format={() => null} // Remove the percentage display
        // width={60} // Adjust the width as needed
        strokeWidth={10} // Adjust the stroke width as needed
        strokeColor={{
          '0%': '#087c7c',
          '100%': '#087c7c',
        }}
      />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      >
        <span className='progress_bar_count'>
          {`${usedLimit} / ${totalLimit}`}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
