import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomeLayout from '../src/components/Home/HomeLayout/HomeLayout.js';
import ShopLayout from './components/Shop/ShopLayout';

function App() {
  return (
    <>
      <HomeLayout />
      {/* <ShopLayout /> */}
    </>
  );
}

export default App;
