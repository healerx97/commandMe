import React from 'react'
import { useSelector } from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {selectUser} from '../slices/theSlice'

function NavBar({handleLogout}) {
    const history = useHistory()
    let user = useSelector(selectUser)
    function linkLogin() {
        if (user) {
            handleLogout()
        } else {
            history.push('/login')
        }
    }
    console.log(user)
    return (
        <nav class="bg-white container flex items-center py-4 mt-4 p-3 mx-auto">
            <div class="py-1">
                <img class="w-12 bg-blue-700" src="/fbicon.png" alt=""/>
            </div>
            <h2 class='mx-5 uppercase py-1 px-2'>
                Account: {user?.name}
            </h2>
            <ul class="hidden sm:flex flex-1 justify-end items-center gap-12 text-black uppercase text-xs">
                <Link to='/commands'>
                    <li class="cursor-pointer hover:shadow-md rounded px-5 py-3 hover:bg-gray-100"> Sent </li>
                </Link>
                <Link to='/requests'>
                    <li class="cursor-pointer hover:shadow-md rounded px-5 py-3 hover:bg-gray-100"> Receieved </li>
                </Link>
                <Link to='/create'>
                    <li class="cursor-pointer hover:shadow-md rounded px-5 py-3 hover:bg-gray-100"> Create </li>
                </Link>
                <button onClick={linkLogin} class="rounded bg-red-300 text-black py-3 px-4 uppercase">{user? "Logout":"Login"}</button>
            </ul>
            <div class="flex sm:hidden flex-1 justify-end"> 
                <i class="text-2xl fas fa-bars cursor-pointer"></i>
            </div>
        </nav>
    )
}

export default NavBar
