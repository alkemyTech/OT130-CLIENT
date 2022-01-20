import React , {useState} from 'react';
import {Formik} from 'formik';
import '../FormStyles.css';

const RegisterForm = () => {
    const [submitForm, setSubmitForm] = useState(false);
    /* Comienzo 11:03 */

/*     const [initialValues, setInitialValues] = useState({
        name: '',
        lastName: ''
    })
    
    const handleChange = (e) => {
        if(e.target.name === 'name'){
            setInitialValues({...initialValues, name: e.target.value})
        } if(e.target.name === 'lastName'){
            setInitialValues({...initialValues, lastName: e.target.value})
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(initialValues);
        localStorage.setItem('token', 'tokenValueExample')
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Enter name"></input>
            <input className="input-field" type="text" name="lastName" value={initialValues.lastName} onChange={handleChange} placeholder="Enter last name"></input>
            <button className="submit-btn" type="submit">Register</button>
        </form>
    ); */
    return(
        <>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                //Validation 
                validate={(values) => {
                    let error = {};
                    if(!values.name){
                        error.name = 'Name is required';
                    }
                    if(!values.lastName){
                        error.lastName = 'Last name is required';
                    }
                    if(!values.email){
                        error.email = 'Email is required';
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                        error.email = 'Invalid email address';
                    }
                    if(!values.password){
                        error.password = 'Password is required';
                    }
                    else if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(values.password)){
                        error.password= 'Password must contain at least 6 characters, one letter, one number and one special character';
                    }
                    if(!values.confirmPassword){
                        error.confirmPassword ='Confirm password is required';
                    }
                    else if(values.confirmPassword !== values.password){
                        error.confirmPassword = 'Passwords do not match';
                    }
                    return error;
                }}
                onSubmit={(values,{resetForm})=>{
                    resetForm();
                    setSubmitForm(true);
                    setTimeout(()=>{
                        setSubmitForm(false);
                    },4000);
                    console.log(values);
                    console.log('Form submit');
                }}
            >
                {({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
                    <form className="form-container"  onSubmit={handleSubmit}>
                        <input className="input-field" type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name"></input>
                        {errors.name && touched.name && errors.name ? (<div className="error-message">{errors.name}</div>) : null}
                        <input className="input-field" type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter last name"></input>
                        {errors.lastName && touched.lastName && errors.lastName ? (<div className="error-message">{errors.lastName}</div>) : null}
                        <input className="input-field" type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email"></input>
                        {errors.email && touched.email && errors.email ? (<div className="error-message">{errors.email}</div>) : null}
                        <input className="input-field" type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password"></input>
                        {errors.password && touched.password && errors.password ? (<div className="error-message">{errors.password}</div>) : null}
                        <input className="input-field" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder="Confirm password"></input>
                        {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword ? (<div className="error-message">{errors.confirmPassword}</div>) : null}
                        <button className="submit-btn" type="submit">Register</button>
                        {submitForm && <div className="success-message">Form submitted successfully</div>}
                    </form>
                )}
            </Formik>
        </>
    )

}
 
export default RegisterForm;