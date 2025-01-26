import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Users = () => {


const [users,setUsers] = useState([]);
const [error,setError] = useState();
const [loading,setLoading] = useState(true);

const handleDelete = async (id)=>{
    try {
      const confirmDelete = window.confirm('Are you sure wnat to delete this user');
      const response = await axios.get(`http://localhost/api/deleteUser/${id}`).then(() =>{
        alert('User Deleted');
        const result = response.data.data[0];
      }).catch((error)=>{
        console.log('Error deleteing item',error);
      })
      
    } catch (err) {
      console.log(err.message);
    } 
  }
  useEffect(()=>{
    const fetchUser = async () => {
       
      try {
        const response = await axios.get("http://localhost/api/allUser"); 
        setUsers(response.data.data); 
        
      } catch (err) {
        setError(err.message); 
        console.log(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchUser();
  },[users]);
  

  
  return (
    <>
    <div className='container my-5'>
      <h2 className='text-info'>All Users</h2>
      <hr />
      <div>
        <table className='table table-bordered table-striped text-center'>
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name </th>
              <th>Email</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users && (users.map((row,index) => (
            <tr key={index}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.dob}</td>
              <td>
               <Link to={`/EditUser/${row.id}`}>
               <button className='btn btn-primary btn-sm mx-2'>Edit</button>
              </Link>
              
              <button className='btn btn-danger btn-sm' onClick={() => handleDelete(row.id)}>Delete</button>
              
              </td>
            </tr>
          )))}

        {users.length === 0 &&
            <tr >
              <td colSpan={5}>Users  not fonund
              </td>
            </tr>
          }
            
          </tbody>
        </table>
      </div>

    </div>
    </>
  )
}

export default Users


