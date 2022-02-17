import { useEffect, useState } from 'react';
import { ErrorAlert } from '../Components/Alert';
import { UNKNOWN_ERROR, NETWORK_ERROR } from '../Helpers/messagesText';
import { getActivities } from '../Services/activitiesService';

export function useRequestActivities() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { error, data } = await getActivities();
      if (data?.success) {
        setData(data.data);
      } else {
        ErrorAlert(error?.message === 'Network Error' ? NETWORK_ERROR : UNKNOWN_ERROR);
      }
      setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}
