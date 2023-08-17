import React from 'react'
import data from "../../helpers/data"
import Card from "./Card"
import "./Main.scss"

const Main = () => {
  return (
    <div className='container-main'>
    {data.map((item,index)=>{
      return <Card {...item} key={index}/>
    })}
    </div>
  )
}

export default Main


//! farkli tarzda bir props  {...item}
//! export data    import {data} from '../../helpers/data'   bu sekilde import edilir.
//! export Default data import data from "../../helpers/data" bu sekilde import edilir. 