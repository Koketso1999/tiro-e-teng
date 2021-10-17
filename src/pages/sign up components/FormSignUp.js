import React from 'react'

const FormSignUp = () => {
    return (
        <div>
            <form className='form' >
            <h1>Create Account By Filling In the Details</h1>
            <div className='form-inputs'>
                <label id='username' htmlFor='username' className='form-label'>
                    Full Name
                </label>
                <input type='text' className='form-input' name='fullname' placeholder='Enter Full Name' />
                {}
            </div>
            <div className='form-inputs'>
                <label id='username'  htmlFor='email' className='form-label'>
                   Email adress
                </label>
                 <input type='email' className='email-input' name='email' placeholder='Enter Email' />
            </div>
            <div className='form-inputs'>
                <label id='password'  htmlFor='password' className='form-label'>
                   Password
                </label>
                 <input type='password' className='password-input' name='password' placeholder='Enter Password' />
            </div>
            <div className='form-inputs'>
                <label id='password2'  htmlFor='password2' className='form-label'>
                   Confirm Password
                </label>
                 <input type='password' className='password2-input' name='password2' placeholder='Confirm Password' />
            </div>
            <button className='form-input-button' type='submit'>Sign Up</button>
            <span className='form-input-login'>Already Have An Account? Login <a href='#'>here</a></span>
           </form>
        </div>
    )
}

export default FormSignUp;
