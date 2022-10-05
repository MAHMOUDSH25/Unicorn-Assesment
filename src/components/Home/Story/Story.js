import "./Story.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Story() {
  return (
    <>
      <div className="Story-body">
        {/* <div class="col">
          <div class="card shadow-sm">
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="325"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Thumbnail"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>

            <div class="card-body">
              <text>Category Dress</text>
              <p class="card-text">Tropical Suit</p>
              <div class="d-flex justify-content-between align-items-center">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <rect width="40" height="40" rx="20" fill="#F86338" />
                    <path
                      d="M19.293 12.707L25.586 19H12V21H25.586L19.293 27.293L20.707 28.707L29.414 20L20.707 11.293L19.293 12.707Z"
                      fill="white"
                    />
                  </svg>
                </button>
                {/* <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div> */}
        {/* <small class="text-muted">9 mins</small> 
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="Card">
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span class="text-muted">See for yourself.</span>
              </h2>
              <p class="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div class="col-md-5 order-md-1">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: 500x500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#eee"></rect>
                <text x="50%" y="50%" fill="#aaa" dy=".3em">
                  500x500
                </text>
              </svg>
            </div>
          </div>
        </div> */}
        <div className="Story-text-zone">
          <h1>Story about Our Brand</h1>
          <p>
            Develop a website by finding a product identity that has value and
            branding to become a characteristic of a company. We will also
            facilitate the business marketing of these products with our SEO
            experts so that they become a ready-to-use website and help sell a
            product from the company Develop a website by finding a product
            identity that has value and branding to become a characteristic of a
            company. We will also facilitate the business marketing of these
            products with our SEO experts so that they become a ready-to-use
            website and help sell a product from the company
          </p>
        </div>
        
      </div>
      <hr style={{width:"100%"}}/>
    </>
  );
}

export default Story;
