import React from 'react';
import {
	BsArrowLeftShort,
	BsArrowRightShort,
	BsInstagram,
} from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
const image = [
	images.gallery01,
	images.gallery02,
	images.gallery03,
	images.gallery04
];

const Gallery = () => {
	const scrollRef = React.useRef(null);
	const scroll = (direction) => {
		const { current } = scrollRef;
		if (direction === 'left') {
			current.scrollLeft -= 300;
      console.log('hello');
		} else {
			current.scrollLeft += 300;
		}
	};
	return (
		<div className='app__gallery flex__center'>
			<div className='app__gallery-content'>
				<SubHeading title='Instagram' />
				<h1 className='headtext__cormorant'>Photos Gallery</h1>
				<p
					className='p__opensans'
					style={{ color: '#AAA', marginTop: '2rem' }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Modi libero architecto alias consequuntur itaque?
				</p>
				<button className='custom__button' type='button'>
					View More
				</button>
			</div>
			<div className='app__gallery-images'>
				<div className='app__gallery-images_container' ref={scrollRef}>
					{image.map((img, index) => (
						<div
							className='app__gallery-images_card'
							key={`gallery_image-${index + 1}`}>
							<img src={img} alt='gallery images' />
							<BsInstagram className='gallery_image-icon' />
						</div>
					))}
				</div>
				<div className='app__gallery-images_arrows'>
					<BsArrowLeftShort
						className='gallery__arrow-icon'
						onClick={() => scroll('left')}
					/>

					<BsArrowRightShort
						className='gallery__arrow-icon'
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
