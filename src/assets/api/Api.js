/*const cors = require('cors');
const { response } = require('express');
const app = express();
app.use(cors()); */

export async function fetchAppartements() {
    const response = await fetch(
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json", {
            method: "GET",
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8",
            },
            mode: "no-cors"
        }
    );
    const data = await response.json();
    console.log(data);
    const appartements = data.map((x) => {
        return {
            id: x.id,
            title: x.title,
            cover: x.cover,
            pictures: x.pictures,
            description: x.description,
            hostname: x.host.hostname,
            hostpicture: x.host.pictures,
            rating: x.rating,
            location: x.location,
            equipments: x.equipments,
            tags: x.tags,
        };

    });
    return appartements;
}

const api = {
    fetchAppartements
};

export default api;