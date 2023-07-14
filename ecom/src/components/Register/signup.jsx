import React, { useEffect, useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';
import './signup.css';

function signup() {
  const dispatch = useDispatch();
  const { isLoading, errors } = useSelector((state) => state.user);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    birthdate: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("useEffect",formData, !Object.keys(errors).length,errors )
    if(Object.values(formData).every(e => e) && !Object.keys(errors).length) Navigate('/login');
  },[errors])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("before",e)
    dispatch(registerUser(formData));
    console.log('after',e,formData);
    console.log("Errors--------",errors, !Object.keys(errors).length)
    // if(!Object.keys(errors).length) Navigate('/login');
  };

  return (
    
    <div className='SignupForm'>
    <div className="justify-content-center">
          <div className="card">
            <div className="card-body">
            <h4 className="card-title text-center">Register</h4>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="form-group">
        <label>Birthdate</label>
        <input
          type="date"
          className="form-control"
          name="birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <span>{errors.birthdate}</span>}
      </div>
      <div className="form-group" >
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <span className='errormsg'>{errors.confirmPassword}</span>}
      </div>
      <button type="submit"  className='btn btn-primary mt-2'>
        Register
      </button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default signup