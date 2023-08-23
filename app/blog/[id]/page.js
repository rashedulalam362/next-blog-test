async function getData(id) {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    const data= await res.json()

    
     
 if (!res.ok) {
     
      throw new Error('Failed to fetch data')
    }
    return data.postDetails;
  }
  

async function page({params}) {
    const id = params.id;
    

    const singlePost =await getData(id)
  return (
    <div className="flex justify-center mt-10">
     <div className="card  w-96 bg-base-100 shadow-xl">
  <figure><img src={singlePost?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{singlePost?.title}</h2>
    <p>{singlePost?.content.slice(0,200)}</p>
    
  </div>
</div>
</div>
  )
}

export default page