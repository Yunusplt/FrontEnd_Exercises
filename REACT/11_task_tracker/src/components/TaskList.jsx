import React from "react";
import { TiDelete } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";


const TaskList = ({ tasks, setTasks }) => {
    
    const doneTask=(taskId)=>{
        setTasks(
            tasks.map((item)=>item.id === taskId ? {...item, done : !item.done} : item)
        )
    }

    const deleteTask =(taskId)=>{
        setTasks(tasks.filter((x)=>x.id !== taskId))
    }

  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index} className={task.done ? "task-box-done":"task-box"}>
            <section className="tasks">
              <h2>{task.text}</h2>
              <h5>{task.day}</h5>
            </section>
            <section className="icons">
              <FcApproval cursor="pointer" title="done" onClick={()=>doneTask(task.id)} />
              <TiDelete color="red" cursor="pointer" size="35px" title="delete" onClick={()=>deleteTask(task.id)} />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
