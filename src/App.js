import background from "./assets/Path.png";
import girl from "./assets/girl.png";
import men from "./assets/Group.png";
import icon from "./assets/Icon.png";
import { useState } from 'react'
import "./App.css";

function App() {
  const[ham,setHam]=useState(false)
  return (
    <div className="App">
      <img src={background} className="background"></img>
      <div className="nav">
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <h3 className="logo">LAND</h3>
        <button>Buy now</button>
      </div>
      <div className={ham?'hamburger active':'hamburger'}>
        {/* {ham?document.body.style.overflowY = "hidden":document.body.style.overflowY = "scroll"} */}
        <h3 className="logo">LAND</h3>
        <div className="links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="lines" onClick={()=>{setHam(!ham)}
        }>

          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
      <div className="first-sec">
        <div className="f-content">
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            <br />
            <br />
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
          <div className="buttons">
            <button>Purchase UI kit</button>
            <button>Learn more</button>
          </div>
        </div>
        <img src={men} alt="men"></img>
      </div>
      <div className="first-sec second">
        <div className="f-content">
          <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
            Light, Fast & Powerful
          </h1>
          <p style={{ marginTop: "0px" }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            <br />
            <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim.
          </p>
          <div className="icon-container">
            <div className="icon-part">
              <img src={icon}></img>
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
            <div className="icon-part">
              <img src={icon}></img>
              <h3>Title Goes Here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
            </div>
          </div>
        </div>
        <img src={girl} alt="men" id="secondimg"></img>
      </div>
    </div>
  );
}

export default App;
