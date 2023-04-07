/*import { useState } from "react";
import rightarrow from "../assets/img/rightarrow.png";
import leftarrow from "../assets/img/leftarrow.png";

const imagesAppartements = [
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
];

const ImageAppartements = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndexChange = (direction) => {
    if (direction === "left") {
        if (currentIndex === 0) {
        setCurrentIndex(imagesAppartements.length - 1);
        } else {
        setCurrentIndex(currentIndex - 1);
        }
    } else if (direction === "right") {
        if (currentIndex === imagesAppartements.length - 1) {
        setCurrentIndex(0);
        } else {
        setCurrentIndex(currentIndex + 1);
        }
    }
};

    return (
    <div>
        
    </div>

)


};

export default ImageAppartements();


/*<div>
        <img src={imagesAppartements[currentIndex]} alt="Appartement" />
        <img
        src={leftarrow}
        alt="flèche gauche"
        onClick={() => handleIndexChange("left")}
        />
        <img
        src={rightarrow}
        alt="flèche droite"
        onClick={() => handleIndexChange("right")}
        />
    </div>*/