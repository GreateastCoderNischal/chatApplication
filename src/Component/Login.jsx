import React from 'react'
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons"
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithRedirect } from 'firebase/auth';
import "firebase/app"
import auth from '../Firebase/Firebase.js';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../Context/AuthContext.jsx';
function Login() {
  const Navigate = useNavigate()
  const {name,setName} = useAuth();
  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-700">
      <div className="p-8 bg-white rounded-3xl">
        <h2 className='font-bold m-2 text-3xl font-main'>Welcome to valor-Chat</h2>
        <button
          onClick={() => {
            setName('Nischal')
            Navigate('/chat')
            console.log(name)
            console.log(name)
          }}

          className='bg-blue-600 rounded-2xl p-4 text-white flex items-center gap-2 m-auto'>

          <GoogleOutlined /> Sign in with Nischal
        </button>
        <button
          onClick={() => { 
            setName(prev=>"Rushil")
            Navigate('/chat')
            console.log(name)
          
          }}
          className='bg-blue-800 mt-3 rounded-2xl p-4 text-white flex items-center gap-2 m-auto'>

          <FacebookOutlined /> Sign in with Rushil
        </button>
      </div>
    </div>
  )
}

export default Login