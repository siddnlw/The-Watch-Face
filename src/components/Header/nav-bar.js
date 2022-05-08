const NavBar = ({ isOpen, setOpen }) => {

    const searchButton = () => {
      document.getElementById("circle").focus();
    };

    return (
        <div className="nav-bar">
          <button
            className="menu-button"
            onClick={() => setOpen(!isOpen)}
          >
            <div className={isOpen ? "menu-bars change" : "menu-bars" } onClick={() => setOpen(isOpen)}>
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
    );
  };
  
  export default NavBar;
  