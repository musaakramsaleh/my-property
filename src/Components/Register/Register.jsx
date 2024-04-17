import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="hero max-w-[1440px] mx-auto pb-10  md:mb-44 mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="p-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='email' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image url</span>
          </label>
          <input type="text" name='image-url' placeholder="your image" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#990000] text-white font-semibold">Register</button>
          <p>Already have an account?<Link to='/login' className='text-blue underline text-blue-700'>Login</Link></p>
        </div>
      </form>
      <div className='flex justify-around'>
      <button className='p-3 bg-[#990000] rounded-lg text-white font-semibold mb-4 text-xl'>Google Login</button>
      <button className='p-3 bg-[#990000] rounded-lg text-white font-semibold mb-4 text-xl'>Github Login</button>
      </div>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Register;