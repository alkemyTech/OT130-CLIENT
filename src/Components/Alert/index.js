import Swal from 'sweetalert2';
import { ALERT_OUT_TIMER } from '../../Helpers/constants';

export const Alert = (title, message, error = false) => {
  error
    ? Swal.fire({
        icon: 'error',
        title: title,
        text: message,
        timer: ALERT_OUT_TIMER,
      })
    : Swal.fire({
        icon: 'success',
        title: title,
        text: message,
        timer: ALERT_OUT_TIMER,
      });
};
