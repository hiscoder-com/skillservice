import Form from './components/Form'
import Lottie from './components/LottieAnimation'
import RunningLine from './components/RunningLine'
import Social from './components/Social'

function App() {
	return (
		<div className='relative py-[3.8vh] min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-45% from-gradient-start to-gradient-end md:pt-[3.97vh] md:pb-[4.5vh] xl:pt-[8.6vh] xl:pb-[5.5vh] 2xl:py-[7vh]'>
			<div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
				<div className='flex flex-col items-center xl:items-start'>
					<img
						src='Logo.svg'
						alt='Skilldor'
						className='w-[17.03vh] md:w-[21.79vh] xl:w-[28.46vh] 2xl:w-[30.09vh]'
					/>
					<div className='relative'>
					<h1 className='mt-[3vh] font-lexend text-[5.24vh] w-full leading-[1.1] font-bold text-center text-primary-500 md:mt-[3.77vh] md:text-[7.33vh] xl:text-left xl:mt-[4.6vh] xl:text-[5.55vw] 2xl:text-[10.18vh] 2xl:mt-[4.44vh] animate-displayFirst'>
						<span className='lg:whitespace-nowrap'>Master <br className='md:hidden' /> Your Game,</span>
						<br /> The Fun Way
					</h1>
					<h2 className='absolute top-0 left-0 mt-[3.14vh] font-lexend text-[5.24vh] w-full leading-[1.1] font-bold text-center text-primary-500 md:mt-[3.77vh] md:text-[7.33vh] xl:text-left xl:mt-[4.6vh] xl:text-[5.55vw] 2xl:text-[10.18vh] 2xl:mt-[4.44vh] animate-displaySecond'>
					Skilldor: <br />
					<span className='md:whitespace-nowrap'>Discipline Gamified</span>
					</h2>
					</div>
					<span className='mt-[1.6vh] font-sourGummy text-[2.09vh] text-primary-400 font-semibold md:mt-[1.88vh] md:text-[2.51vh] xl:text-[3.06vh] xl:mt-[2.62vh] 2xl:text-[3.14vh]'>
						Train. Improve. Reward Yourself
					</span>
						<Social />
				</div>
				<div className='relative mx-auto w-[26vh] h-[20.7vh] md:h-[22vh] xl:w-[47vh] xl:h-[48vh] xl:mx-0 2xl:w-[61vh] 2xl:h-[55vh] overflow-hidden'>
					<Lottie />
				</div>
			</div>
			<Form />
			<RunningLine />
		</div>
	)
}

export default App
