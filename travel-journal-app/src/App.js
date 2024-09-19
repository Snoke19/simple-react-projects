import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import trips from './data/tripsData';

export default function App() {
  const cards = trips.map((trip) => <Card key={trip.id} {...trip} />);
  return (
    <>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </>
  );
}