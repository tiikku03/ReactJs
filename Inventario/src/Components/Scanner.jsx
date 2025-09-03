import React from 'react'
import useScannerFromVideoDevice from '../Hooks/useScannerFromVideoDevice.js'
function Scanner() {
  const { result, videoRef } = useScannerFromVideoDevice();

  return (
    <div>
      <video ref={videoRef} className='w-4/5 h-auto rounded-[1rem]'/>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default Scanner