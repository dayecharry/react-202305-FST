import "./OneCharacter.css";
import image from "../images/person.png";

function OneCharacter({ item }) {

    const imgCharacter = item.image ? item.image : image;
    /*
     if (item.image) {
         imgCharacter = item.image
     } else {
         imgCharacter = image
     }*/

    return (
        <article>
            <img src={imgCharacter} alt="nombre personaje" />
            <h6>{item.name}</h6>
        </article>
    )
}

export default OneCharacter