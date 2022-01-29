import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_URL } from '../config/api';

export function useActivitiesService() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/activities`);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Hubo un error en la conexión al servidor ');
      }
    })();
  }, []);

  return [data, isLoading];
}