import React from 'react'

const Post = ({posts}) => {
    console.log(posts)
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-3 '>
            {posts.map((post) =>(
                <div key={post.id} className='m-5 p-5 bg-gradient-to-r rounded-2xl from-teal-500 to-purple-600  hover:text-gray-900 active:border '>
                    <div className='flex-wrap title font-semibold py-5'> 
                        <h3> {post.title} </h3> 
                    </div>
                    <div className='body'>
                        <p>{post.body}</p>  
                    </div>
                </div>
            ))}
    </div>
  )
}

export default Post