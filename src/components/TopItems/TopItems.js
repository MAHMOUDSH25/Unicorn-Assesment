import "./TopItems.scss";

function TopItems() {

    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     slidesPerGroup: 3,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev",
    //     },
    //   });
  return (
    <>
      <div className="body">
        <section>
          <div class="swiper mySwiper container">
            <div class="swiper-wrapper content">
              <div class="swiper-slide card">
                <div class="card-content">
                  <div class="image">
                    {/* <!--<img src="images/img1.jpg" alt="">--> */}
                  </div>

                  <div class="media-icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-github"></i>
                  </div>

                  <div class="name-profession">
                    <span class="name">Someone Name</span>
                    <span class="profession">Web Developer</span>
                  </div>

                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <div class="button">
                    <button class="aboutMe">About Me</button>
                    <button class="hireMe">Hire Me</button>
                  </div>
                </div>
              </div>
              <div class="swiper-slide card">
                <div class="card-content">
                  <div class="image">
                    {/* <!--<img src="images/img2.jpg" alt="">--> */}
                  </div>

                  <div class="media-icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-github"></i>
                  </div>

                  <div class="name-profession">
                    <span class="name">Someone Name</span>
                    <span class="profession">Web Developer</span>
                  </div>

                  <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>

                  <div class="button">
                    <button class="aboutMe">About Me</button>
                    <button class="hireMe">Hire Me</button>
                  </div>
                </div>
              </div>




              



            </div>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-pagination"></div>
        </section>
      </div>
    </>
  );
}

export default TopItems;



