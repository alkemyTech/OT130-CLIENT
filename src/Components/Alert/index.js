import Swal from 'sweetalert2';
import { ALERT_OUT_TIMER } from '../../Helpers/constants';

export const Alert = (title, message, icon) =>
  Swal.fire({
    icon: 'error',
    title: title,
    text: message,
    timer: ALERT_OUT_TIMER,
  });
