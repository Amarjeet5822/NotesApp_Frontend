import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function HomePage() {
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()
  useEffect( () => {
    const token = localStorage.getItem("token")
    console.log(token)
    const getNotes = async () => {
      try {
        const response = await fetch("http://localhost:8080/notes",{
          method: "GET",
          headers:{
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
          },
        });
        const data = await response.json();
        setNotes(data.notes);
      } catch (error) {
        console.log(error)
      }
    }
    getNotes();
  },[])

  const clickHandler = () => {
    navigate("/addnotes")
  }
  console.log("line 21 ",notes);
  return (
    <div className='max-w-7xl m-auto'>
      <div className='max-w-4xl  m-auto flex justify-end px-5 py-2'>
        <button className='bg-blue-200 py-1 px-3 mt-1 rounded-md hover:bg-blue-400 hover:text-white ' onClick={clickHandler}>Add Notes</button>
      </div>
      <div className='max-w-4xl m-auto rounded-md p-5  bg-gray-300'>
        
        <p className='font-medium shadow-md text-2xl text-center bg-white rounded-md py-2 mb-2'>{notes && notes.length!=0 ? "All the Notes": "Notes Not Available"}</p>
        <div className='flex flex-col justify-between gap-2' >
          { notes && notes.length!==0 ? 
          notes.map((item)=>
                   <div className='shadow-md rounded-md bg-white flex flex-col py-3 pl-2' key={item._id}>
                      <p>{item.title}</p>
                      <p>{item.description}</p>
                  </div> 
            ) : ""
          }
        </div>
         
      </div>

    </div>
  )
}

export default HomePage