import { ErrorMessage } from 'formik';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { getMembers } from '../Services/membersService';

export function useRequestMembers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
        setIsLoading(true);
        const { error, data } = await getMembers();
        if (error) {
          ErrorMessage()
        } else {
          setData(data);
        }
        setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}