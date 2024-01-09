import './Card.css';
import React from 'react';
import Filter from '../Feature/Filter';


const Card = (props) => {
 
  const classes = 'card ' + props.className;
  
  return <div className={classes}>
    {props.children}
    </div>;
}

export default Card;