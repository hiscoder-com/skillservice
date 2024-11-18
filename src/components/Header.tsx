import Form from './Form'
import RunningLine from './RunningLine'

function Header() {
	return (
		<header className='relative pt-[4vh] pb-[4vh] min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-60% from-gradient-start to-gradient-end md:pt-[3.97vh] md:pb-[4.5vh] xl:pt-28 xl:pb-24 2xl:pt-[10.7vh] 2xl:pb-20'>
			<div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
				<div className='flex flex-col items-center xl:items-start'>
					<img
						src='Logo.svg'
						alt='Skilldor'
						className='w-[8vh] md:w-[9.54vh] xl:w-40 2xl:w-[15.63vh]'
					/>
					<h1 className='mt-[4.5vh] font-koulen text-[7.1vh] w-full leading-[0.9] font-normal text-center text-primary-500 md:mt-[3vh] md:text-110 xl:text-left xl:mt-12 xl:text-[7vw] 2xl:text-120 2xl:mt-14'>
						Master <br className='lg:hidden' /> Your Game,
						<br /> The Fun Way
					</h1>
					<span className='mt-[1.35vh] font-lexend text-[1.9vh] text-primary-400 font-semibold md:mt-[1.9vh] md:text-[1.9vh] xl:text-3xl xl:mt-6'>
						Train. Improve. Reward Yourself
					</span>
					<a
						target='_blank'
						href='https://www.instagram.com/skilldorcom'
						className='flex items-center mt-[2.7vh] text-primary-500 font-lexend font-semibold text-base md:text-xl md:mt-[2.54vh]  xl:mt-12'>
						<img
							src='instagram-icon.svg'
							alt='instagram'
							className='pr-3 w-[5vh] md:w-[4vh] xl:w-12'
						/>
						<span className='text-[1.7vh] md:text-[1.75vh] xl:text-2xl font-normal'>
							Join us now in Instagram!
						</span>
					</a>
				</div>
				<img
					src='BasketballBall@2x.png'
					alt='Basketball ball'
					className='mt-[2.25vh] w-[18vh] md:mt-[2.54vh] md:w-[23.7vh] xl:w-96 xl:mt-0 xl:self-start 2xl:w-588'
				/>
			</div>
			<Form />
			<RunningLine />
		</header>
	)
}

export default Header
