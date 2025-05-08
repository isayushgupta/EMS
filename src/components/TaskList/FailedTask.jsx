import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="h-full bg-[rgb(239,68,68,0.9)] shrink-0 w-[300px] rounded-xl p-5">
    <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
        <h4 className="text-sm">{task.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl  font-semibold">{task.title}</h2>
    <p className="taskDescription h-1/2  overflow-y-auto mt-1">
    {task.description}
    </p>

    <div className="flex justify-between mt-3">
        <button className="bg-green-600 active:bg-green-700 rounded py-1 px-2 text-sm">Mark as completed</button>
    </div>
</div>
  )
}

export default FailedTask