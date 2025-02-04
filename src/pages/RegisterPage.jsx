import React, { useState } from "react";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const formHandler = (event) => {
    event.preventDefault();
    const payload = {
      name,
      email,
      pass,
    };
    console.log(payload);
    const registerUser = async (payload) => {
      console.log(payload);
      
      try {
        // further I will implement dotenv on backend url
        const response = await fetch("https://notesapp-bc.onrender.com/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        console.log("line 24 ", data);
      } catch (error) {
        console.log(error);
      }
    };
    registerUser(payload);
  };
  return (
    <div>
      <form
        onSubmit={formHandler}
        className="flex flex-col justify-center items-center mt-5"
      >
        <p className="text-2xl font-medium py-4">Register Please</p>
        <div>
          <label htmlFor="name">
            Name :
            <input
              className="bg-gray-100 ml-2 rounded"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="email">
            Email :
            <input
              className="bg-gray-100 ml-2 rounded"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              className="bg-gray-100 ml-2 rounded"
              type="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
          </label>
          <br />
          <br />
        </div>
        <div>
          <input
            className="bg-blue-300 hover:bg-blue-600 hover:text-white py-1 px-4 rounded-md"
            type="submit"
            name="submit"
          />
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;
