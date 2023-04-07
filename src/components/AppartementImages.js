import { useState } from "react";
import { logements } from "../assets/api/logements";
import leftArrow from "../assets/img/leftarrow.png";
import rightArrow from "../assets/img/rightarrow.png";

function AppartementImages(props) {
    
    const {id} = props;
    const appartement = logements.find(appartement => appartement.id === id);
    const pictures = appartement.pictures

    const [currentIndex, setCurrentIndex] = useState(0);

    const previousPicture = () => {
        setTimeout(() => {
            setCurrentIndex((currentIndex + pictures.length - 1) % pictures.length);
        }, 300);
    };
    
    const nextPicture = () => {
        setTimeout(() => {
            setCurrentIndex ((currentIndex + 1 ) % pictures.length);
        }, 300);
    };
    


    return (

        <div className="img__appartements__fill" style={{ backgroundImage: `url(${pictures[currentIndex]})` }}>
                <p className="number__img__appartements"> {currentIndex + 1}/{pictures.length} </p>
            <div className="btn__arrow__appartements">
                <img className="arrow__appartements" src={rightArrow} alt="rightarrow" onClick={previousPicture} />
                <img className="arrow__appartements" src={leftArrow} alt="leftarrow"  onClick={nextPicture} />
            </div>
            

        </div>

    )
};

export default AppartementImages;