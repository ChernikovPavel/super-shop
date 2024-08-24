import React from 'react';
import HomeButton from '../../components/Buttons/HomeButton';
import ListOfItems from '../../components/Lists/ListOfItems';

export default function HomePage({user}) {
  return (
    <div>
      <div className='stack'>
      <ListOfItems user={user} ></ListOfItems>
      </div>
    </div>
  );
}

