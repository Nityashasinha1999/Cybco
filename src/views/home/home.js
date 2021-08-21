/** @format */
import React, { Component } from "react";
import { Container } from "reactstrap";
import Tata from "../../assets/images/icons/Tata.png";
import Infosys from "../../assets/images/icons/Infosys.png";
import Toggle from "../../assets/images/icons/Toggle.png";
class Home extends Component {
  render() {
    return (
      <div className='homeBlk'>
        <Container>
          <div className='d-flex justify-center homeWrap'>
            <div>
              <p className='hugeHeading'>Huge Collections</p>
              <p className='secondTitle'>All the brands, You know and trust!</p>
            </div>
          </div>
          <div className='searchBarBlk'>
            <div className='welcomeBlk'>
              <p className='welcome'>Welcome,</p>
            </div>
            <div className='searchBar'>
              <input
                className='search'
                type='text'
                placeholder='Type your drug name (like Paracetemol, Lipitor)'
              />
              <div className='go'>
                <p className='goText'>Go</p>
              </div>
            </div>
          </div>
          <div className='searchBarBlk'>
            <div className='welcomeBlk'>
              <p className='popularText'>Popular Searches</p>
            </div>
            <div className='medicines'>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
            </div>
            <div className='medicines'>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
            </div>
            <div className='medcinesSmall'>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
              <div className='med'>
                <p className='medText'>Paracetamol</p>
              </div>
            </div>
          </div>
          <div className='trusted__text'>
            <p className='trusted'>
              Trusted by various firms across India, help us serve you better...
            </p>
            <div className='trusted__icons'>
              <img src={Tata} alt='tata' />

              <img src={Infosys} alt='tata' />
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='toggle__Blk'>
              <img src={Toggle} alt='toggle' />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
