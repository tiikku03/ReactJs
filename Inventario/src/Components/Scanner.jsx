import React from "react";
import useScannerFromVideoDevice from "../Hooks/useScannerFromVideoDevice.js";

function Scanner() {

  const { result, error, videoRef, startScanning, stopScanning } = useScannerFromVideoDevice();


  return (
    <div className="flex flex-col items-center gap-4">
      <video ref={videoRef} className="w-4/5 h-auto rounded-[1rem]" />
      <button onClick={startScanning} className="bg-green-400 h-10 w-50 rounded-[1rem] active:bg-green-500">Comenzar el escaneo</button>
      <button onClick={stopScanning} className="bg-red-400 h-10 w-50 rounded-[1rem] active:bg-red-500">Detener</button>
      <p>{error? error : ''}</p>
      <p>{result}</p>
    </div>
  );
}

export default Scanner;
