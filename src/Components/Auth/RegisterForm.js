import React , { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { PASSWORD_REGISTER_CONTAIN, PASSWORD_DONT_MATCH, PASSWORD_SHORT, REGISTER_SUCCESS } from "../../Helpers/messagesText";
import { yupConfirmPass, yupEmail, yupFirstName, yupPassRegister } from "../../Helpers/formValidations";
import { postAuthRegister } from '../../Services/authService';
import { SuccessAlert } from '../Alert';
import '../FormStyles.css';

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);

    const timerMessage = (time) => {
        setTimeout(() => {
            setSubmitForm(false);
        }, time);
    };

    const formik = useFormik({
        initialValues:{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: yupFirstName(),
            email: yupEmail(),
            password: yupPassRegister(PASSWORD_SHORT, PASSWORD_REGISTER_CONTAIN),
            confirmPassword: yupConfirmPass('password', PASSWORD_DONT_MATCH),
        }),
        onSubmit: values => {
            const registerSubmit = async () => {
                try {
                    await postAuthRegister(values)
                    SuccessAlert( REGISTER_SUCCESS );
                } catch (error) {
                    console.error(error);
                }
            }
            registerSubmit();
            setSubmitForm(true);
            timerMessage(3000);
            formik.resetForm();
        },
    });

    return(
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <label htmlFor="name">First Name</label>
            <input
                id="name"
                type="text"
                className="input-field"
                {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name &&
                <div className="error-message message">{formik.errors.name}</div>
            }
            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
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
                className="input-field"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <div className="error-message message">{formik.errors.confirmPassword}</div>
            }

            <button className="submit-btn"  type="submit" >Submit</button>
            {submitForm && <div className="success-message message">Form submitted successfully</div>}
        </form>
    );

};

export default RegisterForm;