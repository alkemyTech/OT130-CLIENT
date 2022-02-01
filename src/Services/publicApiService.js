import axios from 'axios';

const config = {
  headers: {
    Group: 130, //Aqui va el ID del equipo!!
  },
};

const Get = async (route, id) => {
  const url = route + `${id ? "/" + String(id) : null}`;
  return await axios.get(url, config);
};

export default { Get };
