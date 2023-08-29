import React, { useState } from "react";
import moment from "moment";

const TaskAdd = ({ tasks, setTasks }) => {
  console.log(tasks);

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [formBar, setFormBar] = useState(false);
  const task_id = moment(day).format("MDYYYYHMM");

  const addTask = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: task_id,
        text: text.charAt(0).toUpperCase() + text.slice(1),
        day: moment(day).format("MMM Do [at] h:mma"),
        done: false,
      },
    ]);

    //! eger inputlar value={day} value={text} olsaydi bunlar 24ve25 satirdaki sekilde form reset olurdu.
    // setText("");
    // setDay("");
    e.target.reset();
  };

  console.log(tasks);

  return (
    <div className="container-add">
      <header>
        <h1>Task Tracker</h1>
        <button className={formBar? "button_2":"button_1"} onClick={()=>setFormBar(!formBar)}>Add a new task</button>
      </header>
      {formBar ? (
        <>
          <form onSubmit={addTask}>
            <div className="form-control">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                placeholder="Add Task"
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="day">Day & Time</label>
              <input
                type="datetime-local"
                id="day"
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
            <div className="buton">
              <button type="submit">SUBMIT</button>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskAdd;
