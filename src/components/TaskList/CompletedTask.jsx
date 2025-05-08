import React from 'react'

const CompletedTask = () => {
  return (
    <div className="h-full bg-[rgb(22,163,74,0.6)] shrink-0 w-[300px] rounded-xl p-5">
    <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
        <h4 className="text-sm">{task.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl  font-semibold">{task.title}</h2>
    <p className="taskDescription h-1/2  overflow-y-auto mt-1">
    {task.description}
    </p>

    <div className="mt-3">
        <button className="w-full bg-red-600 py-1 px-2 text-sm rounded active:bg-red-700 text-center">Failed</button>
    </div>
</div>
  )
}

export default CompletedTask