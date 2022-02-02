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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error en la aplicación.',
            confirmButtonColor: '#0e7fe1'
          }) 
        } else {
          setData(data);
        }
        setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}