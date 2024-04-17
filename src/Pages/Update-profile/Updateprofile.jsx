import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseAuth from '../../Hooks/UseAuth';

const Updateprofile = () => {
    const {user,updateuserProfile} = UseAuth()
     const handlechange= e =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.photoURL.value
        updateuserProfile(name,image).then(()=>{
            alert('Successfully done')
            window.location.reload()
          }
    )}
    return (
        <div className='max-w-[1440px] lg:mx-auto pb-[132px] text-black text-2xl'>
            <Helmet><title>myProperty- update Profile</title></Helmet>
            <div className="avatar">
  <div className="w-64 mt-10 rounded-xl ">
    {
        user?<img src= {user.photoURL} />:<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    }
  </div>
  </div>
  <div className='mt-10 text-black text-2xl '>
    <h2 className='capitalize'>Name:  {user.displayName}</h2>
    <h2>Email:  {user.email}</h2>
    <div className='max-w-[300px] '>
        <h2>photo-url:</h2>
  <h2 className='break-words'>{user.photoURL}</h2>
</div>
  </div>
     <h2 className='mt-10 text-3xl'>Want to change name and photo</h2>
     <form onSubmit={handlechange} className='mt-5 flex flex-col md:w-1/2 gap-5' >
        <input className='border p-4 border-black'  type="text" name= 'name' placeholder='name' />
        <input className='border p-4 border-black' type="text" name= 'photoURL' placeholder='photourl' />
        <input type="Submit" value='Save Changes' className='p-4 text-white bg-[#990000]'/>
     </form>

        </div>
    );
};

export default Updateprofile;