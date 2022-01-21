import React , {useState} from 'react';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import '../FormStyles.css';

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);

    const timerMessage = (time)=>{
        setTimeout(()=>{
            setSubmitForm(false);
        },time);
    };

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name is required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Last name is Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email required'),
            password: Yup.string()
                .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,'Password must contain at least 6 characters, one letter, one number and one special character')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password isequired')
          }),
          onSubmit: values => {
            setSubmitForm(true);
            timerMessage(3000);
            console.log(values);
          },
      });


    return(
        <form className="form-container" onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                id="firstName"
                type="text"
                className="input-field"
                {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
                <div className="error message">{formik.errors.firstName}</div>
            ) : null}
        
            <label htmlFor="lastName">Last Name</label>
            <input
                id="lastName"
                type="text"
                className="input-field"
                {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
                <div className="error message">{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
                id="email"
                type="email"
                className="input-field"
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className="error message" >{formik.errors.email}</div>
            ) : null}

            <label htmlFor="pass">Password</label>
            <input
                id="pass"
                type="password"
                className="input-field"
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className="error message">{formik.errors.password}</div>
            ) : null}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                className="input-field"
                {...formik.getFieldProps('confirmPassword')}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="error message">{formik.errors.confirmPassword}</div>
            ) : null}

            <button className="submit-btn"  type="submit" >Submit</button>
            {submitForm && <div className="success message">Form submitted successfully</div>}
        </form>
    );

};

export default RegisterForm;