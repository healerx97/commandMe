import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser, setTasks, selectTasks} from '../slices/theSlice'
import SentCard from './SentCard'

function Commands() {
    const sentData = useSelector(selectTasks)
    console.log(sentData.sent)
    const renderSent = sentData?.sent.map((task)=> <SentCard task={task}/>)
    return (
        <div class='container flex-col p-3 mx-auto'>
            <div class='mb-7 font-bold text-3xl text-center'>
                Commands
            </div>
            {renderSent}
        </div>
    )
}

export default Commands
