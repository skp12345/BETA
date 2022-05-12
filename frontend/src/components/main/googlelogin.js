import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import GoogleLogin from 'react-google-login'


const clientId ='660179869959-gduie743v7um0qpvecmc6di3vl35h78i.apps.googleusercontent.com';

function Googlelogin(){
    const onSuccess =(res) => {
        console.log('[Login Success] currentUser:',res.profileObj);
    }
    const onFailure =(res) => {
        console.log('[Login Failed] res:',res);
    };


  return (
    <div>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login "
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop:'100px'}}
        isSignedIn={true}
        >    
        </GoogleLogin>

        <Button
        clientId={clientId}
        buttonText="Login "
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop:'100px'}}
        isSignedIn={true}
                variant="contained"
                color="error"
                className="w-100"
                startIcon={<Google />}
              >
                Google
              </Button>

              <div
               clientId={clientId}
               buttonText="Login "
               onSuccess={onSuccess}
               onFailure={onFailure}
               cookiePolicy={'single_host_origin'}
               style={{marginTop:'100px'}}
               isSignedIn={true}
                       variant="contained"
                       color="error"
                       className="w-100"
                       startIcon={<Google />}
                     >
                       Google
              >

              </div>

        
    </div>
  )
};

export default Googlelogin