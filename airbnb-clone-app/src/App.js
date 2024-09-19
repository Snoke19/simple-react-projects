import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import cardsInfo from './data';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardsInfo.map(item => (<Card key={item.id} item={item} />))}
      </section>
    </>
  );
}