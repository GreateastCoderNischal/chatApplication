import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login.jsx'
import Chat from './Component/Chat.jsx'
import {AuthContext,Provider} from "./Context/AuthContext.jsx"
export default function App() {
  const [name, setName] = useState('')
  const change=(given)=>{
    setName(given)
  }
  return (
    <Provider>
 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}