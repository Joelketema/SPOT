
import Register from './Registration/Register'
import Login from './Login/Login'
import Side from './Side/Side'
import './authStyle.css'

import { Routes, Route } from 'react-router-dom'

const Auth = () => {
    return (
        <div className="wrapperAuth">
        <Side />
        <Routes>
            <Route path='/' exact element={<Register />} />   
            <Route path='/login' element={<Login/> }/>
        </Routes>
        </div>
    )
}

export default Auth;