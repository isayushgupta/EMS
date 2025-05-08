import React from 'react'

const NewTask = () => {
  return (
    <div className="h-full bg-[rgb(2,132,199,0.9)] shrink-0 w-[300px] rounded-xl p-5">
    <div className="flex justify-between items-center">
        {/* <h5 className=''></h5> */}
        <h3 className="bg-red-600 text-xs rounded-lg px-2 py-1">{task.priority}</h3>
        <h4 className="text-sm">{task.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl  font-semibold">{task.title}</h2>
    <p className="taskDescription h-1/2  overflow-y-auto mt-1">
    {task.description}
    </p>

    <div className="flex justify-between mt-3">
        <button className="w-full bg-blue-600 active:bg-blue-700 rounded py-1 px-2 text-sm">Accept Task</button>
      
    </div>
</div>
  )
}

export default NewTask