import React from "react";
import Popup from "reactjs-popup";
import { useDispatch } from "react-redux";
import { checkTerms } from "../../actions/termsAndConditionsActions";
import PDFReader from "../RenderPdf/PDFReader";
import 'reactjs-popup/dist/index.css';
import './index.css';

const TermsAndConditionModal = () => {
  const dispatch = useDispatch();

  const handleModalResponse =(response,cb) => {
    dispatch(checkTerms(response));
    cb();
  }
  
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
                handleModalResponse(true,close);
              }}
            >
              Aceptar
            </button>
            <button
              className="button"
              type="button"
              onClick={() => {
                handleModalResponse(false,close);
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
