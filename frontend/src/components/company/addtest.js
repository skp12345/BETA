import { Button, TextField } from '@mui/material';
import { shadows } from '@mui/system';
import React from 'react'

const Addtest = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + 'https://c8.alamy.com/comp/2H8NAFW/the-beta-test-2021-directed-by-jim-cummings-and-pj-mccabe-credit-vanishing-angle-album-2H8NAFW.jpg'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "20rem"

          }}>
            <div className="signup-bg"></div>
          </div>
          <div className="col-md" style={{background: "rgb(76 175 80 / 14%)"}}>
            <div className="my-card-body">
              <form  >

                <h2 style={{ textAlign: "center",color:"blue", padding: "1rem", textShadow: "2px 1px #ff0000" }}>Add Test Here </h2>
                <div className="form-group">
                  <label style={{ paddingBottom: '10px' }} for="exampleInputEmail1">Tittle</label>
                  <TextField id="outlined-basic" label="Enter Tittle " variant="outlined" color="success" className='w-100' />
                  <label style={{ paddingBottom: '10px' }} for="exampleInputEmail1">Description</label>
                  <TextField id="outlined-basic" label="Write Decsription" variant="outlined" color="success" className='w-100' />
                </div>
                <div className="form-group">
                  <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Qualification</label>
                  <TextField style={{ paddingBottom: '20px' }} id="outlined-basic" label="Enter Qualification" variant="outlined" color="success" className='w-100' />
                </div>
                <div className="form-group">
                  <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Last Date</label>
                  <TextField style={{ paddingBottom: '20px' }} id="outlined-basic" label="Enter Last Date" variant="outlined" color="success" className='w-100' />
                </div>
                <div className="form-group">
                  <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Link</label>
                  <TextField style={{ paddingBottom: '20px' }} id="outlined-basic" label="Paste link" variant="outlined" color="success" className='w-100' />
                </div>
                <div className="form-group">
                  <label style={{ paddingBottom: '10px' }} for="exampleInputPassword1">Type</label>
                  <TextField style={{ paddingBottom: '20px' }} id="outlined-basic" label="Enter Test Type" variant="outlined" color="success" className='w-100' />
                </div>
                <Button className='w-100 mt-3' variant="contained" color="success">
                Add Test Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Addtest;