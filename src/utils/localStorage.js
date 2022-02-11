export function saveToLocalStorage(object) {
    const datosJson = JSON.stringify(object.value);
    localStorage.setItem(object.key, datosJson);
  }
  export function readFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    const data = JSON.parse(json);
    return data;
  }
  