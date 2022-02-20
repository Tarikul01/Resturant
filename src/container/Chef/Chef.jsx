import React from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Chef.css';

const Chef = () => (
	<div className='app__bg app__wrapper section__padding'>
		<div className='app__wrapper_img app__wrapper_reverse'>
			<img src={images.chef} alt='chef' />
		</div>
		<div className='app__wrapper_info'>
			<SubHeading title="Chef's word" />
			<h1 className='headText__cormorant'>What we believe In</h1>
			<div className='app__chef-content'>
				<div className='app__chef-content_quote'>
					<img src={images.quote} alt='quote' />
					<p className='p__opensans'>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Consequuntur, recusandae impedit.
					</p>
				</div>
				<p className='p__opensans'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eaque laudantium neque nulla quo qui soluta ipsa
					exercitationem perspiciatis facere maxime fuga consequatur
					error dolorum minima, vero atque dolores a voluptatum.
				</p>
			</div>
			<div className='app__chef-sign'>
				<p>Kevin Luo</p>
				<p className='p__opensans'>Chef & Founder</p>
				<img src={images.sign} alt="pic" />
			</div>
		</div>
	</div>
);

export default Chef;
