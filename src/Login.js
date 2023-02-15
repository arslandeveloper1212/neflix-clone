import React, { useState } from 'react'
import "./Login.css"
import SignUp from './SignUp';



const Login = () => {
    const [signIn, SetSignIn] = useState(false);
    return (


        <div className="login_all">
            <div className='login_content'>
                <img
                    className='logo_image'
                    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='' />
                <button
                    onClick={() => SetSignIn(true)}
                    style= {{cursor: "pointer"}}
                    className='login_button'>SignIn</button>

                <div className='login_gradient'></div>

                <div className='loginscreen_body'>
                    {signIn ? (
                        <SignUp />
                    ) : (
                    <div>
                    
                    <h1>Unlimited Download for netflix Movie app & TV</h1>
                    <h2>Watch anywhere, cancel at any time</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>


                    <div className='loginScreen_input'>
                        <form>
                            <input type="search" placeholder='Email address' />
                            <button
                                onClick={() => SetSignIn(true)}
                                className='btn_1'> Search </button>
                        </form>
                    </div>
                    
                    </div>
                )}
                    

                </div>


            </div>
        </div>

    )
}





export default Login
