const VideoSlide = () => {
    return (
        <div className="video-container">
            <div className="video-bg-text">
                <h1>EasyCase</h1>
                <p>The watch has a resolutely professional appearance, its redesigned case sporting straight sides and a winding crown guard, as well as a subtle line of light along the middle case.

Inspired by aircraft instruments, the model’s emblematic dial, introduced in 2016, has been refreshed. It offers perfect balance and improved legibility, thanks to the addition of a '0' before the '5' on the minutes scale.</p>
            </div>
            <div className="video-bg">
                <video autoPlay loop muted>
                    <source
                    src="bgvideo.mp4"
                    type="video/mp4"
                    />
                </video>
            </div>
            <div className="video-bg-button">
                <button>Explore this <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
    );
  };
  
  export default VideoSlide;
  