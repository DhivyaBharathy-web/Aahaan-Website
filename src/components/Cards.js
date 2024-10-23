import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my memes and enjoy!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='Everything around you is just mass taking up space—thanks, physics, for the existential crisis!'
              label='Science'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='When you get blocked on WhatsApp and suddenly feel like you’ve been exiled from a digital kingdom!'
              label='Emotional'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='When work feels like a never-ending cycle of tasks and deadlines—time really is just a fraction of our lives at the office!'
              label='Office'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='When your friend turns into a stranger'
              label='Friends'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='When you realize you are only working during your phone breaks and scrolling during your work breaks!'
              label='Office'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;