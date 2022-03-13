
import './headerStyle.css'

const Header = () => {
    return (
        <div className="head">
            <div className="logo">
                <h1  id="logo">SPOT <span><i className="fas fa-music"></i></span></h1>
            </div>

            <div className="slogan">
                <p id="slogan">The Best Archive Of Music.</p>
            </div>
        </div>
    )
}

export default Header;