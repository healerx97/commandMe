import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser} from '../slices/theSlice'

function Signup() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const dispatch = useDispatch()
    let user = useSelector(selectUser)
    const history = useHistory()

    async function handleSignup(e) {
        e.preventDefault()
        const res = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                name,
                password
            })
        })
        if (res.ok) {
            let data = await res.json()
            dispatch(setUser(data))
            history.push('/')
        } else {
            let data = await res.json()
            setError(data)
        }
    }

    function directLogin() {
        history.push('/login')
    }

    return (
        <section class="relative">
            <div class='container mx-auto flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28 lg:p-8'>
                <div class='flex-col border mx-auto'>
                    <h2 class='flex justify-center text-lg py-3 bg-gray-200 rounded border'>Sign Up!</h2>
                    <form onSubmit={handleSignup} class = 'p-4 w-full'>
                        <div class= 'flex flex-wrap mb-3'>
                            <div class='flex-col p-3'>
                                <label class="block text-gray-500 mb-2">name</label>
                                <input value={name} onChange={(e)=> setName(e.target.value)} type='text' class='block shadow-md border rounded py-1 px-2'/>
                            </div>
                            <div class='flex-col p-3'>
                                <label class="block text-gray-500 mb-2">username</label>
                                <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' class='block shadow-md border rounded py-1 px-2'/>
                            </div>
                        </div>
                        <div class= 'flex flex-wrap'>
                            <div class='flex-col p-3 w-full'>
                                <label class="block text-gray-500 mb-2">password</label>
                                <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='********' class='block w-auto shadow-md border rounded py-1 px-2'/>
                            </div>
                        </div>
                        <div class= 'flex flex-wrap mt-4 justify-center'>
                            <button type = "submit" class='flex py-3 px-7 shadow-md bg-red-300 rounded-xl text-white mx-5'>Sign Up</button>
                            <button type = "button" onClick={directLogin} class='flex self-center text-blue-600 cursor-pointer'>Already have an account?</button>
                        </div>
                        <div class='flex justify-center text-red-600 font-bold py-3'>
                            {error? error.errors : null}
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    )
}

export default Signup
