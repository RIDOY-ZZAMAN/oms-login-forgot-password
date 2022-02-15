import React from 'react';
import { Link } from 'react-router-dom';
import './ChangePassword.css';
import oms from '../../images/oms.png';
import key from '../../images/key.png';
import leftArrow from '../../images/leftarrow.png';

const ChangePassword = () => {
    return (
        <div className='changePassword-page'>
            <div className='changePassword-background'>
                <div className="changePassword-left-background">
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
                <div className="changePassword-right-background">
                </div>
            </div>

            <div className='changePassword-container'>
                <div>
                    <h1>Change Password</h1>
                </div>
                <form action="">
                    <div className='user-new-password'>
                        <label htmlFor="">Enter New Password <span className='important'>*</span></label>
                        <div className='user-password-box'>

                            <img className='changePassword-page-icon' src={key} alt="" />   <input type="password" placeholder='Enter New Password' />
                        </div>
                    </div>
                    <div className='user-confirm-password'>
                        <label htmlFor="">Confirm Password <span className='important'>*</span></label> <br />
                        <div className='user-password-box'>
                            <img className='changePassword-page-icon' src={key} alt="" />
                            <input type="password" placeholder='Enter Confirm Password' />
                        </div>
                    </div>
                    <button type='submit'>Apply Changes</button>
                </form>
                <div className='back-to-home'>
                    <Link to={'/'}> <img src={leftArrow} alt="" /> Back To Login</Link>
                </div>


            </div>

        </div>
    );
};

export default ChangePassword;