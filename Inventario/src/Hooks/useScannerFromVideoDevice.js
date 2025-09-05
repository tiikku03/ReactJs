import { useState, useEffect, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';
import { NotFoundException } from '@zxing/library';
function useScannerFromVideoDevice() {
  const [result, setResult] = useState(null);
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');

  // 1. Efecto para pedir permisos y obtener la lista de dispositivos
  useEffect(() => {
    const getDevices = async () => {
      try {
        // Pide permiso para la cámara
        await navigator.mediaDevices.getUserMedia({ video: true });
        
        // Una vez con permiso, obtén la lista de dispositivos
        const devices = await BrowserMultiFormatReader().listVideoInputDevices();
        
        setVideoDevices(devices);
        if (devices.length > 0) {
          setSelectedDevice(devices[0].deviceId); // Selecciona el primer dispositivo por defecto
        }
      } catch (err) {
        setError('No se pudo acceder a la cámara. Por favor, otorga los permisos necesarios.');
        console.error(err);
      }
    };

    getDevices();
  }, []);

  // 2. Efecto para iniciar el escaneo cuando hay un dispositivo seleccionado
  useEffect(() => {
    if (!selectedDevice || !videoRef.current) {
      return;
    }

    const codeReader = new BrowserMultiFormatReader();
    
    // Inicia el escaneo desde el dispositivo seleccionado
    codeReader.decodeFromVideoDevice(selectedDevice, videoRef.current, (scanResult, err) => {
      if (scanResult) {
        setResult(scanResult.getText());
        // Detiene el escaneo una vez que se encuentra un resultado
        codeReader.reset(); 
      } else if (err && !(err instanceof NotFoundException)) {
        setError('Ocurrió un error durante el escaneo.');
        console.error(err);
      }
    });

    // Función de limpieza para detener el lector cuando el componente se desmonte
    return () => {
      codeReader.reset();
    };
  }, [selectedDevice]); // Se ejecuta cada vez que cambia el dispositivo seleccionado

  return { result, error, videoRef, videoDevices, setSelectedDevice };
}

export default useScannerFromVideoDevice;