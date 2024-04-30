import React from 'react';


function Login() {

   

    return (

      <>
<section className='login-bg'>
<form name="reg" className='login-form'>
<div className='text-center'><img src="/images/logo.png" alt="logo"/></div>
                <div className='line'></div>
                <p className='registration-text text-center my-2'>Registration with social media</p>
                <a href="#"><div className='text-center mb-5'><img src="/images/google-face.png" alt="icons" /></div></a>

    <label htmlFor="login" className="form-label">User login</label><br />

    <input name="login" id="login" type="login" placeholder="login" className="mb-5 form-control"/><br />

    <label htmlFor="password" className="form-label">User password</label><br />

    <input name="password" id="password" type="password" placeholder="password" className="mb-5 form-control"/><br />

    <label htmlFor="email" className="form-label">Email</label><br />

    <input name="email" id="email" type="email" placeholder="email" className="mb-5 form-control"/><br />

    <label htmlFor="fname" className="form-label">First Name</label><br />

    <input name="fname" id="fname" type="text" placeholder="First Name" className="mb-5 form-control"/><br />

    <label htmlFor="sname" className="form-label">Second Name</label><br />

    <input name="sname" id="sname" type="text" placeholder="Second Name" className="mb-5 form-control" /> <br />

    <button  type="submit" onClick="registr()" className="btn-login mb-5 form-control">Registration</button>

    </form>

</section>


        </>
      
    );
}


export default Login;