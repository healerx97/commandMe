import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setUser, selectUser} from '../slices/theSlice'
import {useHistory} from 'react-router-dom'



function Create() {
    const history = useHistory()
    const [taskName, setTaskName] = useState('')
    const [receiver, setReciever] = useState('')
    const [userList, setUserList] = useState([])
    const [autoC, setAutoC] = useState([])
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
    const [due_date, setDueDate] = useState(tomorrow)
    let commander = useSelector(selectUser)


    // fetch users--------------------------------------------------------
    useEffect(() => {
        async function getUsers() {
            const res = await fetch('/users')
            if (res.ok) {
                const data = await res.json()
                setUserList(data)
                // console.log(data)
            }
        }
        getUsers()
    },[])

    // implement autocomplete filter -------------------------------------
    function handleReceiver(e) {
        setReciever(e.target.value)
        let input = e.target.value
        let temp = userList.filter((user)=> {
            return (user?.name?.toLowerCase().includes(input.toLowerCase()))
        })
        setAutoC(temp)
        // console.log(temp)
    }
    const renderAutoCList = autoC.map((user)=> {
        return(
            <div onClick={()=> {
                setReciever(user)
                setAutoC([])
            }}
            class='flex py-2 px-2 bg-gray-200 border border-white shadow-md w-48 rounded hover:bg-yellow-200'>{user.name}</div>
        )
    })
    // fetch POST to create task--------------------------------------------
    async function handleCreate(e) {
        e.preventDefault()
        const res = await fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'title': taskName,
                'accepted': false,
                'reviewed': false,
                'commander_id': commander.id,
                'receiver_id': receiver.id,
                'due_date': due_date
            })
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data)
            history.push('/commands')
        }
    }

    return (
        <section class='relative'>
            <div class='flex-col container p-3 border mx-auto mt-6 shadow'>
                <div class='flex justify-center'>
                    Create a Task
                </div>
                <form class= 'flex-col items-center mx-10' onSubmit={(e)=>handleCreate(e)}>
                    <div class='flex-col'>
                    <label class='flex mb-1'>Task Name</label>
                    <input value = {taskName} onChange={(e)=>setTaskName(e.target.value)} class='flex py-2 px-2 w-full border shadow-md mb-2 rounded' type='text' placeholder='Insert name of task'/>
                    <div class='flex justify-between gap-12 items-center'>
                        <div class='flex-col'>
                            <label class='flex mb-1'>Send to:</label>
                            <input class='flex py-2 px-2 border shadow-md mb-2 rounded' type='text' value={receiver.name} onChange={(e)=>handleReceiver(e)} placeholder='Receiver'/>                            
                            <div class='absolute -mt-2'>
                            {renderAutoCList}
                            </div>
                        </div>
                        <div class='flex-col'>
                            <label class='flex mb-1'>Due date:</label>
                            <input class='flex py-2 px-2 border shadow-md mb-2 rounded' type='date' onChange={(e)=>setDueDate(Date(e.target.value))}/>
                        </div>
                        <button class="flex justify-end self-end border shadow-md bg-blue-500 text-white rounded px-3 mb-2 py-2" type='submit'>Command</button>
                    </div>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Create
