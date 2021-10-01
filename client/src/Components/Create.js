import React, {useState, useEffect} from 'react'

function Create() {
    const [taskName, setTaskName] = useState('')
    const [reciever, setReciever] = useState('')
    const [userList, setUserList] = useState([])
    const [autoC, setAutoC] = useState([])
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
    const [due_date, setDueDate] = useState(tomorrow)
    // fetch users--------------------------------------------------------
    useEffect(() => {
        async function getUsers() {
            const res = await fetch('/users')
            if (res.ok) {
                const data = await res.json()
                setUserList(data)
                console.log(data)
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
        console.log(temp)
    }

    return (
        <section class='relative'>
            <div class='flex-col container p-3 border mx-auto mt-6 shadow'>
                <div class='flex justify-center'>
                    Create a Task
                </div>
                <form class= 'flex-col items-center mx-10'>
                    <div class='flex-col'>
                    <label class='flex mb-1'>Task Name</label>
                    <input class='flex py-2 px-2 w-full border shadow-md mb-2 rounded' type='text' placeholder='Insert name of task'/>
                    <div class='flex justify-between gap-12 items-center'>
                        <div class='flex-col'>
                            <label class='flex mb-1'>Send to:</label>
                            <input class='flex py-2 px-2 border shadow-md mb-2 rounded' type='text' value={reciever} onChange={(e)=>handleReceiver(e)} placeholder='Receiver'/>
                            
                        </div>
                        <div class='flex-col'>
                            <label class='flex mb-1'>Due date:</label>
                            <input class='flex py-2 px-2 border shadow-md mb-2 rounded' type='date' onChange={(e)=>console.log(Date(e.target.value).valueOf())}/>
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
