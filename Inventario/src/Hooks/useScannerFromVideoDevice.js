import { useState, useEffect, useRef } from 'react';
import { BrowserQRCodeReader } from '@zxing/browser';

function useScannerFromVideoDevice() {
  const [result, setResult] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const codeReader = new BrowserQRCodeReader();

    codeReader.decodeFromVideoDevice(null, videoRef.current, (res, err) => {
      if (res) {
        setResult(res.getText ? res.getText() : res);
      }
    });
    
  }, []);

  return { result, videoRef };
}

export default useScannerFromVideoDevice;