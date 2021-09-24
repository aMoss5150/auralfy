import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [errors, setErrors] = useState("")
  const [match, setMatch] = useState(true)

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };


  // password matcher
  useEffect(() => {
    if (password !== repeatPassword) {
      setMatch(false)
    } else setMatch(true);
  }, [password, repeatPassword])


  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form className="signupform__parent" onSubmit={onSignUp}>
      <label>User Name</label>
      <div>
        <input
          className="forminput"
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <label>Email</label>
      <div>
        <input
          className="forminput"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <label>Password</label>
      <div>
        <input
          className="forminput"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>

      <label>Repeat Password</label>
      <div>
        <input
          className="forminput"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className="text-center font-bold">
        {match ? "" : "passwords do not match"}
      </div>

      <div className="signup-button">
        <button type="submit">Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
