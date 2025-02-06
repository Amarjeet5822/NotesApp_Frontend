import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

function LoginPage() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate()
    const successToast = () => toast("Login Successfull!");
    const failedToast = () => toast("Invalid email or password!");
    const missingFieldToast = () => toast("missing Fields!");
    const incorrectEmailToast = () => toast("Wrong Email!");
    const formHandler = (event) => {
      event.preventDefault();
      if(!email || !pass){
        missingFieldToast();
        return
      }
      if(!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email)){
        incorrectEmailToast()
        return 
      }
      const payload = {
        email,
        pass,
      };
      console.log(payload);
      const loginUser = async (payload) => {
        try {
          // further I will implement dotenv on backend url
          const response = await fetch("http://localhost:8080/users/login", {
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
          // if(data.token){
          //   localStorage.setItem("token", data.token)
          // }
          successToast()
          setTimeout(()=> {
            navigate("/")
          },2000)
        } catch (error) {
          console.log(error);
          failedToast();
        }
      };
      loginUser(payload);
    };
    return (
      <div>
        <form
          onSubmit={formHandler}
          className="flex flex-col justify-center items-center mt-5"
        >
          <p className="text-2xl font-medium py-4">Login Please</p>
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
          <ToastContainer position="top-center" autoClose={1000} />
      </div>
    );
  }

export default LoginPage