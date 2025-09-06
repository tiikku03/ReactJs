import { useState, useEffect, useRef } from "react";
import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";

function useScannerFromVideoDevice() {
  const [result, setResult] = useState(null);
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [cameraId, setCameraId] = useState(null);
  const readerRef = useRef(null); 

  useEffect(() => {
    async function getCameraId() {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(
          (device) => device.kind === "videoinput"
        );

        if (cameras.length > 0) {
          setCameraId(cameras[0].deviceId);
        }
      } catch (error) {
        setError("Error al acceder a la cámara o obtener el ID.");
        console.error(error);
      }
    }
    getCameraId();
  }, []);

  useEffect(() => {
    if (cameraId && videoRef.current) {
      startScanning();
    }
    return () => {
      stopScanning();
    };
  }, [cameraId]);

  function scanner(){
    if(readerRef.current) return;
    //para hacer que el video siga corriendo luego de haber escaneado el codigo
  }
  scanner()

  function startScanning() {
    // Si ya existe una instancia del lector, no crear otra
    if (readerRef.current) return;
    
    const codeReader = new BrowserMultiFormatReader();
    readerRef.current = codeReader; // Guardar la instancia en la referencia

    codeReader.decodeFromVideoDevice(cameraId, videoRef.current, (res, err) => {
      if (res) {
        setResult(res.getText());
        console.log("Resultado del escaneo:", res.getText());
        stopScanning(); 
      }
      if (err && !(err instanceof NotFoundException)) {
        setError("Error durante el escaneo");
        console.error("Error al decodificar:", err);
      }
    });
  }

  function stopScanning() {
    if (readerRef.current) {
      readerRef.current.reset(); // Método para detener la decodificación y el video
      readerRef.current = null; // Limpiar la referencia
    }
  }

  return { result, error, videoRef, startScanning, stopScanning };

}

export default useScannerFromVideoDevice;