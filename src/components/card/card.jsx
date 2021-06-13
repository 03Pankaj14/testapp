import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export const Card = props => (

    <div className='card-container bg-success'>
            <p className='text-wrap text-center'>This Cards are clickable</p>
            <Link className='card-block stretched-link text-decoration-none' to="./details"></Link>
    </div>
);