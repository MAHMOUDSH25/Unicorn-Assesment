import "./NewsLetter.scss";

function NewsLetter() {
  return (
    <>
      <div className="NewsLetter-body">
        <div className="NewsLetter-content">
          <div className="NewsLetter-Card">
            <h1>Join Our News Letters</h1>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster{" "}
            </p>
            {/* <input className="col-4" placeholder="Insert your mail here" /> */}

            <div class="container text-center">
              <div class="row justify-content-start">
                <div class="col-12">
                  <input
                    className="email-input"
                    placeholder="Insert your mail here"
                  />
                </div>
              </div>
              {/* <div class="row justify-content-center">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
              </div> */}
              {/* <div class="row justify-content-end">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
              </div>
              <div class="row justify-content-around">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
              </div>
              <div class="row justify-content-between">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
              </div>
              <div class="row justify-content-evenly">
                <div class="col-4">One of two columns</div>
                <div class="col-4">One of two columns</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetter;
