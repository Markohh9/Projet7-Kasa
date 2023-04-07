import { useState } from 'react';
import downarrow from '../assets/img/downarrow.png';
import uparrow from '../assets/img/uparrow.png';

function Droptxt({text, dropDownText}) {
    const [showText, setShowText] = useState(false);

    const handleButtonClick = () => {
    setShowText(!showText);
    };

    return (
    <div className='dropbtncontainer'>
        <button className='dropbtn' onClick={handleButtonClick}>
        <div className='txtbtndrop'>
            <p>{text}</p>
            <img className='arrowbtn' src={showText ? uparrow : downarrow} alt='Arrow' />
        </div>
        </button>
        {showText && (
        <p className='txtondropbtn'>
            {dropDownText}
        </p>
        )}
    </div>
    );
}

export default Droptxt;
