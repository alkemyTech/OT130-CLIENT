import {Formik} from 'formik';
import '../FormStyles.css';

const RegisterForm = () => {

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
                }}
                onSubmit={(values)=>{
                    console.log(values);
                    console.log('submit');
                }}
            >
                {({values,errors,touched,handleSubmit,handleChange,handleBlur})=>(
                    <form className="form-container"  onSubmit={handleSubmit}>
                        <input className="input-field" type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter name"></input>
                        {errors.name && touched.name && errors.name}
                        <input className="input-field" type="text" name="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter last name"></input>
                        <input className="input-field" type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Email"></input>
                        <input className="input-field" type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} placeholder="Password"></input>
                        <input className="input-field" type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} placeholder="Confirm password"></input>
                        <button className="submit-btn" type="submit">Register</button>
                    </form>
                )}
            </Formik>
        </>
    )

}
 
export default RegisterForm;