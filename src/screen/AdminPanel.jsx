// src/components/AdminPanel.js

import React from 'react';
import { Form, Button, Container, FormLabel, FormGroup, FormControl, Card } from 'react-bootstrap';

function AdminPanel() {
  return (
    <Container className='small-container mt-3'>
        <Card>

      <Card.Header style={{textAlign:"center"}} >Admin Panel</Card.Header>
      <Card.Body style={{margin:"2rem"}}>
        
      <Form  >
        <FormGroup className='mt-3'>
          <FormLabel>Username</FormLabel>
          <Form.Control type="text" placeholder="Enter username" />
        </FormGroup>
        <FormGroup className='mt-3'>
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Enter password" />
        </FormGroup>
        <Button className='mt-3' variant="primary" type="submit">
          Register User
        </Button>
      </Form>
      </Card.Body>
        </Card>
    </Container>
  );
}

export default AdminPanel;
