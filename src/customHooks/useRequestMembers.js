import { useEffect, useState } from 'react';
import { getMembers } from '../Services/membersService';
import { ErrorAlert } from '../Components/Alert';


export function useRequestMembers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
        setIsLoading(true);
        const { error, data } = await getMembers();
        if (error) {
          ErrorAlert("error")
        } else {
          setData(data);
        }
        setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}