import React from 'react';
import { Card } from '../card/card';


import './card-list.css';

export const CardList = (props) => (
    //console.log(props);
    <div className='card-list'>
    {props.users.map(user => (
        <Card key={user.id}/>
    ))} 
    </div>
);