import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { logements } from '../assets/api/logements';
import AppartementImages from "../components/AppartementImages";
import fullstar from '../assets/img/star-full.png';
import emptystar from '../assets/img/star-empty.png';
import Droptxtapps from '../components/Droptxt-apps';
import Footer from '../components/Footer';
import ErrorPage from "./ErrorPage";


function Rating({ rating }) {
    const maxRating = 5;
    const fullStar = fullstar;
    const emptyStar = emptystar;
    const fullStarCount = Math.floor(rating);
    const emptyStarCount = maxRating - fullStarCount;

    return (
    <div>
        {[...Array(fullStarCount)].map((_, index) => (
        <img key={index} src={fullStar} alt="full star" />
        ))}
        {[...Array(emptyStarCount)].map((_, index) => (
        <img key={index} src={emptyStar} alt="empty star" />
        ))}
    </div>
    );
}

export default function AppartementPage() {
    const { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
    return <ErrorPage />;
    }

    return (
    <div>
        <Navbar />
        <AppartementImages id={id} />

    <div className="section__appartement1">
        <h1 className="title__appartement">{logement.title}</h1>
        <div className="host">
            <p className="host__appartement">{logement.host.name}</p>
            <img
            className="host__picture__appartement"
            src={logement.host.picture}
            alt={logement.host.name}
        />
        </div>
    </div>
        <p className="location__appartement">{logement.location}</p>

    <div className="tags-rating__section">
        <div className="tags__appartement__section">
        {logement.tags.map((tag) => (
            <p className="tags__container" key={tag}>
            {tag}
            </p>
        ))}
        </div>

        <div className="rating__appartement__section">
            <Rating rating={logement.rating} />
        </div>
    </div>

    <div className="menu__apps__container">
        <div className="menu__appartement">
            <Droptxtapps
            className="Drop__appartement"
            text="Description"
            dropDownText={logement.description}
            />
            <Droptxtapps
            className="Drop__appartement"
            text="Équipements"
            dropDownText={logement.equipments.map((equip) => (
            <li className="li__appartement" key={equip}>{equip}</li>
            ))}
        />
        </div>
    </div>

        <footer>
            <Footer />
        </footer>

    </div>
    );
}
