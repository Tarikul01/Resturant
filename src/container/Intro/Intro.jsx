import React, { useState } from 'react';
import { meal } from '../../constants';
import {BsPauseFill,BsFillPlayFill} from 'react-icons/bs';
import './Intro.css';

const Intro = () => {
	const [play, setPlay] = useState(false);
	const vidRef = React.useRef();
  const handleVideo=()=>{
    setPlay((prevPlay)=> !prevPlay)
    if(play){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
	return (
		<div className='app__video'>
			<video
				src={meal}
				type='video/mp4'
				loop
				controls={false}
				muted
				ref={vidRef}
			/>
			<div className='app__video-overlay flex__center'>
				<div className='app__video-overlay_circle flex__center' onClick={handleVideo}      >
        {play?<BsPauseFill color="#fff" fontSize={30} />:<BsFillPlayFill color="#fff" fontSize={30}/>}
        </div>
			</div>
		</div>
	);
};

export default Intro;
