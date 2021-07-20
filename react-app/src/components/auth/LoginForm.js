import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    // console.log("on login", data);
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  // //add error handling here
  // useEffect(() => {

  // }, [])

  return (
    <form className='loginform__parent' onSubmit={onLogin}>
      <label className="font-bold" htmlFor="email">Email</label>
      <div>
        <input
          className="forminput"
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <label className="font-bold" htmlFor="password">Password</label>
      <div >
        <input
          className="forminput"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className="text-center">
        {errors && errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <button type="submit">Login</button>
    </form>

  );
};

export default LoginForm;
