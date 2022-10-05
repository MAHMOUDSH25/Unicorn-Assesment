import headerbackimage from "../../../assets/headerbackimage.png";
import headerbackimagewhite from "../../../assets/headerbackimagewhite.png";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="Hero">
          <div className="contetnt">
            
            <h1>Your Premium Sound, Unplugged!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button>Find out More</button>
          </div>

          <div className="hero-image">
            {/* <img src={headerbackimagewhite} /> */}
            <img src={headerbackimage} />
          </div>
        </div>
        <hr style={{width:"100%"}}/>
      </div>
    </>
  );
}

export default Header;
