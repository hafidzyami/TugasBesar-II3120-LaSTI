"use client";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import supabase from "../config/supabase";
import { useRouter } from "next/navigation";


const RegisterCustomer = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Member")
      .insert([{ username: username, password: password }])
      .select();
    if(error){
        window.alert("Username telah digunakan!")
    }
    if (data) {
      window.alert("Berhasil melakukan registrasi!");
      router.push(`/member/${username}`);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      RegisterCustomer
      <div>
        <div className="container-fluid">
          <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3 text-dark"
          >
            <Form.Control
              type="text"
              placeholder="juliusyami"
              style={{ width: "400px" }}
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FloatingLabel>
          <Button variant="primary" className="mt-3" onClick={handleRegister}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
