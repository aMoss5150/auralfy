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
            <div className="welcometext font-bold"> Welcome to Auralfy</div>
            <span className={`pointer ${loginOpen || signupOpen ? "hidden" : ""}`} onClick={() => { return (setLoginOpen(false), setSignupOpen(true)) }}>SIGNUP</span>
            <span className={`pointer ${loginOpen || signupOpen ? "hidden" : ""}`} onClick={() => { return (setLoginOpen(true), setSignupOpen(false)) }}>LOGIN</span>
            <span className={`pointer ${loginOpen || signupOpen ? "hidden" : ""}`} onClick={() => demoLogin()}>DEMO USER</span>
            {loginOpen && <div className='login__parent'><LoginForm /></div>}
            {signupOpen && <div className='signup__parent'><SignUpForm /></div>}
            {loginOpen && <span className="pointer icons fas fa-angle-double-left" onClick={() => { return (setLoginOpen(false), setSignupOpen(false)) }}></span>}
            {signupOpen && <span className="pointer icons fas fa-angle-double-left" onClick={() => { return (setLoginOpen(false), setSignupOpen(false)) }}></span>}

            <div className='splashtop'></div>
            <div className='splashtop'></div>
            <div className='splashleft'></div>
            <div className='splashright'></div>
            <div className='splashbottom'></div>

            {<Particles id='particles' style={{ position: "absolute", width: "100%", top: "189px", height: "100%", left: "44px", zIndex: "0" }}
            />}
            {/* <Particles
                params={{
                    polygon: {
                        enable: true,
                        type: 'inside',
                        move: {
                            radius: 10
                        },
                        url: 'drake.svg',
                        draw: "enable"
                    }
                }} /> */}
        </ div>
    )



}

export default Splash
