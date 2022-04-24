import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

const Feedback = () => {
  return (
    <div className='container card card-body  ' style={{ width:"40rem", margin:"50px auto", background:"rgb(76 175 80 / 14%)",borderRadius: "5px", boxShadow: "3px 5px #888888"}}>
        <h3 style={{textAlign:"center"}}>Beta Test feedback</h3>
        <h5>Tittle:</h5>
        <h5>Cotegory:</h5>
       <p style={{fontSize:"1rem"}}>Test Details :</p>
       <div className="mt-3" style={{fontSize:"1rem"}}>
           <h6>Q.1 How many stars you will give in oout 5 five</h6>
           <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="val1" control={<Radio/>} label="5 Stars" />
    <FormControlLabel value="val2" control={<Radio />} label="4 Stars" />
    <FormControlLabel value="val3" control={<Radio />} label="3 Stars" />
    <FormControlLabel value="val4" control={<Radio />} label="<3 Stars" />
  </RadioGroup>
</FormControl>
       </div>
       <hr/>
       <div className="mt-3" style={{fontSize:"1rem"}}>
           <h6>Q.2 How many stars you will give in oout 5 five</h6>
           <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="val1" control={<Radio/>} label="5 Stars" />
    <FormControlLabel value="val2" control={<Radio />} label="4 Stars" />
    <FormControlLabel value="val3" control={<Radio />} label="3 Stars" />
    <FormControlLabel value="val4" control={<Radio />} label="<3 Stars" />
  </RadioGroup>
</FormControl>
       </div>
       <hr/>
       <div className="mt-3" style={{fontSize:"1rem"}}> 
           <h6>Q.3 How many stars you will give in oout 5 five</h6>
           <FormControl>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    // defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="val1" control={<Radio/>} label="5 Stars" />
    <FormControlLabel value="val2" control={<Radio />} label="4 Stars" />
    <FormControlLabel value="val3" control={<Radio />} label="3 Stars" />
    <FormControlLabel value="val4" control={<Radio />} label="<3 Stars" />
  </RadioGroup>
</FormControl>
       </div>
    </div>
  )
}

export default Feedback;