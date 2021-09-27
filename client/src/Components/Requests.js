import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser, setTasks, selectTasks} from '../slices/theSlice'
import ReceivedCard from './ReceivedCard'

function Requests() {
    const receivedData = useSelector(selectTasks)
    const renderReceived = receivedData?.received.map((task)=> <ReceivedCard task={task}/>)
    return (
        <div class='container flex-col p-3 mx-auto'>
            <div class='mb-7 font-bold text-3xl text-center'>
                Requests
            </div>
            {renderReceived}
        </div>
    )
}

export default Requests
