import { useState, useEffect } from "react";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script';

const CLIENT_ID = "851582663866-4rg481nlooejvfhbto2q1q65m5g5v2bf.apps.googleusercontent.com";


const GoogleAuth = () => {

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSuccess = (res) => {
    setIsSignedIn(true)
    console.log('onSuccess', res)
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = (res) => {
    setIsSignedIn(false)
    console.log('logout', res);
  };
  return (
    <>
      {isSignedIn ? (
        <GoogleLogout clientId={CLIENT_ID} buttonText="Logout" onLogoutSuccess={logOut} />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </>
  );
}

export default GoogleAuth