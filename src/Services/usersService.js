import { Post, Patch } from "./privateApiService";
import {
  NETWORK_ERROR,
  UNKNOWN_ERROR,
  EMAIL_TAKEN,
} from "../Helpers/messagesText";

const handleUserErrors = (error, setMessage) => {
  if (error.message === "Network Error") {
    setMessage(NETWORK_ERROR);
  } else if (error.response.data.errors.email) {
    setMessage(EMAIL_TAKEN);
  } else {
    setMessage(UNKNOWN_ERROR);
  }
};

const postUser = async (data, setMessage) => {
  try {
    return await Post("/users", data);
  } catch (error) {
    handleUserErrors(error, setMessage);
  }
};

const updateUser = async (data, user, setMessage) => {
  try {
    return await Patch(`/users/${user.id}`, data);
  } catch (error) {
    handleUserErrors(error, setMessage);
  }
};

export { postUser, updateUser };
