import React, { useContext } from 'react'
import { StudentContext } from '../App'

const OgrenciItem = () => {

    const {student, changeColor} = useContext(StudentContext)

    console.table(student)

  return (
    <div>
        {student.map((item)=>{
            return(
                <div key={item.id} style={{backgroundColor:item.color}}>
                    <h3>NAME: {item.name}</h3>
                    <h4>EMAIL: {item.email}</h4>
                    <h4>AGE: {item.age}</h4>
                    Color: <input type="text" value={item.color} onChange={(e)=>changeColor(e.target.value, item.id)} />

                </div>
            )
        })}
    </div>
  )
}

export default OgrenciItem