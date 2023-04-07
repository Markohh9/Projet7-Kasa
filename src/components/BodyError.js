import { NavLink } from 'react-router-dom';

function BodyError () {



    return (
        <div>
            <p className="Errortxt">404</p>
            <p className="ErrorDescTxt">Oups! La page que vous demandez n'existe pas.</p>*
            <NavLink to="/" className='linkError' >Retourner sur la page d’accueil</NavLink>
        </div>
        )
    }

export default BodyError;