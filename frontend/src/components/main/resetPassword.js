import { Button, TextField } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <div className='container card'
        style={{
          width: "25rem",
          borderRadius: "5px",
          boxShadow: "3px 5px #888888",
          margin: "20px auto",
          fontSize: ".7rem",
          padding: "0.7rem",
          // background: "rgb(76 175 80 / 14%)"
        }}
      >
        <div className='card'>
          <form  >
            <div >
            </div>
            <h4 style={{ textAlign: "center", padding: "1rem" }}>Forgot PassWord </h4>
            <div className="form-group mx-3">

              <TextField size='small' id="outlined-basic" label="Enter Email" variant="outlined" color="success" className='w-100' />
            </div>

            <div className='mt-3 mx-3 mb-3'>
              <Button className=' w-100' variant="contained" color="success">
                Continue
              </Button>
              <div style={{ fontSize: "1.2rem" }} className='mt-3'>
                <b>Enter otp</b>    <TextField size='small' id="outlined-basic" label="Otp Here" variant="outlined" color="success" className='w-50' />
                <div style={{ paddingLeft: "4.8rem" }}>
                  <Button className='mt-3 mx-5 w-10' variant="contained" color="success">
                    Submmit
                  </Button>
                </div>

              </div>
            </div>
          </form>
        </div>
        <div className='card mt-3'>
          <form  >
            <div >
            </div>
            <h4 style={{ textAlign: "center", padding: "1rem" }}>Reset Password </h4>
            <div className="form-group mx-3">

              <TextField size='small' id="outlined-basic" label="Enter New Password" variant="outlined" color="success" className='w-100' />

            </div>
            <div className="form-group mt-3 mx-3">
              <TextField size='small' id="outlined-basic" label="Confirm PassWord" variant="outlined" color="success" className='w-100' />
            </div>

            <div className='mt-3 mx-3 mb-3'>
              <Button className=' w-100' variant="contained" color="success">
                Change PassWord
              </Button>
            </div>
          </form>
        </div>


      </div>
    </div>
  )
}

export default ResetPassword;