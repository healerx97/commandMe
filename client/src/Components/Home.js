import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser, setTasks, selectTasks} from '../slices/theSlice'

function Home() {
    const taskData = useSelector(selectTasks)
    let tasks = taskData?.received
    //rendering tasks by day of week(n), sunday=0 saturday=6------------------------
    let renderTasks = (n) => {
        let filtered = tasks.filter((task)=> {
            let d = new Date(task['due_date'])
            return (d.getDay() == n)
        })
        return filtered.map((f)=> <div>{f.title}</div>)
        
    }
    
    return (
        <div class='relative'>
            <div class='container mx-auto'>
                <div class='py-3 flex-col items-center border'>
                    <h2 class='flex font-bold uppercase p-3'>Title</h2>
                    <div class='flex flex-col lg:flex-row items-center p-3 gap-6'>
                        <div class='border p-3 flex-col w-full flex-1 bg-red-100 shadow rounded-md'>
                            <p class='text-white bg-purple-300 rounded w-max p-3'>Due This Week</p>
                            <div class='border-b border-black font-bold'>Monday</div>
                            {renderTasks(1)}
                            <div class='border-b border-black font-bold'>Tuesday</div>
                            {renderTasks(2)}
                            <div class='border-b border-black font-bold'>Wednesday</div>
                            {renderTasks(3)}
                            <div class='border-b border-black font-bold'>Thursday</div>
                            {renderTasks(4)}
                            <div class='border-b border-black font-bold'>Friday</div>
                            {renderTasks(5)}
                        </div>
                        <div class='border p-3 flex-col flex-1 w-full bg-blue-200 shadow rounded-md'>
                        <p class='text-white bg-purple-300 rounded w-max p-3'>Due This Month</p>
                            <div>Insert Calendar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
