import './ShopLayout.scss'
import LogoBanner from '../LogoBanner/LogoBanner';
import NavBar from '../NavBar/NavBar';
import ShopHeader from './Header/ShopHeader.js';
import NewsLetter from '../NewsLetter/NewsLetter';
import Footer from '../Footer/Footer';

function ShopLayout () {
    return (
        <>
            <LogoBanner/>
            <NavBar/>
            <ShopHeader/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}

export default ShopLayout;