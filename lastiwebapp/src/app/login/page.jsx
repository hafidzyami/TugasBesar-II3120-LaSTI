"use client";

import { useRouter } from "next/navigation";
import React, { use, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import supabase from "../config/supabase";

const LoginCustomer = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    let { data, error } = await supabase
      .from("Member")
      .select("*")
      .eq("username", username)
      .eq("password", password);

    if(username == "admin" && password == "admin"){
        router.push("/admin/admin")
    }
    else{
      if(data.length == 0){
        window.alert("Invalid Credentials!")
        setPassword("")
        setUsername("")
      }
      else{
        router.push(`/member/${username}`)
      }

    }
  };

  return (
    <div className="d-flex">
      <div>
        <img
          src="/login.png"
          alt="loginimage"
          className="vh-100"
          style={{ width: "50vw" }}
        />
      </div>
      <div className="mx-auto align-self-center">
        <div className="mb-5">
          <div style={{ fontSize: "2vw", fontWeight: "bold" }}>Login</div>
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
                placeholder="name@example.com"
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
            <div class="mt-3 row justify-content-between">
              <div class="col-6">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    name="remember_me"
                    id="remember_me"
                  />
                  <label
                    className="form-check-label text-secondary"
                    for="remember_me"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col-6">
                <div class="text-end">
                  <a href="#!" className="link-secondary text-decoration-none">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
            <Button
              style={{ width: "400px" }}
              variant="warning"
              className="mt-3"
              onClick={handleLogin}
            >
              Login
            </Button>
          </div>
          <div
            class="mt-3 text-center text-secondary"
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            New user?
            <a href="/register" className="mx-2 fw-bold">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCustomer;
