import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
	<div className='app__footer section__padding' id='contact'>
		<FooterOverlay />
		<Newsletter />
		<div className='app__footer-links'>
			<div className='app__footer-links_contact'>
				<h1 className='app__footer-headtext'>Contact Us</h1>
				<p className='p__opensans'>
					9 W 53rd St, New York, Ny 10010, USA
				</p>
				<p className='p__opensans'>+900 4e443</p>
				<p className='p__opensans'>+9 3435342</p>
			</div>
			<div className='app__footer-links_logo'>
				<img src={images.gericht} alt='Footer_logo' />
				<p className='p__opensans'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Deleniti ratione, quisquam
				</p>
				<img
					src={images.spoon}
					alt='Spoon'
					className='spoon__img'
					style={{ marginTop: '50px;' }}
				/>
				<div className='app__footer-links_icons'>
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
        </div>
			<div className='app__footer-links_works'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
      <p className='p__opensans'>Monday-Friday
      </p>
      <p className='p__opensans'>+6.00 AM to 6.00 PM</p>
      
      </div>
		</div>
		<div className='footer__copyright'>
			<p className='p__opensans'>2022 Gerich. All Right Reserves</p>
		</div>
	</div>
);

export default Footer;
