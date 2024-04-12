import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'



function PostCard({$id , title, featuredImage}) {
  return (
   <Link to={`/post ${$id}`}>

    <div className='w-full bg-gray-50 rounded-xl p-4'>
      <div className='w-full justify-center mb-4'>
        <img  className='rounded-xl ' src={appwriteService.getFilePreview(featuredImage)} alt={title} />
      </div>

      <h2
      
      className='text-gray - bg-stone-800'
      
      >{title}</h2>
    </div>

   </Link>
  )
}

export default PostCard