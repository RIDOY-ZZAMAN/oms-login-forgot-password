import React from 'react';
import './Login.css';
import oms from '../../images/oms.png'
import user from '../../images/user.png';
import password from '../../images/password.png';
import view from '../../images/eye.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-page'>
            <div className='login-background'>
                <div className="login-left-background">
                    <img className='oms-logo' src={oms} alt="" />
                    <div className='footer'>
                        <div className='footer-items'>
                            <div className='oms-use-link'>
                                How to use OMS ? <Link to={'/#'}>Click Here</Link>
                            </div>
                            <div className='footer-links' >
                                <Link to="/#">Help</Link>
                                <Link className='middle-link' to="/#">Privacy</Link>
                                <Link to="/#">Terms</Link>
                            </div>
                        </div>
                        <p className='copy-right-text'>Aqgromalin Farmtech Services Private Limited &copy; 2022 | All right reserved</p>
                    </div>
                </div>
                <div className="login-right-background">
                </div>
            </div>


            <div className='login-container'>
                <div>
                    <h1>Welcome to</h1>
                    <p>Order Management Login System</p>
                </div>
                <form action="">
                    <div className='user-name'>
                        <label htmlFor="">User Name <span className='important'>*</span></label>
                        <div className='user-name-box'>

                            <img className='login-page-icon' src={user} alt="" />   <input type="text" placeholder='User Name' />
                        </div>
                    </div>
                    <div className='password'>
                        <label htmlFor="">Password <span className='important'>*</span></label> <br />
                        <div className='password-box'>
                            <img className='login-page-icon' src={password} alt="" />
                            <input type="password" placeholder='Password' /> <img className='login-page-icon-view' src={view} alt="" />
                        </div>
                    </div>
                    <button type='submit'>LOGIN</button>
                </form>

                <div className='forgot-remember'>
                    <Link to={'/forgotpassword'}>Forgot Password ?</Link>
                    <div>
                        <input type="checkbox" /> <span className='rememberme-text'>Remember Me</span>
                    </div>
                </div>
                <div className='register'>
                    <h4>Don't have an account? <Link className='register-link' to={'/#'}>Register</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;