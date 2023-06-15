"use client"
import getUser from "@/lib/getUser"
import getUserPosts from '@/lib/getUserPosts'
import { useEffect, useState } from "react"
import Post from "./Post"

const User = ({ params }) => {
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        getUser(params.userId).then((res)=> setUser(res));
        getUserPosts(params.userId).then((res)=> setPosts(res))

    }, [])
     
  return (
    <div className="flex flex-col m-5 p-5  justify-center items-center ">
        <div className="user flex-col p-5 m-5">
            <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-teal-600"> 
            {user.name}
            </h1>
            
            <div className="user-detail my-5 text-gray-600 flex justify-between ">
                <a href="" > {user.website} </a>
                <a href="" className=" hover:text-gray-300"> {user.email} </a>
            </div>
        </div>
        
        <div>
            <Post posts={posts} />
        </div>

    </div>
  )
}

export default User