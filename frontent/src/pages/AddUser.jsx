import React, { useState }from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddUser = () => {
  const navigate = useNavigate();
const [formError,setFormError] = useState({});
    const [formData ,setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        password: "",
    });


    const handleInput = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData,[name]:value}));
    }
    const validate = () =>{

          const error = {};
          if(!formData.name) error.name = "Name is required";
          if(!formData.email) error.email = "Email is required";
          if(!formData.dob) error.dob = "DOB is required";
          if(!formData.password) error.password = "Password is required";
          return error;
    }

    const handleSubmit = async () => {

      const validateForm = await validate();
      if(Object.keys(validateForm).length === 0){
        setFormError({});

        axios.post('http://localhost/api/addUser',formData)
        .then((response)=> {
          alert('User Added !');
          navigate('/Users');
        })
        .catch((error)=>{
          console.error('There was an error',error);
        })
        console.log(formData);
      }else{
        setFormError(validateForm);
      }
    }
  return (
    <>
    <div className='row mt-2'>
   <div className='col-lg-4 col-md-6 bg-white col-sm-11 m-auto p-4' style={{boxShadow:'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', borderRadius:'5px'}}>
    <h2 className='text-primary'>Add User</h2>
    <hr />
   <div className='form-group my-2'>
   <label  className="form-label">Name <sup className='text-danger'>*</sup> </label>
   <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInput(e) } name="name" placeholder="Enter Your Name"/>
   {formError.name &&  <small className=' px-2 text-danger'>{formError.name}</small> }
   </div>
   <div className='form-group my-2'>
   <label  className="form-label">Email <sup className='text-danger'>*</sup></label>
   <input type="email" className="form-control" value={formData.email}  onChange={(e) => handleInput(e) } name="email" placeholder="Enter Your Email"/>
   {formError.email &&  <small className=' px-2 text-danger'>{formError.email}</small> }
   </div>
   <div className='form-group my-2'>
   <label  className="form-label">DOB <sup className='text-danger'>*</sup></label>
   <input type="date" className="form-control" value={formData.dob} onChange={(e) => handleInput(e) } name="dob" placeholder="Enter Your DOB"/>
   {formError.dob &&  <small className=' px-2 text-danger'>{formError.dob}</small> }
   </div>
    <div className='form-group my-2'>
    <label  className="form-label">Password <sup className='text-danger'>*</sup></label>
    <input type="password" className="form-control" value={formData.password}  onChange={(e) => handleInput(e) } name="password" placeholder="Enter Your Password"/>
    {formError.password &&  <small className=' px-2 text-danger'>{formError.password}</small> }
    </div>
    <button onClick={handleSubmit} className='w-100 mt-2 btn px-5 bg-success' style={{color:'white'}}>Add User</button> 
   </div>
    </div>
    </>
  )
}

export default AddUser