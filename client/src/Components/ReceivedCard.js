import React from 'react'

function TaskCard({task}) {
    return (
        <div class='flex-col rounded-2xl bg-indigo-50 shadow-sm p-1 mb-4'>
            <div class='font-bold ml-6 mt-3 text-xl'>
                {task.title}
            </div>
            <div class = 'flex p-3'>
                <p>task details</p>
            </div>
            <div class='flex items-center'>
                <div class='justify-start text-gray-500 font-light ml-6'>Receieved from: {task.commander.name}</div>
                <div class='flex flex-1 justify-end gap-6 mr-6'>
                    <button class='flex shadow-md rounded-xl bg-blue-200 py-2 px-5'>Yes</button>
                    <button class='flex shadow-md rounded-xl bg-red-200 py-2 px-5'>No</button>
                </div>
            </div>
        </div>
    )
}

export default TaskCard
