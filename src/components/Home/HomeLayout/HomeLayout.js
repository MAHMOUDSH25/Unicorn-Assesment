import './HomeLayout.scss'

import HomePage from '../HomePage.js'
import LogoBanner from '../../LogoBanner/LogoBanner.js'
import NavBar from "../../NavBar/NavBar.js";
import Footer from '../../Footer/Footer.js';



function Layout() {
  return (
    <>
      <div className="Layout">
        <LogoBanner />
        <NavBar />
        <HomePage />
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
