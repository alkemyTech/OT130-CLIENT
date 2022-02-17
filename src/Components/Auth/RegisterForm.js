import React , { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import TermsAndConditionModal from '../Modal/TermsAndConditionModal';
import { useSelector } from 'react-redux';

import { PASSWORD_REGISTER_CONTAIN, PASSWORD_DONT_MATCH, PASSWORD_SHORT } from "../../Helpers/messagesText";
import { yupConfirmPass, yupEmail, yupFirstName, yupLastName, yupPassRegister,yupTermsAndConditions } from "../../Helpers/formValidations";
import { selectTerms } from '../../reducers/termsAndConditionsReducer';
import { SuccessAlert } from '../Alert';
import '../FormStyles.css';

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);
    const {termsAndConditions} = useSelector(selectTerms);
 
    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            termsAndConditions: false
        },
        validationSchema: Yup.object({
            firstName: yupFirstName(),
            lastName: yupLastName(),
            email: yupEmail(),
            password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
            confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
            termsAndConditions: yupTermsAndConditions()
        }),
        onSubmit: values => {
            if(values.termsAndConditions && termsAndConditions.acept){
                setSubmitForm(true);
                SuccessAlert('Registro exitoso');
                formik.resetForm();
            }else{
                setSubmitForm(false);
            }
        },
    });

    return(
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                autoComplete="username"
                className="input-field"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName &&
                <div className="error-message message">{formik.errors.firstName}</div>
            }
            
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                autoComplete="username"
                className="input-field"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName &&
                <div className="error-message message">{formik.errors.lastName}</div>
            }

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                autoComplete="userEmail"
                className="input-field"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email &&
                <div className="error-message message" >{formik.errors.email}</div>
            }

            <label htmlFor="pass">Password</label>
            <input
                id="pass"
                type="password"
                autoComplete="new-password"
                className="input-field"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password &&
                <div className="error-message message">{formik.errors.password}</div>
            }

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                className="input-field"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <div className="error-message message">{formik.errors.confirmPassword}</div>
            }
            <div className='d-flex align-items-center'>
                <label htmlFor='termsAndConditions' className='label'>Terminos y Condiciones</label>
                <input
                    id="termsAndConditions"
                    type="checkbox"
                    className="input-field" 
                    {...formik.getFieldProps('termsAndConditions')}
                />
            </div>

            <TermsAndConditionModal/>   
            { termsAndConditions.acept || formik.errors.termsAndConditions || <div className="error-message message">{formik.errors.termsAndConditions}</div> }
            <button className="submit-btn"  type="submit" >Submit</button>
        </form>
    );

};

export default RegisterForm;