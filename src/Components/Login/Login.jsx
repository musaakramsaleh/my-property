import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const {loginUser,googleLogin,githubLogin} = UseAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    const handlesociallogin = socialProvider =>{
        socialProvider()
        .then(result=>{
          if(result.user){
            navigate(from)
            alert('Successfully login')
          }
        })
    }
   
    const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {email,password} =data
    loginUser(email,password)
    .then(result=>{
      if(result.user){
        alert('Successfully login')
        navigate(from)
      }
    })
    .catch(error=>{
      toast("Invalid credentials")
    }) 
};
    return (
      
        <div>
          <Helmet><title>myProperty-login</title></Helmet>
            <div className="hero max-w-[1440px] mx-auto pb-10  md:mb-44 mt-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="p-16">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          name='email' 
          placeholder="email" 
          className="input input-bordered"
          {...register("email", { required: true })} 
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password" 
          name='password' 
          placeholder="password" 
          className="input input-bordered"
          {...register("password", { required: true })} 
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#990000] text-white font-semibold">Login</button>
          <p>Do not have an account?<Link to='/Register' className='text-blue underline text-blue-700'>Register</Link></p>
        </div>
      </form>
      <div className='flex justify-around'>
                            <button onClick={()=>handlesociallogin(googleLogin)} className='p-2 bg-[#990000] rounded-lg text-white font-semibold mb-4 text-[16px]'>Google Login</button>
                            <button onClick={()=>handlesociallogin(githubLogin)} className='p-2 bg-[#990000] rounded-lg text-white font-semibold mb-4 text-[16px]'>Github Login</button>
                        </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Login;