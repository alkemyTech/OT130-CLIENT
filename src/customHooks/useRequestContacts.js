import { useEffect, useState } from 'react';
import { ErrorAlert } from '../Components/Alert';
import { UNKNOWN_ERROR } from '../Helpers/messagesText';
import { getContactDataById, getContactsList } from '../Services/contactService';

export function useRequestContactsList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
        setIsLoading(true);
        const { error, data } = await getContactsList();
        if (error) {
          ErrorAlert(UNKNOWN_ERROR)
        } else {
          setData(data.data);
        }
        setIsLoading(false);
    })();
  }, []);

  return [data, isLoading];
}

export function useRequestContactById() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async function () {
          setIsLoading(true);
          const { error, data } = await getContactDataById();
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

  