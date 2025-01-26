import React , { useState ,useEffect}from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const EditUser = () => {
  const navigate = useNavigate();
const {id} = useParams();
const [formError,setFormError] = useState({});
  const [formData ,setFormData] = useState({
          name: '',
          email: "",
          dob: "",
          password: "",
      });

      const handleInput = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData,[name]:value}));
      }

      useEffect(()=>{
        const fetchUser = async () => {
          
          try {
            const response = await axios.get(`http://localhost/api/user/${id}`);
            const result = response.data.data[0];
            setFormData(result);
          } catch (err) {
            setError(err.message); 
          } 
        };
    
        fetchUser();

      },[]);
      const validate = () =>{
        const error = {};
        if(!formData.name) error.name = "Name is required";
        if(!formData.email) error.email = "Email is required";
        if(!formData.dob) error.dob = "DOB is required";
        if(!formData.password) error.password = "Password is required";
        return error;
      }
      const handleEdit = async () =>{
        const validateForm = await validate();
        if(Object.keys(validateForm).length === 0){
          setFormError({});
          axios.post('http://localhost/api/editUser',formData)
          .then((response)=> {
            alert('User Updated !');
            navigate('/Users');
          })
          .catch((error)=>{
            console.error('There was an error',error);
          })

        }else{
          setFormError(validateForm);
        }
      }
  return (
    <>
    
  <div className='row mt-5'>
   <div className='col-lg-4 col-md-10 col-sm-11 m-auto p-3' style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius:'5px'}}>
    <h2 className='text-primary'>Edit User</h2>
    <hr />
   <div className='form-group my-2'>
   <label  className="form-label">Name</label>
   <input type="text" className="form-control" value={formData.name} onChange={(e) => handleInput(e) }  name="name" placeholder="Enter Your Name"/>
   {formError.name &&  <small className=' px-2 text-danger'>{formError.name}</small> }
   </div>
   <div className='form-group my-2'>
   <label  className="form-label">Email</label>
   <input type="email" className="form-control"  value={formData.email} onChange={(e) => handleInput(e) }  name="email" placeholder="Enter Your Email"/>
   {formError.email &&  <small className=' px-2 text-danger'>{formError.email}</small> }
   </div>
   <div className='form-group my-2'>
   <label  className="form-label">DOB</label>
   <input type="date" className="form-control" value={formData.dob}  onChange={(e) => handleInput(e) }   name="dob" placeholder="Enter Your DOB"/>
   {formError.dob &&  <small className=' px-2 text-danger'>{formError.dob}</small> }
   </div>
    <div className='form-group my-2'>
    <label  className="form-label">Password</label>
    <input type="text" className="form-control" value={formData.password} onChange={(e) => handleInput(e) }   name="password" placeholder="Enter Your DOB"/>
    {formError.password &&  <small className=' px-2 text-danger'>{formError.password}</small> }
    </div>
    <button className='w-100 mt-2 btn btn-primary px-5' onClick={handleEdit}>Edit</button> 
   </div>
    </div>
    </>
  )
}

export default EditUser