
import { Link } from "react-router-dom"
const Register = () => {

    const stop = (e) => {
        e.preventDefault()
    }
    return (
        <form action="submit">
        <div className='wrapper'>

            <div className="top">
                <div class="userIcon">
                    <span><i class="fas fa-user-alt"></i></span><input type="text" class="input" placeholder="Your Name" required/>    
                </div>
            
                <div class="userIcon">
                    <span><i class="fas fa-mail-bulk"></i></span>  <input  type="email" class="input" placeholder="Your Email" required />
                </div>

                <div class="userIcon">
                    <span><i class="fas fa-key" id="Picon"></i></span>   <input type="password" class="input" placeholder="Password" required />
                </div>

                <div class="userIcon">
                    <span><i class="fas fa-key" id="Picon"></i></span>  <input type="password" class="input" placeholder="Confirm Password" required />
                    </div>  

                <div className="error">Error messages</div>    
            </div>

            <div className="bottom">
                <input type="submit" value="Register" />  
                <p className='already'>Do you Already have an Account?<Link className="option" to='/login'>Login</Link></p> 
            </div>

        </div> 
        </form>
    )
}

export default Register;