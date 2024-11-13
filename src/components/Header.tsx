import RunningLine from './RunningLine'

function Header() {
	return (
		<div className='pt-10 pb-14 flex flex-col items-center bg-gradient-to-b from-60% from-gradient-start to-gradient-end md:pt-16 md:pb-20 xl:pt-32 xl:pb-24 2xl:pb-20'>
			<div className='flex flex-col xl:flex-row items-center w-full xl:px-14 xl:justify-between 2xl:px-32'>
				<div className='flex flex-col items-center xl:items-start'>
					<img src='Logo.svg' alt='Skilldor' className='w-20 md:w-32 xl:w-40' />
					<h1 className='mt-10 font-koulen text-7xl font-normal text-center text-primary-500 md:mt-12 md:text-110 xl:text-left xl:mt-20 xl:text-100 2xl:text-120'>
						Your <br className='md:hidden' /> Basketball <br /> Journey
						<br className='xl:hidden' />
						Starts Here
					</h1>
					<span className='mt-3 font-lexend text-lg text-primary-400 font-semibold md:mt-6 md:text-2xl xl:text-3xl'>
						Train. Improve. Reward Yourself
					</span>
				</div>
				<img
					src='BasketballBall.png'
					alt='Basketball ball'
					className='mt-5 w-48 md:mt-16 md:w-72 xl:w-96 xl:mt-0 xl:self-start 2xl:w-588'
				/>
			</div>
			<RunningLine />
		</div>
	)
}

export default Header
