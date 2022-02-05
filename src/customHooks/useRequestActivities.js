import { useEffect, useState } from 'react';
import { ErrorAlert } from '../Components/Alert';
import { UNKNOWN_ERROR } from '../Helpers/messagesText';
import { getActivities } from '../Services/activitiesService';

export function useRequestActivities() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
        setIsLoading(true);
        const { error, data } = await getActivities();
        if (error) {
          ErrorAlert(UNKNOWN_ERROR)
        } else {
          setData(data);
        }
        setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}
