import React, { useEffect, useState } from 'react'
import PostInfo from '../components/PostInfo'
import GetInfo from '../components/GetInfo'
import axios from "axios"

const Home = () => {

    const[information, setInformation] = useState([])
    const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

    const getBilgi = async()=>{                     //! another way 
        const veri = await axios.get(url)           //! axios.get(url).then((res)=>setInformation(res.data))
        setInformation(veri.data)
    }
    useEffect(() => {
        getBilgi()
    }, [])


    const postBilgi = async(postNewVeri)=>{
        await axios.post(url, postNewVeri)
        getBilgi()
    }
    

  return (
    <div>
        <PostInfo postBilgi = {postBilgi}/>
        <GetInfo url={url} information = {information}  getBilgi = {getBilgi}/>
    </div>
  )
}

export default Home