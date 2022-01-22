import React from 'react';
import { useFormik} from 'formik';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from 'yup';

const OrganizationForm = ({organization}) => {

/*     const validateImageType = (file) => {
        const fileType = file.type;
        const validImageTypes = ['image/gif', 'image/png'];
        if ( !validImageTypes.includes(fileType)) {
            return false;
        }
       
        return true;
    } */

    const formik = useFormik({
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required'),
          
            longDescription: Yup.string().required('Long description is required'),
            shortDescription: Yup.string().required('Short description is required'),
            links: Yup.string().required('Links is required'),
            logo: Yup.mixed().test(
                "fileType",
                "Ivalid file. only jpg o png be allowed",
                (value) => {
                    console.log(value,'value');
                    if (value) return ["image/jpg", "image/png"].includes(value.type);
                    //  Assuming image is not required
                    return true;
               
                })
        }),

        initialValues: organization || {
            name: '',
            logo: '',
            longDescription: '',
            shortDescription: '',
            links: '',
        },
        onsubmit: (values,setUpdate) => {
                console.log(values);
        }
    });

    return (
        <form className="form-container" /* onSubmit={} */>
            <label htmlFor='name'>Name:</label>
            <input
                className="input-field"
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formik.values.name}
                {...formik.getFieldProps('name')}
             ></input>

            {formik.touched?.name && formik.errors.name ? ( <div className="error message">{formik.errors.name}</div>): null}

            <input 
                type="file"
                name="logo" 
                max={1}
                accept="image/png, image/jpg"
                id="logo"
      
            >
            </input>
            {formik.touched?.logo && formik.errors.logo ? ( <div className="error message">{formik.errors.logo}</div>): null}

            <CKEditor
                  editor={ ClassicEditor }
                  /* onChange={handleCkeditorChange} */
            />
      
            <button className="submit-btn"  type="submit" >Submit</button>
           {/*  {submitForm && <div className="success message">Form submitted successfully</div>} */}
        </form>
    );
};

export default OrganizationForm;
