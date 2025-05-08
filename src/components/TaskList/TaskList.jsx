import React from "react";
import AcceptedTask from "./AcceptedTask";
import FailedTask from "./FailedTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  console.log(data);  // object containing user's data

  return (
    <div id="taskList" className=" h-[55%] py-5 w-full mt-14 flex  items-center justify-start gap-5 flex-nowrap overflow-x-auto scroll">

      {data.tasks.map((ele, index) => {

        // return <div>Hii</div>       

        if (ele.active == true) {

          return <AcceptedTask task={ele}></AcceptedTask>
        }

        else if (ele.completed == true) {
          return <CompletedTask task={ele}></CompletedTask>
        }

        else if (ele.NewTask == true) {
          return <NewTask task={ele}></NewTask>
        }

        else {
          return <FailedTask task={ele}></FailedTask>
        }

      })}



    </div>
  );
};

export default TaskList;
