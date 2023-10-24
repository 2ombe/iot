// src/components/Login.js

import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha"
import { useNavigate } from 'react-router-dom';

function Login() {
    const [isVerified,setIsVerifird]=useState(false)
const navigate=useNavigate()
    const handleCaptureChange=(value)=>{
setIsVerifird(true)
    }

 const   handleSubmitHandler=(e)=>{
e.preventDefault()
navigate('/chat')
// if(isVerified){
// }else{
//    window.alert("The capture was incorect")
// }
    }
  return (
    <div style={{position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',border:"black"}}>

    <Container className='small-container'>
        <Row className='justify-content-center'>

      <h2>Login</h2>
      <Form onSubmit={handleSubmitHandler} >
        <Form.Group className='mt-2' >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>
        <Form.Group className='mt-3' >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className='mt-3'>
          <ReCAPTCHA sitekey='6LeUNL0oAAAAAEsyNuCvxFmd1s2VZn2DnqjhHTKc' onChange={handleCaptureChange} theme='light'/>
        </Form.Group>
        <Button className='mt-3' variant="primary" type="submit">
          Login
        </Button>
      </Form>
        </Row>
    </Container>
    </div>
  );
}

export default Login;
