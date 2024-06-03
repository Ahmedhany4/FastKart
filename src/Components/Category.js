import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Category({ category }) {
  return (
    <>
      {console.log(category)}
      <div className="item">
        <div className="image">
          <img src={category.image} alt={category.title} />
        </div>
        <div className='content'>
          <p>{category.description}</p>
          <h2>{category.title}</h2>
          <a className='btn'>Shop Now <FontAwesomeIcon icon={faAngleRight} /></a>
        </div>
      </div>
    </>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};

export default Category;
