import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div
		className='app__aboutus app__bg flex__center section__padding'
		id='about'>
		<div className='app__aboutus-overlay flex__center'>
			<img src={images.G} alt='G letter' />
		</div>
		<div className='app__aboutus-content flex__center'>
			<div className='app__aboutus-content_about'>
				<h1 className='headtext__cormorant'>About Us</h1>
				<img
					src={images.spoon}
					alt='about  spoon'
					className='spoon__img'
				/>
				<p className='p__opensans'>
					Lorem ipusum dolor shit ammet concequently this button is
					most important text
				</p>
				<button className='custom__button' type='button'>
					Know more
				</button>
			</div>
			<div className='app__aboutus-content_knife flext__center'>
				<img src={images.knife} alt='Knife img' />
			</div>
			<div className='app__aboutus-content_history'>
				<h1 className='headtext__cormorant'>Our history </h1>
				<img
					src={images.spoon}
					alt='about  spoon'
					className='spoon__img'
				/>
				<p className='p__opensans'>
					Lorem ipusum dolor shit ammet concequently this button is
					most important text
				</p>
				<button className='custom__button' type='button'>
					Know more
				</button>
			</div>
		</div>
	</div>
);

export default AboutUs;
