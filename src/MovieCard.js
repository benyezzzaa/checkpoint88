import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
import { NavLink  , Routes,Route} from 'react-router-dom';

import './css.css'
import Description from './Description';


function MovieCard({movie,index}) {
  return (
    <div>
    <NavLink to={'Description/'+index}> 
    <Card style={{ width: '18rem' }}>     
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body style={{textDecoration:"none"}}>
        <Card.Title > {movie.title}</Card.Title>
        <Card.Text >
          {movie.description}
        </Card.Text>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
        />
      </Card.Body>
    </Card>
    </NavLink>
    
    </div>
  );
}

export default MovieCard;