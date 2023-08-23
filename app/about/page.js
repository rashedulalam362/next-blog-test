import React from 'react'

function page() {
  return (
    <div className="w-3/4 mx-auto h-full" >
      <h1 className="text-center font-bold capitalize mb-4 ">About us</h1>
   <div className=' flex justify-centre itmes-centre gap-3 w-full mx-auto h-full '>
   
   <div className="bg-red-300 text-justify">
        <p>Sooma solves the email needs of service providers, businesses and partners.</p>
       </div>
       <div className="bg-green-300">
        <p>Founded in 1999, Sooma is a trusted email solutions provider for service providers, businesses and partners.

     <br/>We provide easy maintenance and administration, reducing the total cost of ownership and increasing revenue opportunities as a result of our unique ability to simplify daunting email systems.

     We are a software service provider for< br/>Wtelcos, service providers, carriers, media portals, VARs and companies that make use of email service offerings.</p>
       </div>
   </div>
    </div>
  )
}

export default page