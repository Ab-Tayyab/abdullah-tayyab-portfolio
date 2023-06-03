
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Captcha from './Captcha';
import { Helmet } from 'react-helmet';
import photo from './images/logo3.png';

const App = () => {
  const [captchaValue, setCaptchaValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      setFormSubmitted(true);
    } else {
      alert('Please complete the CAPTCHA.');
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div>
      <Helmet>
        <title>Abdullah Tayyab</title>
        <link rel="icon" href={photo} style={{ width: '32px', height: '32px' }} />
      </Helmet>
      {formSubmitted ? (
        <Captcha />
      ) : (
        <div style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}>
          <form onSubmit={handleSubmit} >
            <div>
              <ReCAPTCHA
                sitekey="6Lcm3WUmAAAAAG1ySpT6-kWwlyvcUXY5H_Rg8Txr"
                onChange={handleCaptchaChange}
              />
            </div>
            <button type="submit" style={{
              width: "150px",
              height: "50px",
              border: "none",
              background: "rgba(14, 42, 71, 1)",
              color: "white",
              marginTop: "10px",
              "&:hover": {
                color: "black",
                background: "white"
              }

            }}>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;

