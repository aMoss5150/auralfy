import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../auth/SignUpForm'
import Particles from 'react-particles-js'
import { login } from "../../store/session";
import './Splash.css'

function Splash() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const [loginOpen, setLoginOpen] = useState()
    const [signupOpen, setSignupOpen] = useState()


    if (user) {
        return <Redirect to="/" />;
    }

    const demoLogin = async () => {
        await dispatch(login("demo@aa.io", "password"));

    }
    return (
        <div className="splashmaster fromalbum font-thin headers__colors2">
            {loginOpen && <div className='login__parent'><LoginForm /></div>}
            {signupOpen && <div className='signup__parent'><SignUpForm /></div>}
            <div className="welcometext font-bold"> Welcome to Auralfy</div>
            <span onClick={() => { return (setLoginOpen(false), setSignupOpen(true)) }}>SIGNUP</span>
            <span onClick={() => { return (setLoginOpen(true), setSignupOpen(false)) }}>LOGIN</span>
            <span onClick={() => demoLogin()}>DEMO USER</span>
            <span onClick={() => { return (setLoginOpen(false), setSignupOpen(false)) }}>X</span>

            <div className='splashtop'></div>
            <div className='splashtop'></div>
            <div className='splashleft'></div>
            <div className='splashright'></div>
            <div className='splashbottom'></div>

            {<Particles id='particles' style={{ position: "absolute", width: "100%", top: "189px", height: "100%", left: "44px", zIndex: "0" }}
            />}
        </ div>
    )



}

export default Splash
