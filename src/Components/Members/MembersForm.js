import React, { useState } from 'react';

import '../FormStyles.css';

const MembersForm = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: ''
  })

  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setInitialValues({...initialValues, name: e.target.value})
    } if(e.target.name === 'description'){
      setInitialValues({...initialValues, description: e.target.value})
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialValues);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input className="input-field" type="text" name="name" value={initialValues.name} onChange={handleChange} placeholder="Name"></input>
      {/* <input className="input-field" type="image" name="image" value={initialValues.name} onChange={handleChange} placeholder="Name"></input> */}
      <textarea className="input-field" type="text" name="description" value={initialValues.description} onChange={handleChange} placeholder="Write some description"></textarea>
      <div className="d-flex  justify-content-between mx-0 p-0">
      <input className="input-field w-50 me-1 " type="url" name="social-media-link" value={initialValues.name} onChange={handleChange} placeholder="Linkedin"></input>
      <input className="input-field w-50 " type="url" name="social-media-link" value={initialValues.name} onChange={handleChange} placeholder="Facebook"></input>
      </div>
      <button className="submit-btn" type="submit">Send</button>
    </form>
  );
}
 
export default MembersForm;