import Dealerz from "../../assets/Dealerz.png";
import './LogoBanner.scss'

function LogoBanner() {
  return (
    <div className="px-3 py-2 text-bg-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img src={Dealerz} />
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M21.1909 14.489L21.1529 13.662L14.6699 12.736L13.3549 15.31C11.9665 14.5283 10.6973 13.5517 9.58591 12.41C8.4315 11.3004 7.44782 10.0259 6.66691 8.62801L9.46691 7.22801L6.66691 0.708008L5.90691 0.818008C4.61977 0.995313 3.42729 1.59296 2.51491 2.51801C-0.658091 5.68701 0.584908 11.9 5.34291 16.657C8.32491 19.638 11.8759 21.239 14.8939 21.238C15.7375 21.2674 16.5784 21.1274 17.3669 20.8263C18.1554 20.5252 18.8756 20.0691 19.4849 19.485C20.1073 18.8208 20.5813 18.0319 20.8754 17.1705C21.1695 16.3092 21.2771 15.3951 21.1909 14.489ZM18.0709 18.071C15.7709 20.371 10.5899 19.071 6.75691 15.243C2.92391 11.415 1.62891 6.22901 3.92891 3.92901C4.35765 3.49451 4.88239 3.16672 5.46091 2.97201L6.88091 6.28501L5.77391 6.83801C5.53411 6.95811 5.32077 7.12498 5.14646 7.3288C4.97215 7.53262 4.84039 7.76926 4.75894 8.02478C4.6775 8.28031 4.64801 8.54955 4.67222 8.81664C4.69643 9.08374 4.77384 9.34329 4.89991 9.58001C5.77526 11.1482 6.87598 12.5794 8.16691 13.828C9.41583 15.1045 10.8413 16.1952 12.3999 17.067C12.6402 17.1974 12.904 17.2785 13.1761 17.3054C13.4481 17.3324 13.7227 17.3047 13.9839 17.224C14.2393 17.1445 14.476 17.014 14.6795 16.8404C14.883 16.6668 15.0491 16.4537 15.1679 16.214L15.8149 14.92L19.1819 15.401C19.1435 16.3954 18.7492 17.3429 18.0709 18.071Z"
                    fill="#000"
                  />
                </svg>
                <span className="ms-2">Call Center</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="17"
                  viewBox="0 0 20 17"
                  fill="none"
                >
                  <path
                    d="M16.5 3H13V0H0V15H2.184C2.38765 15.5845 2.76815 16.0912 3.27275 16.4498C3.77734 16.8083 4.381 17.0009 5 17.0009C5.619 17.0009 6.22266 16.8083 6.72725 16.4498C7.23185 16.0912 7.61235 15.5845 7.816 15H13.184C13.4188 15.6667 13.882 16.2287 14.4915 16.5866C15.1011 16.9445 15.8176 17.0752 16.5142 16.9554C17.2108 16.8356 17.8425 16.4732 18.2975 15.9322C18.7525 15.3913 19.0013 14.7068 19 14H20V7.667L16.5 3ZM2 2H11V9H13V5H15.5L18 8.333V11.78C17.6367 11.4472 17.1963 11.21 16.7185 11.0897C16.2407 10.9693 15.7405 10.9697 15.2629 11.0907C14.7852 11.2117 14.3452 11.4495 13.9823 11.7828C13.6194 12.1161 13.3451 12.5344 13.184 13H7.816C7.61235 12.4155 7.23185 11.9088 6.72725 11.5502C6.22266 11.1917 5.619 10.9991 5 10.9991C4.381 10.9991 3.77734 11.1917 3.27275 11.5502C2.76815 11.9088 2.38765 12.4155 2.184 13H2V2ZM5 15C4.80222 15 4.60888 14.9414 4.44443 14.8315C4.27998 14.7216 4.15181 14.5654 4.07612 14.3827C4.00043 14.2 3.98063 13.9989 4.01921 13.8049C4.0578 13.6109 4.15304 13.4327 4.29289 13.2929C4.43275 13.153 4.61093 13.0578 4.80491 13.0192C4.99889 12.9806 5.19996 13.0004 5.38268 13.0761C5.56541 13.1518 5.72159 13.28 5.83147 13.4444C5.94135 13.6089 6 13.8022 6 14C6 14.2652 5.89464 14.5196 5.70711 14.7071C5.51957 14.8946 5.26522 15 5 15ZM16 15C15.8022 15 15.6089 14.9414 15.4444 14.8315C15.28 14.7216 15.1518 14.5654 15.0761 14.3827C15.0004 14.2 14.9806 13.9989 15.0192 13.8049C15.0578 13.6109 15.153 13.4327 15.2929 13.2929C15.4327 13.153 15.6109 13.0578 15.8049 13.0192C15.9989 12.9806 16.2 13.0004 16.3827 13.0761C16.5654 13.1518 16.7216 13.28 16.8315 13.4444C16.9414 13.6089 17 13.8022 17 14C17 14.2652 16.8946 14.5196 16.7071 14.7071C16.5196 14.8946 16.2652 15 16 15Z"
                    fill="#000"
                  />
                </svg>
                <span className="ms-2">Shipping & Returns</span>
              </a>
            </li>
            {/*<li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Customers
              </a>
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LogoBanner;

{
  /* <div className="px-3 py-2 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
          <img src={Dealerz} />
            {/* <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              {/* <use xlink:href="#bootstrap"></use> 
            </svg> 
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                </svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */
}
