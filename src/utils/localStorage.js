/**Esta funcion recibe un objeto con las propiedades {key, value} */
export function saveToLocalStorage(object) {
    const datosJson = JSON.stringify(object.value); // Convertir datos al formato JSON.
    localStorage.setItem(object.key, datosJson); // Guardar en localStorage.
  }
  // esta funcion solo recibe la clave de lo que queire leer de local storage
  export function readFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    const data = JSON.parse(json);
    return data;
  }
  