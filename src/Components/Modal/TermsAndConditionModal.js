import React from "react";
import Popup from "reactjs-popup";
import './index.css';
import 'reactjs-popup/dist/index.css';

import { useDispatch } from "react-redux";
import PDFReader from "../RenderPdf/PDFReader";



const CustomModal = () => {
  const dispatch = useDispatch();

  return(

  <Popup
    trigger={ 
      <button 
        className="button"> Leer terminos y condiciones
      </button>
    }
    modal
  >
    {close => (
      <div className="cModal">
        <button className="close" type="button" onClick={close}>
         x
        </button>
        <div className="actions">
        <button
            className="button"
            type="button"
            onClick={() => {
              dispatch({ type: "checkTerms", payload: true });
              close();
            }}
          >
            Aceptar
          </button>
          <button
            className="button"
            type="button"
            onClick={() => {
              dispatch({ type: "checkTerms", payload: false });
              close();
            }}
          >
            Cancelar
          </button>
        </div>
        <div className="content">
        <PDFReader/>      
        </div>

      </div>
    )}
  </Popup>
  )
};

export default CustomModal;
