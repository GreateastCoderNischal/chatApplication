import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import { useAuth } from '../Context/AuthContext'
import {useNavigate} from "react-router-dom"
function Chat() {
    const Navigate=useNavigate()
    const {name}=useAuth();
    console.log(name)
  return (
    <div className='w-full h-screen'>
        <div className="bg-purple-500 h-[63px] p-2 items-center flex ">
            <ul className='flex justify-between items-center text-white w-full font-main font-bold'>
                <li>Valor Chat</li>
                <li className='cursor-pointer'
                onClick={()=>Navigate('/')}
                >Logout</li>
            </ul>
        </div>
        <ChatEngine
        height="calc(100vh-63px)"
        
        projectID="07eac3ee-a2df-45c2-aaa4-38599d4375f3"
			userName={name}
			userSecret='12345'
        />
    </div>
  )
}

export default Chat