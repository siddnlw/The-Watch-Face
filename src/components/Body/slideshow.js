import Slider from "react-slick";

const SlideShow = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        fade: true,
        draggable: true,
        speed:3000,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container">
            <Slider {...settings}>
                <div>
                    <div className="first-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="1.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>
                    <div className="second-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="2.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>
                    <div className="third-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="3.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>    <div className="four-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="4.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>    <div className="five-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="5.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>    <div className="six-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="6.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
                <div>    <div className="seven-slide slide">
                        <div className="brandname"><img src="rolex_logo.png" alt="rolex_logo" /></div>
                        <div className="watch"><img src="7.png" alt="rolex_watch" /></div>
                        <div className="tagline">A crown for every achievement</div>
                    </div>
                </div>
            </Slider>
        </div>
    );
  };
  
  export default SlideShow;
  