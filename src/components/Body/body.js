import SlideShow from "./slideshow";
import Banner from "./banner";
import VideoModel from "./3d-watch";
import GenderFilter from "./gender-filter";
import VideoSlide from "./video-slide";
const Body = () => {
    return (
        <>
            <SlideShow/>
            {/* <Banner/> */}
            <VideoModel/>
            <GenderFilter/>
            <VideoSlide/>
        </>
    );
  };
  
  export default Body;
  