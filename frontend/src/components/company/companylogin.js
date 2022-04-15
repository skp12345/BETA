import { Button, TextField } from '@mui/material';
import { padding } from '@mui/system';
import React from 'react'
import { NavLink } from 'react-router-dom';
import Company from '.';

const Companylogin = () => {


    return (
        <div className='start' >
        <div className='container card' style={{ width: "22rem", borderRadius: "5px", boxShadow: "3px 5px #888888", margin: "20px auto",fontSize:".9rem", padding: "1rem", background: "rgb(76 175 80 / 14%)" }}>
            <form  >
                <div >
                    <img style={{ width:"6rem",marginLeft:"110px", borderRadius:"100%", background:"rgb(76 175 80 / 14%)" }} src='https://freepikpsd.com/file/2019/10/user-login-png-transparent-6-Transparent-Images.png'></img>
                </div>
                <h3 style={{ textAlign: "center", padding: "1rem" }}>Login Here </h3>
                <div className="form-group">
                    {/* <label style={{ paddingBottom: '5px' }} for="exampleInputEmail1">Email address</label> */}

                    <TextField size='small' id="outlined-basic" label="Enter Email" variant="outlined" color="success" className='w-100' />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.</small> */}
                </div>
                <div  className="form-group mt-3">
                    {/* <label style={{ paddingBottom: '5px' }} for="exampleInputPassword1">Password</label> */}
                    <TextField  size='small' id="outlined-basic" label="PassWord" variant="outlined" color="success" className='w-100' />
                </div>
                <div className="form-group form-check" style={{ padding: "13px", paddingLeft: "23px" }}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <Button className='w-100' variant="contained" color="success">
                    Login
                </Button>
<div className='mt-3'><span>Forgotten PassWord ? </span> <NavLink style={{fontSize:"1rem"}} to=''><b>Click Here</b></NavLink></div>
<div className='mt-3'><span>New User ? </span> <NavLink style={{fontSize:"1rem"}} to='/company/companysignup'><b>Click Here</b></NavLink></div>
            </form>

        </div>

    </div>
)
}

export default Companylogin;