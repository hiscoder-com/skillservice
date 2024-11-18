import RunningLine from './RunningLine'

function Header() {
	return (
		<header className='pt-10 pb-14 min-w-full min-h-full flex flex-col items-center justify-between bg-gradient-to-b from-60% from-gradient-start to-gradient-end md:pt-16 md:pb-20 xl:pt-32 xl:pb-24 2xl:pb-20'>
			<div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
				<div className='flex flex-col items-center xl:items-start'>
					<img
						src='Logo.svg'
						alt='Skilldor'
						className='max-w-20 w-[9vh] md:w-32 xl:w-40'
					/>
					<h1 className='mt-[4.5vh] font-koulen text-[8.1vh] leading-none font-normal text-center text-primary-500 md:mt-12 md:text-110 xl:text-left xl:mt-20 xl:text-100 2xl:text-120'>
						Master <br className='lg:hidden' /> Your Game,
						<br /> The Fun Way
					</h1>
					<span className='mt-[1.35vh] font-lexend text-[2.03vh] text-primary-400 font-semibold md:mt-6 md:text-2xl xl:text-3xl'>
						Train. Improve. Reward Yourself
					</span>
					<a
						target='_blank'
						href='https://www.instagram.com/skilldorcom'
						className='flex items-center mt-[2.7vh] text-primary-500 font-lexend font-semibold text-base md:text-xl md:mt-8 xl:text-2xl'>
						<img
							src='instagram-icon.svg'
							alt='instagram'
							className='pr-3 w-[5.6vh]'
						/>
						<span className='text-[1.8vh]'>Join us now in Instagram!</span>
					</a>
				</div>
				<img
					src='BasketballBall@2x.png'
					alt='Basketball ball'
					className='mt-[2.25vh] w-[21.59vh] md:mt-16 md:w-72 xl:w-96 xl:mt-0 xl:self-start 2xl:w-588'
				/>
			</div>
			<RunningLine />
		</header>
	)
}

export default Header
