import Swal from 'sweetalert2';
import { ALERT_OUT_TIMER } from '../../Helpers/constants';
import { ALERT_ICON_ERROR, ALERT_ICON_SUCCESS, ALERT_ICON_WARNING } from '../../Helpers/messagesText';

const InfoAlert = (message) => 
  Swal.fire(
    message
  );

const ConfirmAlert = (action, confirm_message) =>
  Swal.fire({
    title: '¿ Esta seguro ?',
    text: '¡No podrás revertir esto!',
    icon: ALERT_ICON_WARNING,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: `Si, ${action}!`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        confirm_message,
        '',
        ALERT_ICON_SUCCESS,
      );
    }
  });

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

export { InfoAlert, ConfirmAlert, SuccessAlert, ErrorAlert };
