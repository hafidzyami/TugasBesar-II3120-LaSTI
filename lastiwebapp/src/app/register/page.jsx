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
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("Member")
      .insert([{ username: username, password: password }])
      .select();
    if (error) {
      window.alert("Username telah digunakan!");
    }
    if (data) {
      window.alert("Berhasil melakukan registrasi!");
      router.push(`/member/${username}`);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="d-flex">
      <div>
        <img
          src="/register.png"
          alt="loginimage"
          className="vh-100"
          style={{ width: "50vw" }}
        />
      </div>
      <div className="mx-auto align-self-center">
        <div className="mb-5">
          <div style={{ fontSize: "2vw", fontWeight: "bold" }}>Register</div>
          <div>to stay in touch please log into our coworking page</div>
        </div>
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
            <Button
              style={{ width: "400px" }}
              variant="warning"
              className="mt-3"
              onClick={handleRegister}
            >
              Register
            </Button>
          </div>
          <div
            class="mt-3 text-center text-secondary"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            Have an account?
            <a href="/login" className="mx-2 fw-bold">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
