import Swal from 'sweetalert2';
import { ALERT_OUT_TIMER } from '../../Helpers/constants';
import {
  ALERT_ICON_ERROR,
  ALERT_ICON_SUCCESS,
  ALERT_ICON_WARNING,
} from '../../Helpers/messagesText';

const InfoAlert = (message) => Swal.fire(message);

const ConfirmAlert = async (
  preConfirm,
  title = "",
  text = "",
  confirmButtonText = "Si"
) => {
  const result = await Swal.fire({
    title,
    text,
    icon: ALERT_ICON_WARNING,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    showLoaderOnConfirm: true,
    confirmButtonText,
    preConfirm,
  });
  return result;
};

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

export {
  InfoAlert,
  ConfirmAlert,
  SuccessAlert,
  ErrorAlert,
};
