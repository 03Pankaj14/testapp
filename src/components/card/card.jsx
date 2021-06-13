import React from 'react';
import { Link } from 'react-router-dom';

import './card.css';

export const Card = props => (

    <div className='card-container'>
        <Link className='card' to="./details">Click</Link>
    </div>
);