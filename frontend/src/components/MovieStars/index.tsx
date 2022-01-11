import { ReactComponent as StarFull } from 'assects/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assects/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assects/img/star-empty.svg';
import './styles.css';


function MovieStars() {
    return (

        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>

    );
}
export default MovieStars