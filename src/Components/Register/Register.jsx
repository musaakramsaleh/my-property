import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseAuth from '../../Hooks/UseAuth';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from 'react-icons/go';
const Register = () => {
    const { createUser,updateuserProfile } = UseAuth()
    const [show ,setShow] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const {email,password,fullName,imageUrl} =data
        console.log("Nae",fullName,imageUrl)
        if(!/[A-Z]/.test(password)){
          return toast("Password should have a uppercase letter")
        }
        if(!/[a-z]/.test(password)){
          return toast("Password should have a lowercase letter")
        }
        if(password.length <6){
          return toast("Password have to be 6 character")
        }
        createUser(email,password)
        .then(()=>{
          updateuserProfile(fullName,imageUrl).then(()=>{
            alert('Successfully login')
            navigate(from);
          })
        
        })
    };
  
    return (
        <div>
          <Helmet><title>myProperty-login</title></Helmet>
            <div className="hero max-w-[1440px] mx-auto pb-10 md:mb-44 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-16">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("fullName", { required: true })} 
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                />
                                {errors.fullName && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })} 
                                    placeholder="Email"
                                    className="input input-bordered"
                                />

                                {errors.email && <span>This field is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image url</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("imageUrl", { required: true })} 
                                    placeholder="Your Image"
                                    className="input input-bordered"
                                />
                                {errors.imageUrl && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center gap-2'>
                                <input
                                    type={show?"text":"password"}
                                    {...register("password", { required: true })}
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                {
                                  show?<FaEye onClick={()=>setShow(!show)} />:
                                  <GoEyeClosed onClick={()=>setShow(!show)} className='text-black' />
                                }
                                </div>
                                {errors.password && <span>This field is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-[#990000] text-white font-semibold">Register</button>
                                <p>Already have an account? <Link to='/login' className='text-blue underline text-blue-700'>Login</Link></p>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
