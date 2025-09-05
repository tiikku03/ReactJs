import React from "react";
import useScannerFromVideoDevice from "../Hooks/useScannerFromVideoDevice.js";

function Scanner() {

  const { result, videoRef, error } = useScannerFromVideoDevice();

  const startScanner = () => {
    console.log(`Result: ${result}`);
    console.log(error);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} className="w-4/5 h-auto rounded-[1rem]" />
      {result && <p>Result: {result}</p>}
      <button onClick={startScanner}>Start Scanner</button>
    </div>
  );
}

export default Scanner;
