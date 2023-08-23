import Link from 'next/link'

async function getData() {
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
  const data= await res.json()
  // console.log(data);
 
  if (!res.ok) {
   
    throw new Error('Failed to fetch data')
  }
 
  return data;
}


async function blog() {
  const data =await getData()
  // console.log(data);
  return (
    <div className='grid gap-3 sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >
     
     {data.map((items)=>(
       <div className="card w-96 bg-base-100 shadow-xl">
       <figure className="px-10 pt-10">
         <img src={items.img} alt="Shoes" className="rounded-xl" />
       </figure>
       <div className="card-body items-center text-center">
         <h2 className="card-title">{items.title}!</h2>
         <p>{items.short}</p>
         <Link href={`/blog/${items.id}`}>
         <button className="btn btn-primary">More info</button>
         </Link>
       </div>
     </div>
     ))}
       </div>
  )
}

export default blog