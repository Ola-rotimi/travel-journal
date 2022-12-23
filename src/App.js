import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";
import './App.css';

const App = () => {
  const dataDetails = data.map((data) => {
    return <Card key={data.id} {...data} />;
  });

  return (
    <div className="main--container">
      <Navbar />
      {dataDetails}
    </div>
  );
};

export default App;