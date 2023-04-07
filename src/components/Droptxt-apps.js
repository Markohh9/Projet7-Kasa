import { useState } from 'react';
import downarrow from '../assets/img/downarrow.png';
import uparrow from '../assets/img/uparrow.png';

function Droptxtapps({text, dropDownText}) {
    const [showText, setShowText] = useState(false);

    const handleButtonClick = () => {
    setShowText(!showText);
    };

    return (
    <div className='dropbtncontainer__appartement'>
        <button className='dropbtn__appartement' onClick={handleButtonClick}>
        <div className='txtbtndrop__appartement'>
            <p>{text}</p>
            <img className='arrowbtn__appartement' src={showText ? uparrow : downarrow} alt='Arrow' />
        </div>
        </button>
        {showText && (
        <p className='txtondropbtn__appartement'>
            {dropDownText}
        </p>
        )}
    </div>
    );
}

export default Droptxtapps;