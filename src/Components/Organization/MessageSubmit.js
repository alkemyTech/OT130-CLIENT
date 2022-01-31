import React, { useEffect, useState } from 'react';
import '../../Components/FormStyles.css';

const MessageSubmit = ({ show, submitMessage ,styleType ,time }) => {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
       
        if(show){
            setTimeout(() => {
                setShowMessage(!show);
            }, time);
        }
    }, [show, time]);
  
    return (
        showMessage ?
            <div className={`message-submit ${styleType}`}>
                {submitMessage}
            </div>
        : null
    );
};

export default MessageSubmit;
