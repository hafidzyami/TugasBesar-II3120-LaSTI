"use client"

import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginCustomer = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleLogin = (e) => {
        e.preventDefault()
    }
  return (
    <div>
      LoginCustomer
      <div>
        <div className="container-fluid">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 text-dark"
          >
            <Form.Control
              type="text"
              placeholder="name@example.com"
              style={{ width: "400px" }}
              value={username}
              onChange={(e)=>{setUsername(e.target.value)}}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="text-dark"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              style={{ width: "400px" }}
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </FloatingLabel>
          <Button variant="primary" className="mt-3" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginCustomer;
