"use client"
import getAllUsers from '@/lib/getAllUsers'
import { useState, useEffect } from "react"
import Link from "next/link"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect (()=> {
        getAllUsers()
        .then((res)=> setUsers(res))
    }, [])
  
  return (
    <div className=' flex flex-col m-5 p-5  justify-center items-center'>
        
        <h1 className='p-5 m-5 font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-500 to-green-200'>
            users
        </h1>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-3 '>
            {users.map((user) => (
                    <div key={user.id} className='m-5 p-5 lg:min-w-fit rounded-lg bg-slate-400 bg-opacity-20 hover:text-blue-400 active:bg-slate-900 '>
                        <Link href={`/users/${user.id}`}>
                        
                            <div className='text '>
                                <h1 className='font-extrabold my-3  sm:text-5xl text-3xl  '>{user.name}</h1>
                                <p>username: {user.name}</p>
                                <p>{user.email} </p>
                                <p>{user.phone} </p>

                            </div>
                            
                        </Link>
                    </div>
        ))}
        </div>        

    </div>
  )
}

export default Users