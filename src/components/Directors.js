import React from 'react';
import { directors } from '../data';
import { render } from 'enzyme';

const Directors = () => {
  const renderDirectors = () => {
    return directors.map(director => {
      return <div className="director">
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    })
  }
  
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
