import React from 'react'

const CreateTask = () => {
  return (
    <div className=' mt-10 flex items-center'>
                <form className=' rounded-lg bg-[#1c1c1c] w-full flex flex-wrap p-12 gap-10 justify-between'>

                    <div className='w-[45%] min-w-fit shrink-0 text-xl flex flex-col justify-between gap'>

                    <div>
                        <label htmlFor="title" className='block mb-2 '>Task Title  </label>
                        <input id='title' type="text" placeholder='Title' className='w-full border-white outline-none border-2 bg-transparent text-base rounded-lg py-1 px-3 '/>

                    </div>


                    <div>
                        <label htmlFor="date" className='block mb-2 mt-3'>Date  </label>
                        <input id='date' type="date" className=' border-white outline-none border-2 bg-transparent text-base rounded-lg py-1 px-5 active:bg-white '/>

                    </div>

                    <div>
                        <label htmlFor="to" className='block mb-2 mt-3'>Assign To  </label>
                        <input id="to" type="text" placeholder='Employee Name' className='w-full border-white outline-none border-2 bg-transparent text-base rounded-lg py-1 px-3 '/>

                    </div>

                    <div>
                        <label htmlFor="category" className='block mb-2 mt-3'>Category  </label>
                        <input type="text" placeholder='Design, Development, etc..' className='w-full border-white outline-none border-2 bg-transparent text-base rounded-lg py-1 px-3 '/>

                </div>
                    </div>


                    <div className='text-xl w-[45%]  shrink-0'>

                    <div className=''>
                        <label htmlFor="description" className='block mb-2'>Description  </label>
                        <textarea name="" id="description" className='w-full border-white outline-none border-2 bg-transparent rounded-lg p-5 text-base' cols={"30"} rows={"8"}></textarea>

                    </div>

                    <button className='w-full rounded-lg py-1 mt-3 text-center bg-green-600 active:bg-green-700'>Create Task</button>
                    </div>

                </form>
            </div>
  )
}

export default CreateTask