import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser} from '../slices/theSlice'
import {useHistory} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()
    let user = useSelector(selectUser)

    async function handleLogin(e) {
        e.preventDefault()
        const res = await fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                password
            })
        })
        if (res.ok) {
            const data = await res.json()
            dispatch(setUser(data))
            history.push('/')
        }
    }

    function directSignup() {
        history.push('/signup')
    }


    return (
        <section class="relative">
            <div class='bg-gray-100'>
            <div class='container mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 lg:p-8'>
                <div class='flex flex-1 flex-col items-center lg:items-center mt-28'>
                    <h2 class="text-blue-400 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">Login</h2>
                    <form class='flex-col flex w-96 items-center'>
                        <div class='flex-col flex w-3/4 mb-4'>
                            <label class='block font-bold ml-2'>username</label>
                            <input type='text' value = {username} onChange={(e)=>setUsername(e.target.value)}placeholder='username' id='username' class='block shadow-md border rounded py-1 px-2'/>
                        </div>
                        <div class='flex-col flex w-3/4 mb-4'>
                            <label class='block font-bold ml-2'>password</label>
                            <input type='password' value = {password} onChange={(e)=>setPassword(e.target.value)} placeholder='********' id='password' class='shadow-md border rounded py-1 px-2'/>
                        </div>
                        <div class="flex justify-center flex-wrap gap-6">
                            <button onClick={handleLogin} type='submit' class='shadow-md py-3 px-6 rounded-md transition duration-300 bg-purple-500 text-white hover:bg-opacity-25 uppercase'>Login</button>
                            <button onClick={directSignup} type='button' class='shadow-md py-3 px-6 rounded-md transition duration-300 bg-green-500 text-white hover:bg-opacity-25 uppercase'>Sign up</button>
                        </div>
                    </form>
                </div>
                
            </div>
            </div>
        </section>
    )
}

export default Login
