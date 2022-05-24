import React, { Component, useRef, useEffect } from 'react';

// const rightScroll = () => {
//     this.scroll({
//         top: 10,
//         right: 100,
//         behavior: 'smooth'
//       });
//   };

const useMountEffect = (fun) => useEffect(fun, []);
const Banner = () => {
    const myRef = useRef(null);
    const leftScroll = () => myRef.current.scroll({
        top: 0,
        left: myRef.current.scrollLeft - 400,
        behavior: 'smooth'
      });
      const rightScroll = () => myRef.current.scroll({
        top: 0,
        left: myRef.current.scrollLeft + 400,
        behavior: 'smooth'
      });


    return (
        <div className="banner">
            <div className="banner-title">
                New Arrival
            </div>
            <div ref={myRef}  className="banner-container">
                    <button onClick={leftScroll} className='left-scroll-btn' ><i class="fa fa-angle-left"></i></button>
                    <button onClick={rightScroll} className='right-scroll-btn'><i class="fa fa-angle-right"></i></button>
                <div className="banner-content first">
                    <div className="banner-item-image">
                        <img src="1.png" alt="" />
                        Rolex Green Pearl Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Green Pearl Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="banner-content">
                    <div className="banner-item-image">
                        <img src="2.png" alt="" />
                        Rolex Chocolate Wood Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Chocolate Wood Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="banner-content">
                    <div className="banner-item-image">
                        <img src="3.png" alt="" />
                        Rolex Gold & Silver Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Gold & Silver Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="banner-content">
                    <div className="banner-item-image">
                        <img src="4.png" alt="" />
                        Rolex Aqua Blue Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Aqua Blue Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="banner-content">
                    <div className="banner-item-image">
                        <img src="5.png" alt="" />
                        Rolex Rose Gold Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Rose Gold Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="banner-content last">
                    <div className="banner-item-image">
                        <img src="6.png" alt="" />
                        Rolex Classic Watch
                    </div>
                    <div className="banner-item-detail">
                        Rolex Classic Watch
                        <div>
                            <button>Add to cart</button>
                            <button>wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Banner;
  