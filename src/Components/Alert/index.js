import Swal from 'sweetalert2';
import { ALERT_OUT_TIMER } from '../../Helpers/constants';
import { ALERT_ICON_ERROR, ALERT_ICON_SUCCESS } from '../../Helpers/messagesText';

const SuccessAlert = (title, message) =>
  Swal.fire({
    icon: ALERT_ICON_SUCCESS,
    title: title,
    text: message,
    timer: ALERT_OUT_TIMER,
  });

const ErrorAlert = (title, message) =>
  Swal.fire({
    icon: ALERT_ICON_ERROR,
    title: title,
    text: message,
    timer: ALERT_OUT_TIMER,
  });

const ConfirmAlert = (title, message) => {
  return Swal.fire({
    title: title,
    icon: 'warning',
    text: message,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  });
};
export { SuccessAlert, ErrorAlert, ConfirmAlert };
