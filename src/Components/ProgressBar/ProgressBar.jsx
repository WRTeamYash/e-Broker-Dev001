import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function ProgressBar({ usedLimit, totalLimit }) {
  // Calculate the percentage of used limit relative to the total limit
  const progress = (usedLimit / totalLimit) * 100;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
 <CircularProgress
        variant="determinate"
        id='progress_bar'
        value={progress}
        color='secondary'      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Typography variant="caption" component="div" color="#000"> */}
          <span className='progress_bar_count'>
          {`${usedLimit} / ${totalLimit}`}
          </span>
        {/* </Typography> */}
      </Box>
    </Box>
  );
}

export default ProgressBar;
