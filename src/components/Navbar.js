import logo from '../assets/img/logo.png'
import { NavLink } from 'react-router-dom';


function Navbar () {

    //state

    //comportement

    // display
    return ( 
        <div className='navdiv'>
            <nav>
                <img src={logo} alt="Kasa Logo" className='LogoNav'/>
                <div className='Navtxt'>
                    <NavLink to="/" className='AccueilLink' > ACCUEIL</NavLink>
                    <NavLink to="/about" className='ProposLink' >A PROPOS</NavLink>
                </div>
            </nav>
            
        </div>
    )
}



export default Navbar ;