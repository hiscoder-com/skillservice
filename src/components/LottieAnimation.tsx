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
		<div className='absolute -top-[9vh] -left-7 w-[40vh] md:w-[40vh] md:-left-20 xl:w-[37.5vh] xl:mt-0 xl:self-start 2xl:w-[54.3vh]'>
			<Lottie options={defaultOptions} />
		</div>
	)
}

export default LottieAnimation
