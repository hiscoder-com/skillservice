import Lottie from 'react-lottie'
import animationData from '../assents/animations/data.json'

const LottieAnimation = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div className='absolute -top-[9vh] -left-16 w-[40vh] md:w-[40vh] md:-left-20 xl:w-[70vh] 2xl:w-[87vh] 2xl:-top-[17vh]'>
			<Lottie options={defaultOptions} />
		</div>
	)
}

export default LottieAnimation
