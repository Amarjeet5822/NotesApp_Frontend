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
          } 
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
      <div>
        <button className='bg-blue-200 py-1 px-3 mt-1 rounded-md hover:bg-blue-400 hover:text-white ' onClick={clickHandler}>Add Notes</button>
      </div>
      <div className='max-w-5xl m-auto bg-amber-100'>
        
        <h1>{notes && notes.length!=0 ? "All the Notes": "Notes Not Available"}</h1>
        <div>
          { notes && notes.length!==0 ? 
          notes.map((item)=>
                   <div key={item._id}>
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