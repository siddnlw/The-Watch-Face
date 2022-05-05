const Header = () => {
    const searchButton = () => {
      document.getElementById("circle").focus();
    };
    const menuButton = () => {
      document.getElementById("menu-btn").classList.toggle("change");
    };
    return (
      <header>
        <div id="sidebar" className="sidebar">
          <div className="user-detail">
            <div className="user img">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKwAAACsCAMAAADR77fqAAAAMFBMVEXk5ueutLersbTo6eqnrrHc3+Dr7e61ur3Jzc+5vsHh4+S9wsSxt7nX2tvAxcfS1tfhJaEVAAAEL0lEQVR4nO2ci07sIBBAgYFCoZT//9tLW3W32u4CQ4duLifGGGPiyTgMr0HGOp1Op9PpdDqdTqfT6XQ6nU6n0+mcAzCAVd4rZZcvW+u8AMCGWfNv9Bzit1pLHQLMGy2l4A+ElNoodjvfGFMnnkW/kdyFe+nCECZ+pLrGl2s/tDZ8AF7LE9Ov8Gp1k+ACM4cJsIuuMK01V0CN71RXXWdbm0bX8Das38FtngrRNUl1xbe1hZCu2to2K64R2TATwL+uWAeoZq5qynXlulVNsEk1a49wbRIBTL5rTFvTwhZUiWuMbYtBNkyFsjO9bFkSrLaB3Nbq91onsiO1a+50sLP11LaFGbuiadfiELLnrick7RphKJgPHhAXBItx5XyiXCKU160vKKsXOJwr6Y6svMh+yTo6V/A41wjdShGdsrF4kcmyGS1Ll7TWYWWFI5vErEbL0s24Nn/v9QcyWYV3lXSy2Cz4NFmy+fazZNGulGnwUbL40kUni58UCLdhJYdceyiPvCosZMhkP2qJmHk4fwThjlEhtzWkZ8ow4lzFTOf6WVtxpjCnR8SHHGzAJS3txcJHHcwxi4osdfsBYohJ6nP6kgu7bzStKsNdgJDLMlYqS37/wcoLgmhyjw9Fh0hibtOJVDLGBP3o2gCfH1raiXZna3LTtsFV6MN2zrNtc3//Y5tVbUVT1zzb1q4ZtoJ8SXBkG077O3euU+MWtA1IOPMQYrZ3cF3bPN8EV/IWi5cTgDl5riukuVdv8mDn6bDdU/BpvpcqWzrplXHTPr4i6rtwk2T9BTAVZi1/EHr26p6qG9ubihCCV+zejyqWZIBhiB/D8hlu+qKCrZJLTI0x84YxISjLFu/Wdj8sJjYm67iMJ/F7gMVvaGf8soptHef4+5U3sWjJF2U2Oks5OROWt0HNVAfwxmkuktrp409N4xxsk5wA8G7iSWuY3RShDXU+gPWzKDyak3IMiswXBmXGVzn6NrxymgONLiiX/df/68v19brAPCqoT0hx7aoBIIyJL2mSdLW5TndQI/rvv0dM4ZpSBjbzkCBR95KtWcD0Ir+wldVzAezxc8oqujEXqrr6SiXgmJp7tJitV6ry5SC01rOQlHMBtC2vkwqgrhlZv3VrHIRhXk/k2eJvysHQqPIKfTNkcd1skXEldEXaDpRx3WyLM6H0LR3G1hRWMKjQclhgWxjb6+eCI4pWYcPVc+wxghe4FrxWrmRbMMhqdMwX2ubf6tBW2B3Z7XT0VetBbkUY8O28CGRWaJuNro28MYZsiMOTsXGo0B+LI+v5aJv54Amd3vBRobUfSXrvF+mK+0Q2ufmrrAeqsm1y9WptyjOaK9sW2Q0xpq3CiTdeZ6RFFvfCvhaJSQutPVcSF4rIfwdQi7SlV8vV4RNJM+5yFnsDZOLKC+5Bkmun0+l0Op1O5//mH8o4NvBRlrPfAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div className="user name">siddharth nalwaya</div>
            <div className="user email"> siddnlw@gmail.com</div>
            <div className="login-signup">
              <button>login/sign-up</button>
            </div>
          </div>
          <hr />
          <a href="#home" className="active menu">
            Home
          </a>
          <a href="#watches" className="menu">
            Watches
          </a>
          <a href="#alloffers" className="menu">
            All Offers
          </a>
          <a href="#customewatchrequest" className="menu">
            Custome Watch Request
          </a>
          <a href="#Wishlist" className="menu">
            Wishlist
          </a>
          <a href="#contactus" className="menu">
            Contact Us
          </a>
        </div>
        <div className="nav-bar">
          <button
            className="menu-button"
            onClick={() =>
              (document.getElementById("sidebar").style.marginLeft = "0")
            }
          >
            <div className="menu-bars" id="menu-btn" onClick={menuButton}>
              <div className="b bar1"></div>
              <div className="b bar2"></div>
              <div className="b bar3"></div>
            </div>
          </button>
          <div className="title-section">
            <img className="img-before-title" src="strap-start.png" alt="" />
            <div className="title fa-solid">The Watch Face</div>
            <img className="img-after-title" src="strap-end.png" alt="" />
          </div>
          <div className="search">
            <div className="search-inside" onClick={searchButton}>
              <input id="circle" className="circle" />
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
  