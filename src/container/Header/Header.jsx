import React from 'react';

import './Header.css';
import {SubHeading} from '../../components';
import images from '../../constants/images';

const Header = () =>{ 
  
  
  return (
  <div className='app__header app__wrapper section__padding' id='home'>
  <div className="app__wrapper_info">

  <SubHeading title="Chase the new flavour" />
  <h1 className="app__header-h1"> The Key to Fine Dining</h1>
  <p className="p__opensans" style={{margin:'2rem 0'}}>Lorem ipsum dolor s hit ammet consicsos sthisisis s.shshs </p>
  <div type="button" className="custom__button">Explore Menu</div>
  </div>
  <div className="app__wrapper_img">
  <img src={images.welcome}alt="background img" />
  </div>
 
  </div>

)};

export default Header;
