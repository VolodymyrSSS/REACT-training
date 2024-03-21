import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import jwtInterceptor from '../helpers/jwtInterceptor';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    jwtInterceptor
      .get("http://localhost:4000/liked-movies", {
      withCredentials: true})
      .then((response) => {
        setMovies(response.data)
    })
  },[]);

  return (
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{minHeight:"500px", minWidth:"600px"}}
    >
      <Card>
        <ListGroup variant="flush">
          {movies.map((item, index)=>(<ListGroup.Item key={index}>{item}</ListGroup.Item>))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Movies;