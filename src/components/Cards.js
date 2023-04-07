/*import React, {useEffect} from 'react';*/
import { logements } from '../assets/api/logements';
import { Link } from 'react-router-dom';

function Cards() {




    return (

    <div className='logement__list'>
        {logements.map(({ id, cover, title }) =>
            <article key={id} >
                <Link to={`/location/${id}`} className='cards-container'>
                    <img src={cover} alt={`Logement ${title}`} />
                    <p>{title}</p>
                </Link>
            </article>
        )}
    </div>

)
}

export default Cards;