import React from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
const Navbar = () => {
  const {user,logout,setLoading} = UseAuth()
  const handleSignout =()=>{
      logout()
      .then()
      .catch()
    
  }
  console.log(user)
  const list = <>
       <li><NavLink to='/'  className={({ isActive}) => isActive ? "text-[#990000] bg-white text-xl font-normal border border-white border-solid" : "text-xl text-white font-normal"}>Home</NavLink></li>
       {
         user && <><li><NavLink to= '/updateprofile'  className={({ isActive}) => isActive ? "text-[#990000] bg-white text-xl font-normal border border-white border-solid" : "text-xl text-white font-normal"}>Update Profile</NavLink></li>
         <li><NavLink to= '/Policy'  className={({ isActive}) => isActive ? "text-[#990000] bg-white text-xl font-normal border border-white border-solid" : "text-xl text-white font-normal"}>Policy</NavLink></li></>
       }
  </>
  
    return (
        <div className='max-w-[1440px] mx-auto bg-[#990000] '>
        <div className="navbar  p-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        {
          user && <>
          <li><Link to='/updateprofile'>Update Profile</Link></li>
          <li><Link to='/Policy'>Policy</Link></li>
          </>
        }
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl md:text-3xl font-bold text-white"><span className='text-yellow-300'>My</span>Property</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  
  <div className="navbar-end">
  {
    user? <div className="avatar ml-3">
      
    <div className="w-12 rounded-full cursor-pointer">
      <img src= {user.photoURL} title={user.displayName} />
      
    </div>
    <button onClick={()=>handleSignout()} className='p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300'>Logout</button>
  </div>:
    <Link to='/login'  className="p-3 rounded-lg ml-3 text-white font-bold bg-yellow-300">Login</Link>
  
  }
  </div>
</div>
        </div>
    );
};

export default Navbar;