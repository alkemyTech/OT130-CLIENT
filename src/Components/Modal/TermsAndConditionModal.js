import React from "react";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import PDFReader from "../RenderPdf/PDFReader";
import 'reactjs-popup/dist/index.css';
import './index.css';

const TermsAndConditionModal = () => {
  const dispatch = useDispatch();
  return(
    <Popup 
    className="popup-content"
      trigger={ 
        <button  className="button" type="button"> 
          Leer terminos y condiciones
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
                dispatch({ type: "termsAndConditions/checkTerms", payload: true });
                close();
              }}
            >
              Aceptar
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                dispatch({ type:"termsAndConditions/checkTerms", payload: false });
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

export default TermsAndConditionModal;
