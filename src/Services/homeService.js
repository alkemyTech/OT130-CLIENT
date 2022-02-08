import { Get } from "./publicApiService";

const getSlideData = async () => await Get("/slides");
  
export{
    getSlideData
}
