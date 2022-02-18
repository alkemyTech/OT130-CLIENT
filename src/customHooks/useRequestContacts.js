import { useEffect, useState } from 'react';
import { ErrorAlert } from '../Components/Alert';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../Helpers/messagesText';
import { getContact, getContactById } from '../Services/contactsService';

export function useRequestContactsList() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
        setIsLoading(true);
        const { error, data } = await getContact();
        if (error) {
          ErrorAlert(UNKNOWN_ERROR, NETWORK_ERROR)
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
          const { error, data } = await getContactById();
          if (error) {
            ErrorAlert(UNKNOWN_ERROR, NETWORK_ERROR)
          } else {
            setData(data);
          }
          setIsLoading(false);
      })();
    }, []);
  
    return [data, isLoading];
  }

