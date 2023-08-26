import React from "react";
import "./GetInfo.css";
import { FaTrash } from "react-icons/fa";
import axios from "axios";


const GetInfo = ({ information, getBilgi,url }) => {

    const deleteBilgi=async(id)=>{
        await axios.delete(`${url}${id}/`)
        getBilgi()
    }

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-end">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {information.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td className="text-end pe-5">
                  <FaTrash 
                  color="red" 
                  size={22} 
                  type="button"
                  onClick={()=>deleteBilgi(item.id)}
                   />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GetInfo;

//todo chatGPT table örnegi

    // <div className="container">
    //   <table className="zebra-table">
    //     <thead>
    //       <tr>
    //         <th>#id</th>
    //         <th>Title</th>
    //         <th>Description</th>
    //         <th>Edit/Delete</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {information.map((item) => {
    //         return (
    //           <tr key={item.id}>
    //             <td>{item.id}</td>
    //             <td>{item.title}</td>
    //             <td>{item.description}</td>
    //             <td>
    //               <FaTrash color="red" />
    //             </td>
    //           </tr>
    //         );
    //       })}
    //     </tbody>
    //   </table>
    // </div>;