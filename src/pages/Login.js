import React from "react";
import { Form, useActionData, Link } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const userName = formData.get("username");
  const password = formData.get("password");
  let success = false;

  if (success) {
    return {
      success: true,
      data: {
        id: 1,
        userName,
        password,
      },
    };
  } else {
    return {
      success: true,
      errMsg: "Invalid Credentials",
    };
  }
}

function Login() {
  console.log(useActionData());
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Sign In to your Account</h1>
        <h5 style={{color:"red"}}>Invaid Credentials</h5>
        <Form method="post" className="login-main">
          <div>
            <label className="login-label" htmlFor="username">
              User Name :{" "}
            </label>
            <input
              className="login-field"
              id="username"
              name="username"
              type="text"
              required
            />
          </div>
          <div>
            <label className="login-label" htmlFor="password">
              Password :{" "}
            </label>
            <input
              className="login-field"
              id="password"
              name="password"
              type="password"
              required
            />
          </div>
          <button>Login</button>
        </Form>
        <p>
          Don't have an account ?
          <span>
            <Link to="/signup"> SignUp</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
