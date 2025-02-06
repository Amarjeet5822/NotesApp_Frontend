import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const createdNotes = () => toast("Note Created");
  const errToCreate = () => toast("Please try again!");
  const addHandler = async () => {
    const token = localStorage.getItem("token");
    console.log("line 9", token);
    const payload = { title, description };
    console.log("line 11", payload);
    if (!token) {
      navigate("/login");
    }
    try {
      const response = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      createdNotes();
      console.log(data);
      setDescription("");
      setTitle("");
    } catch (error) {
      console.log(error);
      errToCreate();
    }
  };
  return (
    <div className="max-w-5xl m-auto bg-gray-100 h-lvw  py-5">
      <h3 className="text-center w-40 rounded-md font-medium m-auto bg-blue-400">Add Notes </h3>
      <div className="w-80 shadow-md rounded-md flex justify-center flex-col m-auto mt-5 p-2 bg-white ">
        <input
          className="outline-none bg-gray-100 pl-2"
          type="text"
          placeholder="Enter title "
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />{" "}
        <br />
        <textarea
          className="outline-none bg-gray-100 pl-2"
          name="description"
          id=""
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Enter description "
        ></textarea>
        <br />
        <button
          className="bg-blue-400 hover:bg-blue-600 hover:text-white py-1 px-3 rounded-md"
          onClick={addHandler}
        >
          Add
        </button>
        <ToastContainer position="top-center" autoClose={1000} />
      </div>
    </div>
  );
}

export default CreateNotes;
