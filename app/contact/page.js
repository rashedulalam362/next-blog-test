import React from 'react'

function page() {
  return (
    <div className="hero w-full bg-stone-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
      
         <div className="form-control">
          <label className="label">
            <span className="label-text">Meassage..</span>
          </label>
          
          <textarea className='bg-gray-300' name="text-area" id="" cols="30" rows="10"></textarea>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover"></a>
          </label>
        </div>
        <button className="btn btn-active btn-secondary">SUBMETER</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default page