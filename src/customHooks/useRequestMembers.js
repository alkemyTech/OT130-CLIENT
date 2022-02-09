import { useEffect, useState } from 'react';
import { getMembers } from '../Services/membersService';
import { ErrorAlert } from '../Components/Alert';
import { ALERT_ERROR_API } from '../Helpers/messagesText';

export function useRequestMembers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const { error, data } = await getMembers();
      setData(data);
      setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}