import { useState, useEffect } from 'react';


const useDataFromLocalStorage = (key) => {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  return [data, setData];
};

export default useDataFromLocalStorage;