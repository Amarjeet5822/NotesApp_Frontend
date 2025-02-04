import React, { useEffect, useState } from 'react'

function HomePage() {
  const [notes, setNotes] = useState([])
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
  console.log("line 21 ",notes);
  return (
    <div>
      <div>
        <h1>{notes && notes.length!=0 ? "All the Notes": "Notes Not Available"}</h1>
        <div>
          {notes.length !=0 ? 
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