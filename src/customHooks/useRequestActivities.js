import { useEffect, useState } from 'react';
import { getActivities } from '../Services/activitiesService';

export function useRequestActivities() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { error, data } = await getActivities();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}
