import React, { useState } from 'react';
import MyNavbar from './components/Navbar';
import CarList from './components/CarList';
import CarDetails from './components/CarDetails';
import Footer from './components/Footer';
import './App.css';



const App = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [filters, setFilters] = useState({});


  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };


  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <MyNavbar />
      <CarList onSelectCar={handleSelectCar} />
      <CarDetails car={selectedCar} onClose={handleCloseDetails} />
      <Footer/>
    </div>
  );
};

export default App;
