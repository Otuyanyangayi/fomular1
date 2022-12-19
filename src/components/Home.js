import React from "react";
import background from "../assets/audi.jpeg";
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpeg';
import d1 from '../assets/british.png';
import d2 from '../assets/german.png';
import d3 from '../assets/fin.jpg';
import flg from '../assets/ger.png';
import './style.css';

export default function Home() {

  return (
    <div>

      <div className="float-container">
        <div className="float-child" style={{
          backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat"
          , backgroundSize: "cover", color: "white"
        }} >


          <div>
            <span className="home-span">Featured</span>
            <h2 className="home-h2">Audi torn on Engine <br></br> Deal for Red Bull <br></br> Racing</h2>

            <p>Toto Wolff has admitted supplying Red Bull with <br></br> engines
              could be "an attractive option" for Mercedes. It <br></br>
              is a significant change...</p>
          </div>

        </div>
        <div className="float-child1">
          <h3 className="">Top Stories</h3>

          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                  August 20,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>

                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  August 19,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  August 18,2015
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <ul style={{ color: "whitesmoke" }}>
                    <li ><a style={{ color: "black" }} href="#" >Vettel will do anything to 'annoy Mercedes'</a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Renault continued to work hard during summer break </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">A lap Spa-Francorchamps onboard with Rosberg </a></li>
                    <hr />
                    <li><a style={{ color: "black" }} href="#">Clamdown on starts 'step in right direction </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="parent">
        <div className="child" style={{backgroundImage: `url(${f2})`,backgroundRepeat: "no-repeat"
          , backgroundSize: "cover", color: "white"}}>
      <div style={{
          backgroundImage: `url(${f2})`, backgroundRepeat: "no-repeat"
          , backgroundSize: "cover", color: "white"
        }}>
        <div class="coli">
          <div class="card">
            <img src={f2} class="card-img-top" alt="..." />
            <div class="card-body">

              <p class="card-text"><a href="https://www.autosport.com/formula-e/news/ex-f1-racer-jarno-trulli-steps-down-from-racing-in-formula-e-5002232/5002232/"></a></p>
              <h6 class="card-title">Formula 1</h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={f3} class="card-img-top" alt="..." />
            <div class="card-body">

              <p class="card-text"><a href="https://au.motorsport.com/f1/news/rosberg-f1-tyre-blowouts-need-to-be-sorted-before-monza/2946480/">.</a></p>
              <h6 class="card-title">Formula 1</h6>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="child" style={{backgroundImage: `url(${f3})`, backgroundRepeat: "no-repeat"
          , backgroundSize: "cover", color: "white"}}>

    </div>
    <div className="child">
    <h3 className="">WC Standings</h3>
    <table>
  <tr>
    <td><img className="d" src={d1} class="card-img-top" alt="..." /></td>
    <td>Lewis Hamilton <br></br><span>Mercedes GP</span></td>
    <td>202</td>
  </tr>
  <tr>
    <td><img className="d" src={d2} class="card-img-top" alt="..." /></td>
    <td>Nico Rosberg <br></br><span>Mercedes GP</span></td>
    <td>181</td>
  </tr>
  <tr>
    <td><img className="d" src={d2} class="card-img-top" alt="..." /></td>
    <td>Sebastian Vettel <br></br><span>Ferrari</span></td>
    <td>160</td>
  </tr>
  <tr>
    <td><img className="d" src={d3} class="card-img-top" alt="..." /></td>
    <td>Valtteri Bottas <br></br><span>Williams</span></td>
    <td>77</td>
  </tr>
  <tr>
    <td><img className="d" src={d3} class="card-img-top" alt="..." /></td>
    <td>Kimi Raikkinen <br></br><span>Ferrari</span></td>
    <td>76</td>
  </tr>
</table>
    </div>
    <div className="child">
    <h3 className="">Team Standings</h3>
    <table>
  <tr>
    <td><img className="d" src={flg} class="card-img-top" alt="..." /></td>
    <td><span>Mercedes GP</span></td>
    <td>383</td>
  </tr>
  <tr>
    <td><img className="d" src={d2} class="card-img-top" alt="..." /></td>
    <td><span>Ferrari</span></td>
    <td>181</td>
  </tr>
  <tr>
    <td><img className="d" src={d2} class="card-img-top" alt="..." /></td>
    <td><span>Williams</span></td>
    <td>160</td>
  </tr>
  <tr>
    <td><img className="d" src={d3} class="card-img-top" alt="..." /></td>
    <td><span>Red Bull Racing</span></td>
    <td>96</td>
  </tr>
  <tr>
    <td><img className="d" src={d3} class="card-img-top" alt="..." /></td>
    <td><span>Force India</span></td>
    <td>39</td>
  </tr>
</table>
    </div>
    </div>
    </div>
  )
}
