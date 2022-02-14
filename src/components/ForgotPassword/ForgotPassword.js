import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';
import oms from '../../images/oms.png';
import email from '../../images/email.png';
import leftArrow from '../../images/leftarrow.png'


const ForgotPassword = () => {
    return (
        <div className='forgotPassword-page'>
            <div className='forgotPassword-background'>
                <div className="forgotPassword-left-background">
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
                <div className="forgotPassword-right-background">
                </div>
            </div>

            <div className='forgotPassword-container'>
                <div>
                    <h1>Forgot your password</h1>
                    <p>Please enter the email address you'd like your Password reset information sent to</p>
                </div>

                <form action="">
                    <div className='user-email'>
                        <label htmlFor="">Enter email address <span className='important'>*</span></label>
                        <div className='user-email-box'>

                            <img className='login-page-icon' src={email} alt="" />   <input type="email" placeholder='Enter your email id' />
                        </div>
                    </div>
                    <button type='submit'>Request reset link</button>
                </form>
                <div className='back-to-home'>
                    <Link to={'/'}> <img src={leftArrow} alt="" /> Back To Login</Link>
                </div>
            </div>


        </div>
    );
};

export default ForgotPassword;