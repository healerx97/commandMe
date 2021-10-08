import React from 'react'

function SentCard({task}) {
    async function handleReview() {
        const res = await fetch(`/review/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (res.ok) {
            console.log('reviewed')
        }
    }
    return (
        <div class='flex-col rounded-2xl bg-indigo-50 shadow-sm p-1 mb-4'>
            <div class='font-bold ml-6 mt-3 text-xl'>
                {task.title}
            </div>
            <div class = 'flex p-3'>
                <p>task details</p>
            </div>
            <div class='flex items-center'>
                <div class='justify-start text-gray-500 font-light ml-6'>Sent to: {task.receiver.name}</div>
                <div class='flex flex-1 justify-end gap-6 mr-6'>
                    <button onClick= {handleReview} class='flex shadow-md rounded-xl bg-blue-200 py-2 px-5'>Review</button>
                </div>
            </div>
        </div>
    )
}

export default SentCard
