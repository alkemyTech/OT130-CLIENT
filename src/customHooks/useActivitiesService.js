import { useEffect, useState } from 'react';
import { getActivities } from '../Services/activitiesService';

export function useActivitiesService() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const { error, data } = await getActivities();
        if (error) {
          console.error(error);
       } else {
          setData(data);
       }
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return [data, isLoading];
}
