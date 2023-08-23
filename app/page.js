
async function getData() {
  const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
  const data= await res.json()
 
  if (!res.ok) {
   
    throw new Error('Failed to fetch data')
  }
 
  return data;
}

export default async function Home() {
  const data =await getData()

  return (
    <div className="container mx-auto " >
       <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  " >
    

    {data.map((itmes)=>(
      <div className="card m-5 bg-base-100 shadow-xl ">
       <figure><img src={itmes.img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{itmes.name}</h2>
        <p>{itmes.short}</p>
       
      </div>
    </div>
    ))}
     
    </div>
    </div>
  )
}
