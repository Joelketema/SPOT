import { Link } from "react-router-dom"
const Login= () => {

    const stop = (e) => {
        e.preventDefault()
    }
    return (
        <form action="submit">
        <div className='wrapper'>

            <div className="top">
                <div class="userIcon">
                    <span><i class="fas fa-mail-bulk"></i></span>  <input  type="email" class="input" placeholder="Your Email" required />
                </div>

                <div class="userIcon">
                    <span><i class="fas fa-key" id="Picon"></i></span>   <input type="password" class="input" placeholder="Password" required />
                </div>
                <div className="error">Error messages</div>    
            </div>

            <div className="bottom">
                <input type="submit" value="Login" />  
                <p className='already'>Don't have an Account Yet? <Link to='/' className="option">Register For Free</Link></p> 
            </div>

        </div> 
        </form>
    )
}

export default Login;