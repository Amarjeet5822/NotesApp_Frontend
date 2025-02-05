import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function CreateNotes() {
  const [title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const navigate = useNavigate();
  const addHandler = async () => {
    const token = localStorage.getItem("token");
    console.log("line 9", token)
    const payload = { title, description };
    console.log("line 11", payload)
    if(!token){
      navigate("/login");
    }
    try {
      const response = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization":  `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      if(!response.ok){
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      setDescription("")
      setTitle("")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h3>Create Notes </h3>
      <input type="text" placeholder='Enter title ' onChange={ (e) => setTitle(e.target.value)} value={title} /> <br />
      <textarea name="description" id="" onChange={ (e) => setDescription(e.target.value)} value={description} placeholder='Enter description '></textarea><br />
      <button className='bg-blue-200 hover:bg-blue-400 hover:text-white py-1 px-3 rounded-md'
      onClick={addHandler}>Add</button>
    </div>
  )
}

export default CreateNotes