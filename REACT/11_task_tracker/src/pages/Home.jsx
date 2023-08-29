import React, { useState } from 'react'
import TaskAdd from '../components/TaskAdd'
import TaskList from '../components/TaskList'
import data from "../helper/Data"

const Home = () => {

    const[tasks, setTasks] =useState(data)

  return (
    <div>
      <TaskAdd tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Home