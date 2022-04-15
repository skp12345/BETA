import { Button, TextField } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Companysignup = () => { 


  return (
    <div>
    <div className=' card' style={{ width: "22rem", borderRadius: "5px", boxShadow: "3px 5px #888888", margin: "20px auto", padding: "1rem",fontSize:".9rem", background: "rgb(76 175 80 / 14%)" }}>

      <form  >
        <div >
          <img style={{ width: "6rem", marginLeft: "110px", borderRadius: "100%", background: "rgb(76 175 80 / 14%)" }} src='https://freepikpsd.com/file/2019/10/user-login-png-transparent-6-Transparent-Images.png'></img>
        </div>
        <h3 style={{ textAlign: "center", padding: "1rem" }}>SignUp Here </h3>
        <div className="form-group">
          <TextField size='small'   id="outlined-basic" label="Coompany Name" variant="outlined" color="success" className='w-100' />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
            else.</small> */}
        </div>
        <div className="form-group mt-3">
          <TextField size='small'  id="outlined-basic" label="Enter Email" variant="outlined" color="success" className='w-100' />
          {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
            else.</small> */}
        </div>
        <div className="form-group mt-3">
          {/* <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Password</label> */}
          <TextField size='small' style={{ paddingBottom: '20px' }} id="outlined-basic" label="PassWord" variant="outlined" color="success" className='w-100' />
        </div>
       <div style={{textAlign:"center"}}> <span>Already a member?</span> <NavLink style={{fontSize:"1.1rem"}} to='/company/companylogin'><b>Login</b></NavLink></div>
        <Button className='w-100 mt-3' variant="contained" color="success">
          SignUp
        </Button>
      </form>

    </div>

  </div>
)
}

export default Companysignup;