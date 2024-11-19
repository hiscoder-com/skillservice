import Form from './components/Form'
import LottieAnimation from './components/LottieAnimation'
import RunningLine from './components/RunningLine'

function App() {
	return (
		<div className='relative pt-[4vh] pb-[4vh] min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-60% from-gradient-start to-gradient-end md:pt-[3.97vh] md:pb-[4.5vh] xl:py-[8.6vh] 2xl:py-[7vh]'>
			<div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
				<div className='flex flex-col items-center xl:items-start'>
					<img
						src='Logo.svg'
						alt='Skilldor'
						className='w-[8vh] md:w-[9.54vh] xl:w-[15.62vh] 2xl:w-[15.63vh]'
					/>
					<h1 className='mt-[4.5vh] font-koulen text-[7.1vh] w-full leading-[0.9] font-normal text-center text-primary-500 md:mt-[3vh] md:text-110 xl:text-left xl:mt-[4.6vh] xl:text-[6.9vw] 2xl:text-[11.1vh] 2xl:mt-[5.18vh]'>
						Master <br className='lg:hidden' /> Your Game,
						<br /> The Fun Way
					</h1>
					<span className='mt-[1.35vh] font-lexend text-[1.9vh] text-primary-400 font-semibold md:mt-[1.9vh] md:text-[1.9vh] xl:text-[2.73vh] xl:mt-[2.34vh]'>
						Train. Improve. Reward Yourself
					</span>
					<a
						target='_blank'
						href='https://www.instagram.com/skilldorcom'
						className='flex items-center mt-[2.7vh] text-primary-500 font-lexend font-semibold text-base md:text-xl md:mt-[2.54vh]  xl:mt-[4.68vh]'>
						<img
							src='instagram-icon.svg'
							alt='instagram'
							className='pr-3 w-[5vh] md:w-[4vh] xl:w-[4.68vh]'
						/>
						<span className='text-[1.7vh] md:text-[1.75vh] xl:text-[2.34vh] font-normal'>
							Join us now in Instagram!
						</span>
					</a>
				</div>
				<div className='relative mx-auto w-[26vh] h-[24vh] xl:w-[47vh] xl:h-[48vh] xl:mx-0 2xl:w-[61vh] 2xl:h-[55vh] overflow-hidden'>
					<LottieAnimation />
				</div>
			</div>
			<Form />
			<RunningLine />
		</div>
	)
}

export default App
