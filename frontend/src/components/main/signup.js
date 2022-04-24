import { Button, TextField } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Formik } from "formik";

const SignUp = () => {

  const userForm = {
    username : String,
    passowrd :String,
    email : String,
  };
  
  const userSubmit = (formdata) => {
    console.log(formdata);
  };

  return (
    <div className='start' >
      <div className=' card' style={{ width: "22rem", borderRadius: "5px", boxShadow: "3px 5px #888888", margin: "20px auto", padding: "1rem",fontSize:".9rem", background: "rgb(76 175 80 / 14%)" }}>

      <Formik initialValues={userForm} onSubmit={userSubmit}>
          {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}  >
          <div >
            <img style={{ width: "6rem", marginLeft: "110px", borderRadius: "100%", background: "rgb(76 175 80 / 14%)" }} src='https://freepikpsd.com/file/2019/10/user-login-png-transparent-6-Transparent-Images.png'></img>
          </div>
          <h3 style={{ textAlign: "center", padding: "1rem" }}>SignUp Here </h3>
          <div className="form-group">
            <TextField  id="username"
                onChange={handleChange}
                value={values.username} size='small'  label="User Name" variant="outlined" color="success" className='w-100' />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small> */}
          </div>
          <div className="form-group mt-3">
            <TextField  id="email"
                onChange={handleChange}
                value={values.email} size='small' label="Enter Email" variant="outlined" color="success" className='w-100' />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small> */}
          </div>
          <div className="form-group mt-3">
            {/* <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Password</label> */}
            <TextField   id="password"
                onChange={handleChange}
                value={values.password} size='small' style={{ paddingBottom: '20px' }}  label="PassWord" variant="outlined" color="success" className='w-100' />
          </div>
         <div style={{textAlign:"center"}}> <span>Already a member?</span> <NavLink style={{fontSize:"1.1rem"}} to='/main/login'><b>Login</b></NavLink></div>
          <Button type="submit" className='w-100 mt-3' variant="contained" color="success">
            SignUp
          </Button>
        </form>
          )}
          </Formik>
      </div>

    </div>
  )
}

export default SignUp;